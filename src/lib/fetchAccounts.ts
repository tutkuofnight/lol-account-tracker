import type { AccountNames } from "@/types"

const fetchAllAccounts = async (accounts: AccountNames[]) => {
  const response = await fetch("http://localhost:3000/account/", {
    method: "POST",
    body: JSON.stringify(accounts)
  })
  if (response.status !== 200) {
    console.log("Fetching error!")
  } else {
    return await response.json()
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