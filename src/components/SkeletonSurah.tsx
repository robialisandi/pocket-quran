import { Skeleton } from './ui/skeleton'

interface Props {
  count: number
}
const SkeletonSurah = ({ count }: Props) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="flex flex-col justify-center gap-4 p-5 border md:rounded-xl bg-white"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex flex-col">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-2 w-[150px] mt-2" />
              </div>
            </div>
            <Skeleton className="h-6 w-[50px]" />
          </div>
        </div>
      ))}
    </>
  )
}

export default SkeletonSurah
