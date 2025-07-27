const CONTACTS = [
  {
    name: "Email",
    value: "dindekedar@gmail.com",
    icon: "Gmail",
  },
  {
    name: "GitHub",
    value: "https://github.com/kedarmd",
    icon: "GitHub",
  },
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/kedarmd/",
    icon: "LinkedIn",
  },
];

export default function Contact() {
  return (
    <div>
      <h1 class="text-3xl font-bold">Contact</h1>
      <ul class="mt-4">
        <li>
          <h2 class="text-xl font-semibold">Email</h2>
          {CONTACTS.map((contact) => (
            <p class="mt-2" key={contact.name}>
              {contact.name === "Email"
                ? (
                  <a
                    href={`mailto:${contact.value}`}
                    class="hover:underline"
                    style="color: var(--color-text-muted)"
                  >
                    {contact.value}
                  </a>
                )
                : (
                  <a
                    href={contact.value}
                    class="hover:underline"
                    style="color: var(--color-text-muted)"
                  >
                    {contact.value}
                  </a>
                )}
            </p>
          ))}
        </li>
      </ul>
    </div>
  );
}
