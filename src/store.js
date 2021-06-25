import create from "zustand"

const useStore = create(set => ({
  pastChapters: [],
  addChapter: chapter => set(({ pastChapters }) => pastChapters.push(chapter)),
  reset: () => set({ pastChapters: [] }),
  chapterOrder: "secondary",
  changeOrder: order => set({ chapterOrder: order }),
}))

export default useStore
