import { ModeToggle } from "../components/ui/mode-toggle";

export default function Home() {
  console.log("---------------------", process.env.DATABASE_URL);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ModeToggle />
    </div>
  );
}
