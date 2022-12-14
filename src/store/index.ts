import getContent from '@src/api'
import create from 'zustand'

export const useValorantStore = create((set, get) => ({
    agents: {},
    getAgents: async () => {
        if(!(get as any).agents) {
            const response = await getContent('agents')
            set({ agents: await response })
        }
    },
    getAgent: (uuid: string) =>
        (get() as any).agents.data.find((agent: any) => agent.uuid === uuid)
}))