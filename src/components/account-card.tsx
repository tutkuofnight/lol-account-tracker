import { type Account, Leagues } from "@/types";
import { Skeleton } from "@/components/ui/skeleton"

export function AccountCard({ account }: { account: Account }){
  return (
    <div className="flex items-center gap-4">
      <img src={account.profileIcon} alt={account.profile.gameName + "#" + account.profile.tagLine} className="w-14 rounded-full" />
      <div className="flex flex-col gap-1">
        <p className="text-xl font-semibold">{account.profile.gameName}#{account.profile.tagLine}</p>
        <div className="flex items-center gap-4 flex-row-reverse justify-end">
          {account.leagues.length > 0 ? account.leagues.map(rank => (
            <small key={rank.leagueId}>{Leagues[rank.queueType as keyof typeof Leagues]}: {rank.tier} {rank.rank}</small>
          )) : <small>Unranked</small>}
        </div>
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