import Piano from "./piano";

export default function Home() {
  return (
    <>
      <nav className="w-full p-4 border-b border-b-slate-200 dark:border-b-slate-700 mb-4 bg-primary text-primary-foreground text-2xl text-center font-bold italic">
        <h1>Piano App</h1>
      </nav>
      <div className="flex flex-col items-center min-h-screen p-4">
        <Piano />
      </div>
    </>
  );
}
