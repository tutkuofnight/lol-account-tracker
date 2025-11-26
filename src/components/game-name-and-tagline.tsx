import { useState, type FormEvent } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CornerDownLeft } from "lucide-react"

import { useAtom } from "jotai"
import { accountNamesStore } from "@/store"

import fetchAccounts from "@/lib/fetchAccounts"

export default function gameNameAndTagline() {
  const [gameName, setGameName] = useState<string>("")
  const [tagLine, setTagLine] = useState<string>("")
  const [accountNames, setAccountNames] = useAtom(accountNamesStore)

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault()
    setAccountNames((accountNames) => [...accountNames, {
      gameName,
      tagLine
    }])
    await fetchAccounts(accountNames)
  }

  return (
    <div className="flex flex-col gap-2">
      <p>Enter an Account:</p>
      <form className="flex items-center gap-4" onSubmit={handleSubmit}>
          <Input placeholder="Game Name" className="w-[150px] p-3 text-lg!" onChange={(e) => setGameName(e.target.value)} />
          <Input placeholder="#Tag" className="w-20 p-3 text-lg!" maxLength={5} onChange={(e) => setTagLine(e.target.value)} />
          <Button className="p-[27px]" type="submit">
            <div className="bg-white/10 p-1 rounded">
              <CornerDownLeft size={8} />
            </div>
            Add
          </Button>
      </form>
    </div>
  )
}
