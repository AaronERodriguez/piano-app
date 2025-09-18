import { ModeToggle } from "@/components/toggle-theme";
import Piano from "./piano";

export default function Home() {
  return (
    <>
      <nav>
        <ModeToggle />
      </nav>
      <div className="flex flex-col items-center min-h-screen p-4">
        <Piano />
      </div>
    </>
  );
}
