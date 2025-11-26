import type { AccountNames } from "@/types"

const fetchAccounts = async (accounts: AccountNames[]) => {
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

export default fetchAccounts