import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { IBeforeSpread } from 'src/interfaces/before-spread.entity'

export const useSpreadStore = create(
  combine(
    {
      spreadInfo: {} as IBeforeSpread,
    },
    (set) => ({
      addSpreadInfo: (spreadInfo: IBeforeSpread) =>
        set(() => ({
          spreadInfo,
        })),
      clear: () => set({ spreadInfo: {} as IBeforeSpread }),
    })
  )
)
