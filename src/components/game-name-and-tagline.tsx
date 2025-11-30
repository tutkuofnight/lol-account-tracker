import { useState, type FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CornerDownLeft } from "lucide-react";

import { useSetAtom } from "jotai";
import { accountNamesStore, accountsListStore } from "@/store";

import { fetchAccount } from "@/lib/fetchAccounts";

export default function GameNameAndTagline() {
  const [gameName, setGameName] = useState<string>("");
  const [tagLine, setTagLine] = useState<string>("");
  const setAccountNamesToStorage = useSetAtom(accountNamesStore);
  const setAccountList = useSetAtom(accountsListStore);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const account = await fetchAccount({ gameName, tagLine });
    if (account) {
      setAccountList((accountList) => [...accountList, account]);
      setGameName("");
      setTagLine("");
      setAccountNamesToStorage((accountNames) => [
        ...accountNames,
        {
          gameName,
          tagLine,
        },
      ]);
    }
  };

  const pasteAccountName = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const [name, tag] = pastedText.split("#");
    setGameName(name || "");
    setTagLine(tag || "");
  };

  return (
    <div className="flex flex-col gap-8 h-[400px] justify-center items-center bg-black/80 w-full mx-auto">
      <p className="text-center text-3xl font-semibold">Add Your Accounts</p>
      <form className="flex items-center gap-4 border rounded-xl p-3 bg-black/70" onSubmit={handleSubmit}>
        <Input
          placeholder="Game Name"
          className="w-[150px] p-3 text-lg!"
          onChange={(e) => setGameName(e.target.value)}
          onPaste={pasteAccountName}
          value={gameName}
        />
        <span className="text-3xl">#</span>
        <Input
          placeholder="Tag"
          className="w-20 p-3 text-lg!"
          maxLength={5}
          onChange={(e) => setTagLine(e.target.value)}
          onPaste={pasteAccountName}
          value={tagLine}
        />
        <Button className="p-[27px]" type="submit">
          <div className="bg-white/10 p-1 rounded">
            <CornerDownLeft size={8} />
          </div>
          Add
        </Button>
      </form>
    </div>
  );
}
