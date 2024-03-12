import 'server-only'

export const getDoa = async (category: string) => {
  const data = await import(`@/data/doa-data/${category}.ts`)
  return data.default
}
