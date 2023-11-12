import CardShadow from '@/components/CardShadow'

export default function Home() {
  const menus = [
    {
      name: 'Surah',
      icon: '1.surah.svg',
      pathName: '/surah',
      isActive: true,
    },
    {
      name: 'Juz Amma',
      icon: '2.juz-amma.svg',
      pathName: '/juz-amma',
      isActive: true,
    },
    {
      name: 'Doa-doa',
      icon: '3.doa-doa.svg',
      pathName: '/doa',
      isActive: true,
    },
    {
      name: 'Wirid',
      icon: '4.wirid.svg',
      pathName: '/wirid',
      isActive: true,
    },
    {
      name: 'Tahlil',
      icon: '5.tahlil.svg',
      pathName: '/tahlil',
      isActive: true,
    },
    {
      name: 'Ayat Kursi',
      icon: '6.ayat-kursi.svg',
      pathName: '/ayat-kursi',
      isActive: true,
    },
    {
      name: 'Asma Allah',
      icon: '7.asma-allah.svg',
      pathName: '/asmaul-husna',
      isActive: true,
    },
    {
      name: 'Soon',
      icon: '',
      pathName: '',
      isActive: false,
    },
    {
      name: 'Soon',
      icon: '',
      pathName: '',
      isActive: false,
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-[1px] aspect-square">
      {menus.map((menu) => (
        <CardShadow key={menu.name} menu={menu} />
      ))}
    </div>
  )
}
