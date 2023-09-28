'use client'

type Props = {
  params: { id: Number }
}

export default function surahDetailPage({ params }: Props) {
  const { id } = params

  return (
    <div>
      <h1>Surah Detail Page</h1>
      <div>{params.id.toString()}</div>
    </div>
  )
}
