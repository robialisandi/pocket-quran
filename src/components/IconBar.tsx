import Image from 'next/image'

interface Props {
  icon: string
}
const IconBar = ({ icon }: Props) => {
  return (
    <div className="flex justify-center sm:w- w-6 h-6 rounded-full bg-[#eef5ef] flex-col items-center mr-2">
      <Image
        src={`/icons/${icon}`}
        alt="Picture of the author"
        width={14}
        height={14}
      />
    </div>
  )
}
export default IconBar
