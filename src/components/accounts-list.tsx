import { Suspense } from "react"
import { useAtom } from "jotai"
import { accountsListStore } from "@/store"

import { AccountCard, AccountCardSkeleton } from "@/components/account-card"

export default function AccountsList() {
  const [ accounts ] = useAtom(accountsListStore)
  console.log(accounts)
  return (
    <div className="flex items-center gap-8">
      <Suspense>
        {accounts.length > 0 ? accounts.map((account, key) => (
          <AccountCard account={account} key={key} />
        )) : <p>No data here...</p>}
      </Suspense>
    </div>
  )
}
