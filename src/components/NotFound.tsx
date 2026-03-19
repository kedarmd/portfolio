import { Link } from "@tanstack/react-router";

export function NotFound({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1
          className="text-6xl font-bold mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          404
        </h1>
        <p className="text-xl mb-4" style={{ color: "var(--color-text-muted)" }}>
          {children || "The page you were looking for doesn't exist."}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 rounded"
            style={{ backgroundColor: "var(--color-surface)", color: "var(--color-text)" }}
          >
            Go back
          </button>
          <Link
            to="/"
            className="px-4 py-2 rounded"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-bg)" }}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
