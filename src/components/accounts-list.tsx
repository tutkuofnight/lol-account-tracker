import { useAtom } from "jotai"
import { accountsListStore } from "@/store"
export default function AccountsList() {
  const [ accounts ] = useAtom(accountsListStore)
  return (
    <div>
      {accounts.length > 0 ? accounts.map((account, key) => (
        <div className="flex items-center gap-4">
          <img src={account.profileIcon} alt={account.profile.gameName + "#" + account.profile.tagLine} />
          <div>
            <p key={key}>{account.profile.gameName}#{account.profile.tagLine}</p>
            <small>{account.leagues.rank}</small>
          </div>
        </div>
      )) : <p>No data here...</p>}
    </div>
  )
}
