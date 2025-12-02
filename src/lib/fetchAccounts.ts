import type { AccountNames, Account } from "@/types"

const fetchAllAccounts = async (accounts: AccountNames[]) => {
  const gameNames: string[] = accounts.map(account => account.gameName)
  const tagLines: string[] = accounts.map(account => account.tagLine)
  try {
    const response = await fetch(`http://localhost:3000/account/?gameNames=${gameNames}&tagLines=${tagLines}`, {
      method: "GET",
    })
    return await response.json() as Account[]
  } catch (error) {
    console.log("Fetching error!", error)
    return []
  }
}

export { fetchAllAccounts }