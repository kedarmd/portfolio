import type { PageProps } from "fresh";
import Navbar from "../islands/Navbar.tsx";
import { define } from "../utils.ts";

export default define.layout(function Layout({ Component }: PageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Component />
    </div>
  );
});
