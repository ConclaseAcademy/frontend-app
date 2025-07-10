import { create } from 'zustand'

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
