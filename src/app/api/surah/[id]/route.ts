import { NextRequest, NextResponse } from 'next/server'

export const GET = async (_request: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params

  const isNotNumber = Number.isNaN(id)
  const surahIdWithFallback = isNotNumber ? 1 : id

  const surahData = await import(`../../../../data/surah-data/${surahIdWithFallback}.ts`)
  const response = await surahData.default[surahIdWithFallback]

  return NextResponse.json(response, {
    status: 200,
  })
}
