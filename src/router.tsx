import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { NotFound } from "./components/NotFound";

export const router = createTanStackRouter({
  routeTree,
  defaultPreload: "intent",
  defaultNotFoundComponent: () => <NotFound />,
  scrollRestoration: true,
});

export function getRouter() {
  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
