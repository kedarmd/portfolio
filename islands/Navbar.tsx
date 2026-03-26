import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const PAGES = [
  { name: "About", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "Blog", path: "/blog" },
];

const prefetched = new Set<string>();

function prefetch(href: string) {
  if (!href || prefetched.has(href)) {
    return;
  }

  prefetched.add(href);

  const run = () => {
    fetch(href, { headers: { "x-prefetch": "1" } }).catch(() => {});
  };

  if ("requestIdleCallback" in globalThis) {
    (globalThis as { requestIdleCallback: (cb: () => void) => void })
      .requestIdleCallback(run);
  } else {
    run();
  }
}

export default function Navbar() {
  const currentPath = useSignal<string>("/");

  useEffect(() => {
    const updatePath = () => {
      currentPath.value = globalThis.location?.pathname ?? "/";
    };

    updatePath();
    globalThis.addEventListener?.("popstate", updatePath);

    return () => {
      globalThis.removeEventListener?.("popstate", updatePath);
    };
  }, [currentPath]);

  return (
    <nav
      className="px-6 py-4 flex justify-between items-center border-b"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
        color: "var(--color-text)",
      }}
    >
      <a href="/" className="text-xl font-bold">
        KMD
      </a>
      <ul className="flex space-x-6">
        {PAGES.map((page) => {
          const isActive = currentPath.value === page.path;

          return (
          <li key={page.name}>
            <a
              href={page.path}
              className={`p-2 rounded transition-colors duration-200 hover:opacity-80 ${
                isActive ? "text-[color:var(--color-accent)] font-semibold" : ""
              }`}
              style={!isActive ? { color: "var(--color-text)" } : undefined}
              onPointerEnter={() => prefetch(page.path)}
              onFocus={() => prefetch(page.path)}
            >
              {page.name}
            </a>
          </li>
          );
        })}
      </ul>
    </nav>
  );
}
