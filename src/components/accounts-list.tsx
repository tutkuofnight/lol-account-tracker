import { useAtom } from "jotai"
import { accountNamesStore } from "@/store"
import { AccountCard, AccountCardSkeleton } from "@/components/account-card"
import { fetchAllAccounts } from "@/lib/fetchAccounts"
import { useQuery } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { RefreshCcw, Codepen } from "lucide-react"

export default function AccountsList() {
  // const [accounts] = useAtom(accountsListStore)
  const [accountNames] = useAtom(accountNamesStore)
  
  const { isPending, data } = useQuery({ 
    queryKey: ['accounts', accountNames, {preview: true}],
    queryFn: () => fetchAllAccounts(accountNames),
    enabled: accountNames.length > 0,
    staleTime: 0
  })

  const AccountListHeader = () => (
    <div className="flex items-center justify-between py-8">
      <h3 className="font-semibold text-xl">Accounts</h3>
      <Button variant={"outline"}>
        <RefreshCcw /> 
        Refresh
      </Button>
    </div>
  )
  
  if (isPending) {
    return (
      <section className="base-width">
        <AccountListHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 py-8 mx-auto">
          {accountNames.map((_, index) => (
            <AccountCardSkeleton key={index} />
          ))}
        </div>
      </section>
    )
  }

  if (!data) {
    return (
      <div className="base-width">
        <AccountListHeader />
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 *:text-gray-500">
          <Codepen size={50} />
          <p>No Added Accounts</p>
        </div>
      </div>
    )
  }
  
  return (
    <section className="base-width">
      <AccountListHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 py-8 mx-auto">
        {data.map((account, index) => (
          <AccountCard account={account} key={index} />
        ))}
      </div>
    </section>
  )
}