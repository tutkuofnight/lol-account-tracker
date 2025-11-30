import type { AccountNames, Account } from "@/types"

const fetchAllAccounts = async (accounts: AccountNames[]) => {
  const gameNames: string = accounts.map(account => account.gameName).join(",")
  const tagLines: string = accounts.map(account => account.tagLine).join(",")
  
  const response = await fetch(`http://localhost:3000/account?gameNames=${gameNames}&tagLines=${tagLines}`, {
    method: "GET",
    body: JSON.stringify(accounts)
  })
  if (response.status !== 200) {
    console.log("Fetching error!")
  } else {
    return await response.json() as Account[]
  }
}

const fetchAccount = async ({ gameName, tagLine }: AccountNames) => {
  const response = await fetch(`http://localhost:3000/account/${gameName}/${tagLine}`, {
    method: "GET",
  })
  if (response.status !== 200) {
    console.log("Fetching error!")
  } else {
    return await response.json()
  }
}

export {
  fetchAllAccounts,
  fetchAccount
}