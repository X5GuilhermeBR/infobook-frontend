import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface ISearchContext {
  dataResult: IDataResult | undefined
  setDataResult: Dispatch<SetStateAction<IDataResult | undefined>>
}

export interface IDataResult {
  items: Array<{}>
  kind: string
  totalItems: number
}

export interface SearchContextProps {
  children: ReactNode
}
