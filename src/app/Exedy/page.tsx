import { redirect } from "next/navigation";

/**
 * Legacy route — redirects to the canonical sponsor showcase page.
 */
export default function ExedyRedirect() {
  redirect("/sponsors/exedy");
}
