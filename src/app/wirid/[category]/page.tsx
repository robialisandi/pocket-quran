import { DoaType } from '@/@types/Doa'
import IconBar from '@/components/IconBar'
import { Metadata, NextPage } from 'next'
import { getCategory } from '../categories'
import { getWirid } from '../wirid'

interface Props {
  params: { category: string }
}

export const generateStaticParams = async () => {
  const categories = await getCategory()
  return categories.map((item) => ({
    category: item.url.split('/')[1],
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categories = await getCategory()
  const { category } = params
  const wirid = categories.find((item) => item.url === `wirid/${category}`)

  return {
    title: wirid?.category,
    description: 'Kumpulan wirid-wirid',
  }
}

const Page: NextPage<Props> = async ({ params }: Props) => {
  const data: DoaType[] = await getWirid(params.category)

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
