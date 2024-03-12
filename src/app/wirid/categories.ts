import 'server-only'

const categories = () => import('@/data/wirid-data/wirid-categories.json').then((module) => module.default)

export const getCategory = async () => categories()
