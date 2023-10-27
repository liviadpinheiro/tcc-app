export interface ISpreadCard {
  name: string
  position: string
  meaning: string
}

export interface ISpread {
  spreadOverview: string
  cardsNumber: number
  image?: string
  cards: ISpreadCard[]
}
