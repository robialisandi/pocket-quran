interface AyahText {
  [ayahNumber: string]: string
}

interface TranslationText {
  name: string
  text: AyahText
}

interface TafsirText {
  name: string
  source: string
  text: AyahText
}

export interface SurahDataType {
  number: string
  name: string
  name_latin: string
  number_of_ayah: string
  text: AyahText
  translations: {
    id: TranslationText
  }
  tafsir: {
    id: {
      kemenag: TafsirText
    }
  }
}
