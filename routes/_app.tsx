import { type PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>portfolio</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Component />
        </div>
      </body>
    </html>
  );
}
