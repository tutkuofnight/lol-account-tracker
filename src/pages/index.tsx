import AccountsList from "@/components/accounts-list"
import GameNameAndTagline from "@/components/game-name-and-tagline"

export default function index() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <GameNameAndTagline />
      <AccountsList />
    </div>
  )
}