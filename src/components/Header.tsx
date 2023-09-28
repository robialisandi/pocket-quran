import Link from 'next/link'
export default function Header() {
  return (
    <header className="flex justify-center items-center py-4 px-2 sticky top-0 bg-green-linear">
      <Link href="/">
        <h1 className="font-bold text-2xl text-white">Pocket Quran</h1>
      </Link>
    </header>
  )
}
