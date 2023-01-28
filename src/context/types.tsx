import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface ISearchContext {
  currentValue: string
  setCurrentValue: Dispatch<SetStateAction<string>>
  currentSearchBy: string
  setCurrentSearchBy: Dispatch<SetStateAction<string>>
  dataResult: IDataResult
  setDataResult: Dispatch<SetStateAction<IDataResult>>
}

interface volumeInfoProps {
  imageLinks: imageLinksPropps
  title: string
  authors: string[]
  pageCount: number
}

interface imageLinksPropps {
  smallThumbnail: string
  thumbnail: string
}

export interface ItemsProps {
  accessInfo: string
  etag: string
  id: string
  kind: string
  volumeInfo: volumeInfoProps
}

export interface IDataResult {
  items: ItemsProps[]
  kind: string
  totalItems: number
}

export interface SearchContextProps {
  children: ReactNode
}
