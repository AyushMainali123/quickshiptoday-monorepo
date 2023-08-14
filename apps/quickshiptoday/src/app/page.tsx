import { redirect } from "next/navigation";
export default function Home() {
 
  // Temporary redirect (307 redirect) to schedule-pickup page
  redirect("/schedule-pickup");
}
