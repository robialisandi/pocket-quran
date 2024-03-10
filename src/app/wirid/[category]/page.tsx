import { DoaType } from '@/@types/Doa'
import IconBar from '@/components/IconBar'
import { Metadata, NextPage } from 'next'
import categories from '@/data/wirid-data/wirid-categories.json'

interface Props {
  params: { category: string }
}

export const generateStaticParams = async () => {
  return categories.map((item) => ({
    category: item.url.split('/')[1],
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = params
  const categories = await import('@/data/wirid-data/wirid-categories.json')
  const wirid = categories.filter((item) => item.url === `wirid/${category}`)[0]

  return {
    title: wirid.category,
    description: 'Kumpulan wirid-wirid',
  }
}

const Page: NextPage<Props> = ({ params }: Props) => {
  const data: DoaType[] = require(`../../../data/wirid-data/${params.category}.ts`).default

  return (
    <>
      <h1 className="flex py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5]">
        <IconBar icon="4.wirid.svg" />
        {params.category}
      </h1>
      <div className="p-3 bg-[#e8efe9] sm:bg-transparent">
        {data.map((item, index) => (
          <div key={index} className="mb-8 bg-transparent rounded-xl">
            <h1 className="text-xl font-bold text-[#2B3032]">
              {index + 1}. {item.title}
            </h1>
            {item.text_arabic.map((sub, key) => (
              <div key={key} className="flex flex-col border-b border-[#d6ded7] pb-6">
                <p className="text-right font-arabic text-2xl text-green-800 mt-6">{sub}</p>
                <span className="text-sm text-[#2B3032] mt-6">{item.text_script[key]}</span>
                <span className="text-sm font-medium mt-6">{item.translate[key]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default Page
