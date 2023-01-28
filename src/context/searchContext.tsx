import React, { createContext, useState } from 'react'
import { IDataResult, ISearchContext, SearchContextProps } from './types'

export const SearchDataContext = createContext<ISearchContext>(
  {} as ISearchContext
)

export default function SearchProvider({ children }: SearchContextProps) {
  const [dataResult, setDataResult] = useState<IDataResult | undefined>()
  const [currentValue, setCurrentValue] = useState('')
  const [currentSearchBy, setCurrentSearchBy] = useState('Title')

  return (
    <SearchDataContext.Provider
      value={{
        currentValue,
        setCurrentValue,
        currentSearchBy,
        setCurrentSearchBy,
        dataResult,
        setDataResult,
      }}
    >
      {children}
    </SearchDataContext.Provider>
  )
}
