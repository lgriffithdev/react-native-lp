import getApiContent from '@src/api'
import create from 'zustand'

export const useValorantStore = create((set) => ({
    data: undefined,
    fetch: async () => {
        const response = await getApiContent()
        set({ data: await response })
    } 
}))