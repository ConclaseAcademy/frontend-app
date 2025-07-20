import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'


export const useStore = create((set) => ({
  logoutpopup: false,
  deleteentrypopup:false,
  shareentrypopup:false,
  sidebarnav:false,
  toggleLogOutPop: (value) => set(() => ({ logoutpopup: value })),
  toggleDeleteEntryPop: (value) => set(() => ({ deleteentrypopup: value })),
  toggleShareEntryPop: (value) => set(() => ({ shareentrypopup: value })),
  sideBarNav: () => set((state) => ({ sidebarnav: !state.sidebarnav }))
}))


export const useStoreMeditation = create((set) => ({
    activeCategory:"All Categories",
    activeTime:"Any time", 
    activeTimeRange:{lower:0, upper:0},
    setActiveCategory: (value) => set(() => ({activeCategory:value})),
    setActiveTime: (value) => set(() => ({activeTime:value})),
    setActiveTimeRange: (value) => set(() => ({activeTimeRange:value})),
}))

export const useStoreMeditationTab2 = create((set) => ({
    activeCategory:"All Stories",
    setActiveCategory: (value) => set(() => ({activeCategory:value}))
}))

export const loginData = create()(
        persist(
        (set, get) => ({
            role: "",
            token:'',
            updateRole: (newRole) => set(() => ({ user: newRole })),
            updateToken: (newToken) => set(() => ({ token: newToken }))
        }),
        {
            name:'user',
            storage:createJSONStorage(()=> sessionStorage)
        }
    )
)
