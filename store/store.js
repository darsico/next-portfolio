import create from 'zustand'
import { persist } from 'zustand/middleware'
import { languageOptions, dictionaryList } from '../src/utils/language'

const dummyStorageApi = {
 getItem: () => null,
 setItem: () => undefined,
};
export const useLanguageStore = create(persist((set, get) => ({
 userLanguage: 'en',
 dictionary: dictionaryList.en,
 cleanDictionary: () => set({ dictionary: {} }),
 userLanguageChange: (selected) =>
  set(() => {
   get().cleanDictionary()
   const newLanguage = languageOptions[selected] ? selected : 'en';
   const dictionaryLang = dictionaryList[newLanguage || dictionaryList.en]
   return { userLanguage: newLanguage, dictionary: dictionaryLang };
  }),
 checkLang: (spa, eng) => (get().userLanguage === 'es') ? spa : eng
}),
 { name: 'language', storage: typeof window !== 'undefined' ? window.localStorage : dummyStorageApi }
))