import { Skeleton } from './ui/skeleton'

interface Props {
  count: number
}
const SkeletonBookmark = ({ count }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-[6px] w-full">
      {Array.from({ length: count }, (_, index) => (
        <Skeleton className="w-full h-14" key={index} />
      ))}
    </div>
  )
}

export default SkeletonBookmark
