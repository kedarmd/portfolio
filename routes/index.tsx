function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      class="w-9 h-9 text-[color:var(--color-accent)] hover:scale-110 transition-transform"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="12"
        d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
      />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      class="w-9 h-9 text-[color:var(--color-accent)] hover:scale-110 transition-transform"
      fill="none"
    >
      <path
        d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="12"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-8 h-8 text-[color:var(--color-accent)] hover:scale-110 transition-transform"
    >
      <path
        d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

const CONTACTS = [
  {
    name: "GitHub",
    url: "https://github.com/kedarmd",
    icon: GitHubIcon,
  },
  {
    name: "Gmail",
    url: "mailto:dindekedar@gmail.com",
    icon: GmailIcon,
  },
  {
    name: "LinkedIn",
    url: "https://in.linkedin.com/in/kedar-dinde-a540a653",
    icon: LinkedInIcon,
  },
];

function Hero() {
  return (
    <div class="flex-1 flex flex-col justify-center items-start gap-4 px-6 py-8">
      <div class="" style="color: var(--color-accent)">
        Hi, my name is
      </div>
      <div class="text-8xl font-bold mt-2">
        Kedar M. Dinde
      </div>
      <div class="text-6xl mt-2" style="color: var(--color-text-muted)">
        Engineering beautiful Uls and scalable backends with modern web tech
      </div>
      <div class="mt-4 text-lg w-6/12" style="color: var(--color-text-muted)">
        I'm a software engineer with a passion for creating innovative
        solutions. I specialize in full-stack development, focusing on
        performance and user experience.
        <div>
          I also enjoy developing tools and libraries for Neovim and Wezterm.
        </div>
        <div>
          Yes, I use Neovim, btw :)
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
          <contact.icon />
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
