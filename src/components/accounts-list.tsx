import { useAtom } from "jotai"
import { accountNamesStore } from "@/store"
import { AccountCard, AccountCardSkeleton } from "@/components/account-card"
import { fetchAllAccounts } from "@/lib/fetchAccounts"
import { useQuery } from "@tanstack/react-query"

import { Codepen } from "lucide-react"

export default function AccountsList() {
  const [accountNames] = useAtom(accountNamesStore)
  
  const { isPending, data } = useQuery({  
    queryKey: ['accounts', accountNames],
    queryFn: () => fetchAllAccounts(accountNames),
    enabled: accountNames.length > 0,
    staleTime: 1000 * 60
  })
  console.log("data", data)
  
  const AccountListHeader = () => (
    <div className="flex flex-col justify-between py-8 sm:flex-row sm:items-center">
      <h3 className="font-semibold text-xl">Accounts</h3>
      <small>You can see here your added accounts and current status</small>
    </div>
  )

  if (!data || accountNames.length === 0) {
    return (
      <div className="base-width">
        <AccountListHeader />
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 *:text-gray-500 mt-10">
          <Codepen size={50} />
          <p>No Added Accounts</p>
        </div>
      </div>
    )
  }

  
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