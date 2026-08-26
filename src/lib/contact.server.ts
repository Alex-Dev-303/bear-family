import { contactSchema, type ContactInput } from "./contact.shared";

export { contactSchema };
export type { ContactInput };


export async function submitContact(data: ContactInput) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const { error } = await supabaseAdmin.from("contact_submissions").insert({
    name: data.name,
    email: data.email,
    company: data.company ? data.company : null,
    message: data.message,
  });

  if (error) {
    console.error("contact_submissions insert failed", error);
    throw new Error("We could not record your message. Please try again.");
  }

  await notifyOwner(data);

  return { ok: true as const };
}

// Notification target for new enquiries.
const OWNER_EMAIL = "klam55108@gmail.com";

async function notifyOwner(data: ContactInput) {
  try {
    const mod = (await import("@/lib/email-templates/send-email").catch(() => null)) as {
      sendTemplateEmail?: (
        template: string,
        to: string,
        options?: { templateData?: Record<string, unknown> },
      ) => Promise<unknown>;
    } | null;

    if (!mod?.sendTemplateEmail) return;

    await mod.sendTemplateEmail("contact-notification", OWNER_EMAIL, {
      templateData: {
        name: data.name,
        email: data.email,
        company: data.company || undefined,
        message: data.message,
      },
    });
  } catch (error) {
    // Never fail the submission because of email delivery.
    console.error("contact notification email failed", error);
  }
}
