import { create } from "zustand"

type Detail = {
  [key: string]: any
}

interface DetailStore {
  params: Detail
  setParams: (value: Detail) => void
}

export const useNavigate = create<DetailStore>((set) => ({
  params: {},
  setParams: (value: Detail) =>
    set({
      params: value
    })
}))
