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

// Email delivery is wired once the sender domain is verified; until then every
// submission is stored and logged so nothing is lost.
async function notifyOwner(data: ContactInput) {
  console.info(
    `New contact submission for ${OWNER_EMAIL}: ${data.name} <${data.email}>${
      data.company ? ` (${data.company})` : ""
    }`,
  );
}
