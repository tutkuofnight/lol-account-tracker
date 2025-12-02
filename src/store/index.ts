import { atomWithStorage } from 'jotai/utils'

import type {  AccountNames } from "@/types"

export const accountNamesStore = atomWithStorage<AccountNames[]>("accounts", [])