"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function signInWithGithub(fromData: FormData) {
  const callback = fromData.get("callbackUrl");

  const result = await auth.api.signInSocial({
    body: {
      provider: "github",
      callbackURL: "/dashboard" as string,
    },
    headers: await headers(),
  });

  if (result?.url) redirect(result.url);
}
