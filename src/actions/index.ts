import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_KEY);

export const server = {
  sendEmail: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(1),
      email: z.email(),
      message: z.string().min(1),
    }),
    handler: async ({ name, email, message }) => {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: ['moisesfreites3@gmail.com'],
        subject: `New message from ${name} (${email})`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2 style="color: #c9a84c;">New message from your portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr style="border: 1px solid #eee;" />
            <p>${message}</p>
          </div>
        `,
      });

      if (error) {
        return { error: error.message };
      }

      return { data };
    },
  }),
};
