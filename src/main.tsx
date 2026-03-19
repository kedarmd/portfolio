import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-start/router";
import { router } from "./router";

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
}
