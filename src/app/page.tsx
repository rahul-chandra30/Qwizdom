import SignInButton from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect('/dashboard')
  }

  return (
    < div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2" >
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Qwizdom 🧠! </CardTitle>
          <CardDescription>Qwizdom is an AI generated quiz which allows you to create and share quiz based on various topics with your friends.</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google"></SignInButton>
        </CardContent>
      </Card>
    </div >
  )
}
