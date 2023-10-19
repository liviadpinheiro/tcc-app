import { UUID } from "crypto"

export interface ICard {
  id: UUID
  name: string
  number: number
  imageUrl: string
  deck_id: string
}
