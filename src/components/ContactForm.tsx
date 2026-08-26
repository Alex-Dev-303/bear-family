import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { sendContactMessage } from "@/lib/contact.functions";
import { contactSchema } from "@/lib/contact.shared";

type Errors = Partial<Record<"name" | "email" | "company" | "message", string>>;

export function ContactForm() {
  const submit = useServerFn(sendContactMessage);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      await submit({ data: parsed.data });
      setStatus("sent");
    } catch {
      setErrorMessage("Something went wrong. Please email us directly at contact@bearfamily.llc.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="surface-card flex flex-col items-center gap-4 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="text-xl font-semibold">Message sent — thank you!</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          We received your details and will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="surface-card space-y-5 p-7 text-left" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            name="name"
            maxLength={100}
            placeholder="Jane Founder"
            className={inputClass}
            autoComplete="name"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            name="email"
            type="email"
            maxLength={255}
            placeholder="jane@startup.com"
            className={inputClass}
            autoComplete="email"
          />
        </Field>
      </div>
      <Field label="Company (optional)" error={errors.company}>
        <input name="company" maxLength={120} placeholder="Startup Inc." className={inputClass} />
      </Field>
      <Field label="What are you building?" error={errors.message}>
        <textarea
          name="message"
          rows={5}
          maxLength={2000}
          placeholder="Tell us about your product, stage, and timeline."
          className={`${inputClass} resize-y`}
        />
      </Field>

      {status === "error" && <p className="text-sm text-destructive">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send message
          </>
        )}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
      {children}
      {error && <span className="block text-xs text-destructive">{error}</span>}
    </label>
  );
}
