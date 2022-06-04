import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import coreStyle from "@fremtind/jkl-core/core.min.css";
import rootStyle from "./styles/root.css";

const jklStyles: string[] = [coreStyle];

export const links: LinksFunction = () => [
  {
    href: rootStyle,
    rel: "stylesheet",
  },
  ...jklStyles.map((style) => ({
    href: style,
    rel: "stylesheet",
  })),
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Premiehåndtering - The Gathering",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="no">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="jkl" data-theme="light">
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
