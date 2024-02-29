export default function FrameAyat({ number, isPlaying = false }: { number: number; isPlaying?: boolean }) {
  return (
    <div className={`frame-ayah ${isPlaying ? 'frame-ayah-color' : ''} flex justify-center items-center mt-[5px]`}>
      <span className={`font-bold text-[16px] pt-[4px] text-white`}>
        {number.toLocaleString('ar-u-nu-arab', {
          useGrouping: false,
        })}
      </span>
    </div>
  )
}
