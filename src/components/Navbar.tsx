import { Link } from "@tanstack/react-router";

const PAGES = [
  { name: "About", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  return (
    <nav
      className="px-6 py-4 flex justify-between items-center border-b"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
        color: "var(--color-text)",
      }}
    >
      <Link to="/" className="text-xl font-bold">
        KMD
      </Link>
      <ul className="flex space-x-6">
        {PAGES.map((page) => (
          <li key={page.name}>
            <Link
              to={page.path}
              className="p-2 rounded transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--color-text)" }}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
