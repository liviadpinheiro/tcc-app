import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { ICard } from 'src/interfaces/card.entity'

export const useCardStore = create(
  combine(
    {
      selectedCard: {} as ICard,
    },
    (set) => ({
      addSelectedCard: (selectedCard: ICard) =>
        set(() => ({
          selectedCard,
        })),
      clear: () => set({ selectedCard: {} as ICard }),
    })
  )
)
