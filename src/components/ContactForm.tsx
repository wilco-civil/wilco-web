import { useState } from "react";

const DEFAULT_EMAIL = "info@wilcocivil.ca";

export function ContactForm({ email }: { email?: string }) {
  const CONTACT_EMAIL = email ?? DEFAULT_EMAIL;
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-2xl">
      <h2 className="text-display text-3xl text-primary sm:text-4xl">
        Contact Us Today!
      </h2>
      <div className="mt-5 h-1 w-20 bg-accent" />

      {sent ? (
        <p className="mt-8 border-l-2 border-accent bg-card px-5 py-4 text-base text-foreground/80">
          Thanks for reaching out. Your email app should now be open with your
          message ready to send to{" "}
          <a className="text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      ) : (
        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = String(data.get("name") ?? "");
            const email = String(data.get("email") ?? "");
            const subject = String(data.get("subject") ?? "") || "Website enquiry";
            const message = String(data.get("message") ?? "");
            const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
            window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              subject,
            )}&body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
        >

          <div>
            <label
              htmlFor="cf-name"
              className="block text-sm font-medium text-foreground/70"
            >
              Your Name (required)
            </label>
            <input
              id="cf-name"
              name="name"
              required
              className="mt-2 w-full border border-border bg-card px-3 py-2 text-base text-foreground outline-none focus:border-accent"
            />
          </div>

          <div>
            <label
              htmlFor="cf-email"
              className="block text-sm font-medium text-foreground/70"
            >
              Your Email (required)
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              className="mt-2 w-full border border-border bg-card px-3 py-2 text-base text-foreground outline-none focus:border-accent"
            />
          </div>

          <div>
            <label
              htmlFor="cf-subject"
              className="block text-sm font-medium text-foreground/70"
            >
              Subject
            </label>
            <input
              id="cf-subject"
              name="subject"
              className="mt-2 w-full border border-border bg-card px-3 py-2 text-base text-foreground outline-none focus:border-accent"
            />
          </div>

          <div>
            <label
              htmlFor="cf-message"
              className="block text-sm font-medium text-foreground/70"
            >
              Your Message
            </label>
            <textarea
              id="cf-message"
              name="message"
              rows={7}
              className="mt-2 w-full border border-border bg-card px-3 py-2 text-base text-foreground outline-none focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
