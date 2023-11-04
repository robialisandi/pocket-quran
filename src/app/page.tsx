import CardShadow from '@/components/CardShadow'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function Home() {
  const menus = [
    {
      name: 'Surah',
      icon: '1.surah.svg',
      pathName: '/surah',
    },
    {
      name: 'Juz Amma',
      icon: '2.juz-amma.svg',
      pathName: '/juz-amma',
    },
    {
      name: 'Doa-doa',
      icon: '3.doa-doa.svg',
      pathName: '/doa',
    },
    {
      name: 'Wirid',
      icon: '4.wirid.svg',
      pathName: '/wirid',
    },
    {
      name: 'Tahlil',
      icon: '5.tahlil.svg',
      pathName: '/tahlil',
    },
    {
      name: 'Ayat Kursi',
      icon: '6.ayat-kursi.svg',
      pathName: '/ayat-kursi',
    },
    {
      name: 'Asma Allah',
      icon: '7.asma-allah.svg',
      pathName: '/asmaul-husna',
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-[1px]">
      {menus.map((menu) => (
        <CardShadow key={menu.name} menu={menu} />
      ))}
    </div>
  )
}
