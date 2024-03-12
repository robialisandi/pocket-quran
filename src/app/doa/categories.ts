import 'server-only'

const categories = () => import('@/data/doa-data/doa-categories.json').then((module) => module.default)

export const getCategory = async () => categories()
