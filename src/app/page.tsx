import CardShadow from '@/components/CardShadow'
import WidgetBookmark from '@/components/WidgetBookmark'
import { menus } from '@/lib/constants'

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="bg-mesjid w-[480px] h-[336px] fixed bg-no-repeat top-[77%] left-[55%] transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="grid grid-cols-3 gap-[2px] aspect-square z-10">
        {menus.map((menu) => (
          <CardShadow key={menu.name} menu={menu} />
        ))}
      </div>
      <WidgetBookmark />
    </div>
  )
}
