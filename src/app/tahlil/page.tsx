import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import tahlil from '@/data/tahlil'
import SurahDetailPage from '../surah/[surah]/page'

export default function TahlilPage() {
  return (
    <div className="flex flex-col">
      <div className="mx-0 md:mt-3">
        <Tabs defaultValue="tahlil" className="w-full" orientation="vertical">
          <TabsList className="grid w-full grid-cols-2 bg-[#c8e0d5] h-14 p-2 sticky top-16 z-50">
            <TabsTrigger value="tahlil" className="h-full text-[#2F6742]">
              Tahlil
            </TabsTrigger>
            <TabsTrigger value="yasin" className="h-full text-[#2F6742]">
              Yasin
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tahlil">
            <div className="px-4 bg-[#e8efe9] mt-3 rounded-2xl">
              {tahlil.data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center gap-4 py-4 border-b border-b-gray-300"
                >
                  <span className="font-bold font-arabic text-lg">
                    {item.title}
                  </span>
                  <small className="text-2xl font-arabic text-right text-[#2F6742]">
                    {item.arabic}
                  </small>
                  <span>{item.translation}</span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yasin">
            <SurahDetailPage params={{ surah: '36' }} onlySurah={true} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
