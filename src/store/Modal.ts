import create from 'zustand'
import produce from 'immer'
import { ReactNode } from 'react'

export interface IState {
  open: boolean
  body?: ReactNode
}

export interface IActions {
  reset: () => void
  setOpen: (open: boolean) => void
  setBody: (body?: ReactNode) => void
  toggle: () => void
  create: (body?: ReactNode) => void
}

export interface IStore {
  state: IState
  actions: IActions
}

export const useStore = create<IStore>((set) => {
  const setState = (fn: any) => set(produce(fn))

  const initialState: IState = {
    open: false,
    body: undefined,
  }

  return {
    state: {
      ...initialState,
    },
    actions: {
      reset: () => set({ state: { ...initialState }}),
      setOpen: (open: boolean) => setState(({ state }: IStore) => { state.open = open }),
      setBody: (body?: ReactNode) => setState(({ state }: IStore) => { state.body = body }),
      toggle: () => setState(({ state }: IStore) => { state.open = !state.open }),
      create: (body?: ReactNode) =>
        setState(({ state }: IStore) => {
          state.body = body
          state.open = true
        }),
    }
  }
})
