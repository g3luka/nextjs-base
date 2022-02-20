import create from 'zustand'
import produce from 'immer'
import { ReactNode } from 'react'

export interface IState {
  show: boolean
  body?: ReactNode
}

export interface IActions {
  reset: () => void
  setShow: (show: boolean) => void
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
    show: false,
    body: undefined,
  }

  return {
    state: {
      ...initialState,
    },
    actions: {
      reset: () => set({ state: { ...initialState }}),
      setShow: (show: boolean) => setState(({ state }: IStore) => { state.show = show }),
      setBody: (body?: ReactNode) => setState(({ state }: IStore) => { state.body = body }),
      toggle: () => setState(({ state }: IStore) => { state.show = !state.show }),
      create: (body?: ReactNode) =>
        setState(({ state }: IStore) => {
          state.body = body
          state.show = true
        }),
    }
  }
})
