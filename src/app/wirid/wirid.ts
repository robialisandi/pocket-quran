import 'server-only'

export const getWirid = async (name: string) => {
  const data = await import(`@/data/wirid-data/${name}.ts`)
  return data.default
}
