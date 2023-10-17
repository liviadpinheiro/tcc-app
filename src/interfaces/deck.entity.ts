import { UUID } from "crypto"

export interface IDeck {
  id: UUID
  name: string
  description: string
  imageUrl: string
  imagePosition: string
}
