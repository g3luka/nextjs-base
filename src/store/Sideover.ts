import create from 'zustand'
import produce from 'immer'
import { ReactNode } from 'react'

type SimpleObject = { [key: string]: any }
type SizeEnum = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'screen-xs' | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl' | 'screen-2xl'

export interface IState {
  open: boolean
  title: string
  size: SizeEnum
  body?: ReactNode
  options?: SimpleObject
}

export interface IActions {
  reset: () => void
  setOpen: (open: boolean) => void
  setSize: (size: SizeEnum) => void
  setTitle: (title: string) => void
  setBody: (body?: ReactNode) => void
  setOptions: (options?: SimpleObject) => void
  toggle: () => void
  create: (title: string, body?: ReactNode, size?: SizeEnum, options?: SimpleObject) => void
}

export interface IStore {
  state: IState
  actions: IActions
}

export const useStore = create<IStore>((set) => {
  const setState = (fn: any) => set(produce(fn))

  const initialState: IState = {
    open: false,
    size: 'md',
    title: '',
    body: undefined,
    options: {}
  }

  return {
    state: {
      ...initialState,
    },
    actions: {
      reset: () => set({ state: { ...initialState }}),
      setOpen: (open: boolean) => setState(({ state }: IStore) => { state.open = open }),
      setSize: (size: SizeEnum) => setState(({ state }: IStore) => { state.size = size }),
      setTitle: (title: string) => setState(({ state }: IStore) => { state.title = title }),
      setBody: (body?: ReactNode) => setState(({ state }: IStore) => { state.body = body }),
      setOptions: (options?: SimpleObject) => setState(({ state }: IStore) => { state.options = options }),
      toggle: () => setState(({ state }: IStore) => { state.open = !state.open }),
      create: (title: string, body?: ReactNode, size?: SizeEnum, options?: SimpleObject) =>
        setState(({ state }: IStore) => {
          state.title = title
          state.size = size || 'md'
          state.body = body
          state.open = true
          state.options = options
        }),
    }
  }
})
