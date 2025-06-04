import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to the static HTML file in the public directory
  redirect("/index.html")

  // This won't be reached due to the redirect
  return null
}
