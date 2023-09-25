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
      name: 'Tasbih',
      icon: 'tasbih',
      pathName: '/tasbih',
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
    <div className="px-4">
      <div className="grid grid-cols-4 gap-2">
        {menus.map((menu) => (
          <CardShadow key={menu.name} menu={menu} />
        ))}
      </div>
    </div>
  )
}
