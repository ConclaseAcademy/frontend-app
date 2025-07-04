import { create } from 'zustand'

export const useStore = create((set) => ({
  logoutpopup: false,
  deleteentrypopup:false,
  shareentrypopup:false,
  sidebarnav:false,
  toggleLogOutPop: () => set((state) => ({ logoutpopup: !state.logoutpopup })),
  toggleDeleteEntryPop: () => set((state) => ({ deleteentrypopup: !state.deleteentrypopup })),
  toggleShareEntryPop: () => set((state) => ({ shareentrypopup: !state.shareentrypopup })),
  sideBarNav: () => set((state) => ({ sidebarnav: !state.sidebarnav }))
}))
