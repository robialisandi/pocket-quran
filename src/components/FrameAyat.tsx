export default function FrameAyat({ number }: { number: number }) {
  return (
    <div className="frame-ayah flex justify-center items-center mt-[5px]">
      <span className="font-bold text-sm pt-[4px] text-white">
        {number.toLocaleString('ar-u-nu-arab', {
          useGrouping: false,
        })}
      </span>
    </div>
  )
}
