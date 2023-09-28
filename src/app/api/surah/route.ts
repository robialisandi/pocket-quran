import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const id = req.nextUrl.searchParams.get('id')!
  const isNotNumber = Number.isNaN(id)
  const surahIdWithFallback = isNotNumber ? 1 : id

  const surahData = await import(
    `../../../data/surah-data/${surahIdWithFallback}.ts`
  )
  return NextResponse.json(surahData.default[surahIdWithFallback], {
    status: 200,
  })
}
