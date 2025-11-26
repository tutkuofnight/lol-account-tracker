import { atomWithStorage } from 'jotai/utils'
import { atom } from "jotai"
import type { Account, AccountNames } from "@/types"

export const accountNamesStore = atomWithStorage<AccountNames[]>("accounts", [])

export const accountsListStore = atom<Account[]>([])