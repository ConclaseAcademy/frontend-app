import { create } from 'zustand'

export const useStore = create((set) => ({
  logoutpopup: false,
  deleteentrypopup:false,
  toggleLogOutPop: () => set((state) => ({ logoutpopup: !state.logoutpopup })),
  toggleDeleteEntryPop: () => set((state) => ({ deleteentrypopup: !state.deleteentrypopup }))
}))
