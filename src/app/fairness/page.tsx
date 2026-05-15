import { permanentRedirect } from "next/navigation";

/** Old HabiMate-era route; send bookmarks and store links to Terms. */
export default function FairnessRedirectPage() {
  permanentRedirect("/terms");
}
