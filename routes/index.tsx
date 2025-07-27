const CONTACTS = [
  {
    name: "GitHub",
    url: "https://github.com/kedarmd",
  },
  {
    name: "Gmail",
    url: "mailto:dindekedar@gmail.com",
  },
  {
    name: "LinkedIn",
    url: "https://in.linkedin.com/in/kedar-dinde-a540a653",
  },
];

function Hero() {
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="" style="color: var(--color-accent)">
        Hi, my name is
      </div>
      <div class="text-8xl font-bold mt-2">
        Kedar M. Dinde
      </div>
      <div class="text-6xl mt-2" style="color: var(--color-text-muted)">
        I build scalable and efficient web applications.
      </div>
      <div class="mt-4 text-lg w-4/12" style="color: var(--color-text-muted)">
        I'm a software engineer with a passion for creating innovative
        solutions. I specialize in full-stack development, focusing on
        performance and user experience.
        <div>
          I also enjoy developing tools and libraries for Neovim and Wezterm.
        </div>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div class="flex flex-col justify-end gap-6 p-6">
      {CONTACTS.map((contact) => (
        <a
          key={contact.name}
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`/${contact.name.toLowerCase()}.svg`}
            alt={contact.name}
            style={{
              width: "36px",
              height: "36px",
            }}
            className="transition-transform hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex-1 flex">
      <Contacts />
      <Hero />
    </div>
  );
}
