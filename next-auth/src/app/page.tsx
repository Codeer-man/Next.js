import Loginbutton from "@/components/auth/Loginbutton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full flex-col bg-sky-500">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md text-center">
          Auth
        </h1>
        <p className="text-white text-lg  ">
          A simple authentication service
        </p>
      </div>
      <Loginbutton >
        <Button variant="link" size="lg" className="rounded-full">Click me</Button>
      </Loginbutton>
    </main>
  );
}
