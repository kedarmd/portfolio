import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: Blog,
});

function Blog() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-4">Coming soon...</p>
    </div>
  );
}

export default Blog;
