import CardShadow from '@/components/CardShadow'

export default function Home() {
  const menus = [
    {
      name: 'Surah',
      icon: 'surah',
      pathName: '/surah',
    },
    {
      name: 'Juz Amma',
      icon: 'juz-amma',
      pathName: '/juz-amma',
    },
    {
      name: 'Doa-doa',
      icon: 'doa',
      pathName: '/doa',
    },
    {
      name: 'Wirid',
      icon: 'wirid',
      pathName: '/wirid',
    },
    {
      name: 'Tahlil',
      icon: 'tahlil',
      pathName: '/tahlil',
    },
    {
      name: 'Ayat Kursi',
      icon: 'ayat-kursi',
      pathName: '/ayat-kursi',
    },
    {
      name: 'Asma Allah',
      icon: 'asmaul-husna',
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
