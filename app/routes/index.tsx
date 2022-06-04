import { Link } from "@fremtind/jkl-core";

export default function Index() {
  return (
    <>
      <h1 className="jkl-heading-1">Welcome to Remix</h1>
      <ul>
        <li>
          <Link
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </Link>
        </li>
      </ul>
    </>
  );
}
