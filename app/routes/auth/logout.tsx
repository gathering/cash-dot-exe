import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "../../services/auth.server";

export const action: ActionFunction = ({ request }) => {
  return authenticator.logout(request, {
    redirectTo: "/",
  });
};

export const loader = () => {
  return redirect("/");
};
