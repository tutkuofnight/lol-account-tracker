import { Github, Slash } from "lucide-react"
import { Button } from "./ui/button"
export default function Header(){
  return (
    <header className="bg-black/80">
      <nav className="base-width flex items-center justify-between h-20 border-b">
        <div className="flex items-center gap-2">
          <img src="/LoL.png" alt="League of Legends Account Tracker" className="w-6 -mb-1" />
          <span className="text-[24px]">/</span>
          <h1 className="text-xl font-semibold">Account Tracker</h1>
        </div>
        <a href="https://github.com/tutkuofnight/lol-account-tracker" target="_blank">
          <Button variant={"outline"}>
            <Github size={24} />
            GitHub
          </Button>
        </a>
      </nav>
    </header>
  )
}