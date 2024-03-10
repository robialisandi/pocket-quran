import { DoaType } from '@/@types/Doa'
import IconBar from '@/components/IconBar'
import { NextPage } from 'next'
import categories from '@/data/doa-data/doa-categories.json'

interface Props {
  params: { category: string }
}

export async function generateStaticParams() {
  return categories.map((item) => ({
    category: item.url.split('/')[1],
  }))
}

const Page: NextPage<Props> = ({ params }: Props) => {
  const data: DoaType[] = require(`../../../data/doa-data/${params.category}.ts`).default

  return (
    <>
      <h1 className="flex py-2 font-bold px-4 text-[#2F6742] bg-[#c8e0d5]">
        <IconBar icon="3.doa-doa.svg" />
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
                <p className="text-right font-arabic text-[20px] text-green-800 mt-6">{sub}</p>
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
