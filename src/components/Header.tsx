import Link from 'next/link'
export default function Header() {
  return (
    <header className="flex justify-center items-center py-4 px-2">
      <Link href="/">
        <h1 className="font-bold text-2xl">Pocket Quran</h1>
      </Link>
    </header>
  )
}
