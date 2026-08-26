import { createServerFn } from "@tanstack/react-start";

import { contactSchema, submitContact } from "./contact.server";

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => submitContact(data));
