const PAGES = [
  { name: "About", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav
      class="px-6 py-4 flex justify-between items-center border-b"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
        color: "var(--color-text)",
      }}
    >
      <a
        class="text-xl font-bold text-accent"
        href="/"
      >
        KMD
      </a>
      <ul class="flex space-x-6">
        {PAGES.map((page) => (
          <li key={page.name}>
            <a
              href={page.path}
              preload="hover"
              class="p-2 rounded transition-colors duration-200"
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
