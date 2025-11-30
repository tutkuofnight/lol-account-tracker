import AccountsList from "@/components/accounts-list"
import GameNameAndTagline from "@/components/game-name-and-tagline"
import Header from "@/components/header"

export default function index() {
  return (
    <div className="flex flex-col h-screen">
      <div className="banner-image">
        <Header />
        <GameNameAndTagline />
      </div>
      <AccountsList />
    </div>
  )
}