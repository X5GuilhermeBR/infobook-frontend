import React, { createContext, useState } from 'react'
import { IDataResult, ISearchContext, SearchContextProps } from './types'

export const SearchDataContext = createContext<ISearchContext>(
  {} as ISearchContext
)

export default function SearchProvider({ children }: SearchContextProps) {
  const [dataResult, setDataResult] = useState<IDataResult | undefined>()

  return (
    <SearchDataContext.Provider value={{ dataResult, setDataResult }}>
      {children}
    </SearchDataContext.Provider>
  )
}
