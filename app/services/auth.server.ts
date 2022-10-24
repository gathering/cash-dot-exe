import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import type { UnicornProfile } from "./unicornAuth.server";
import { UnicornStrategy } from "./unicornAuth.server";

export let authenticator = new Authenticator<UnicornProfile>(sessionStorage);

authenticator.use(
  new UnicornStrategy({ domain: "unicorn.gathering.org/api" }, (a) => {
    return a;
  })
);
