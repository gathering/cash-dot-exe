import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import messageBoxStyle from "@fremtind/jkl-message-box/message-box.min.css";
import buttonStyle from "@fremtind/jkl-button/button.min.css";
import { initTabListener } from "@fremtind/jkl-core";
import rootStyle from "./styles/root.css";

const jklStyles: string[] = [messageBoxStyle, buttonStyle];

export const links: LinksFunction = () => [
  {
    href: "https://rsms.me/inter/inter.css",
    rel: "stylesheet",
  },
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

initTabListener();

export default function App() {
  return (
    <html lang="no">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="jkl" data-theme="light">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
