const PAGES = [
  { name: "Home", path: "/" },
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
      <div
        class="text-xl font-bold"
        style={{ color: "var(--color-accent)" }}
      >
        KMD
      </div>
      <ul class="flex space-x-6">
        {PAGES.map((page) => (
          <li key={page.name}>
            <a
              href={page.path}
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
