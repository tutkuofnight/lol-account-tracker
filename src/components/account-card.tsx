import { type Account, Leagues } from "@/types";
import { Skeleton } from "@/components/ui/skeleton"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSetAtom } from "jotai"
import { accountNamesStore } from "@/store"

export function AccountCard({ account }: { account: Account }){
  const setAccountNames = useSetAtom(accountNamesStore)
  
  const removeAccount = () => {
    setAccountNames((accountNames) => accountNames.filter(accName => accName.tagLine !== account.profile.tagLine))
  }
  
  return (
    <div className="flex items-center gap-4">
      <div className={`border-2 rounded-full p-1 w-16 ${account.activeGame ? "border-green-500" : "border-gray-500"}`}>
        <img src={account.profile.profileIconId ? account.profileIcon : "/default.png"} alt={account.profile.gameName + "#" + account.profile.tagLine} className="w-14 rounded-full" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 group">
          <p className="text-xl font-semibold">{account.profile.gameName}#{account.profile.tagLine}</p>
          <Button variant="ghost" className="hidden group-hover:block px-1 h-7 has-[>svg]:px-2" onClick={removeAccount}>
            <Trash2 color="red" className="mb-4" />
          </Button>
        </div>
        <div className="flex items-center gap-4 flex-row-reverse justify-end">
          {account.leagues.length > 0 ? account.leagues.map(rank => (
            <small key={rank.leagueId}>{Leagues[rank.queueType as keyof typeof Leagues]}: {rank.tier} {rank.rank}</small>
          )) : <small>Unranked</small>}
        </div>
        <small className={`font-semibold flex items-center gap-2 ${account.activeGame ? 'text-green-500' : 'text-gray-500'}`}>
          <div className={`w-2.5 h-2.5 rounded-full ${account.activeGame ? 'bg-green-500' : 'bg-gray-500'}`}></div>
          {account.activeGame ? "In Active Game" : "Not Active Game"}
        </small>
      </div>
    </div>
  )
}

export function AccountCardSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-14 w-14 rounded-full" />
      <div className="flex flex-col gap-1">
        <Skeleton className="h-7 w-[206px] rounded" />
        <Skeleton className="h-[19.19px] w-[206px] rounded" />
      </div>
    </div>
  )
}