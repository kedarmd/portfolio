import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import { StrictMode } from "react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      {
        title: "Kedar M. Dinde - Portfolio",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "/styles.css",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <StrictMode>
      <html lang="en">
        <head>
          <HeadContent />
        </head>
        <body>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Outlet />
          </div>
          <Scripts />
        </body>
      </html>
    </StrictMode>
  );
}
