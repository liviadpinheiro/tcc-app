import { create } from "zustand"
import { combine } from "zustand/middleware"
import { IDeck } from "src/interfaces/deck.entity"

export const useDeckStore = create(
  combine(
    {
      decks: [] as IDeck[],
      selectedDeck: {} as IDeck,
    },
    (set) => ({
      addDecks: (decks: IDeck[]) =>
        set(() => ({
          decks,
        })),
      addSelectedDeck: (selectedDeck: IDeck) =>
        set(() => ({
          selectedDeck,
        })),
      clear: () => set({ decks: [], selectedDeck: {} as IDeck })
    })
  )
)
