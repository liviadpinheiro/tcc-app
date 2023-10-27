import { ISpreadCard } from "./spread.entity"

export interface CreateSpreadDTO {
  consultantName: string
  consultantBirthdate?: string,
  deck: string
  theme: string
  spread: string
  spreadOverview: string
  image?: string
  cards: ISpreadCard[]
}
