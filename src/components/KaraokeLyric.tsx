import React, { useState, useEffect } from 'react'

interface KaraokeLyricProps {
  text: string
  currentTime: number
  duration: number
}

const KaraokeLyric: React.FC<KaraokeLyricProps> = ({ text, currentTime, duration }) => {
  const [coloredText, setColoredText] = useState<(string | JSX.Element)[]>([])

  useEffect(() => {
    if (text) {
      const words = text.split(' ')
      const wordCount = words.length
      const wordDuration = duration / wordCount
      const currentWordIndex = Math.floor(currentTime / wordDuration)

      const newColoredWords = words.map((word, index) => {
        if (index <= currentWordIndex) {
          return (
            <span key={index} className="text-sm text-center text-green-700">
              {word}
            </span>
          )
        } else {
          return word
        }
      })

      setColoredText(newColoredWords)
    }
  }, [text, currentTime, duration])

  return (
    <div>
      {coloredText.map((word, index) => (
        <span key={index} className="text-sm text-center ">
          {word}{' '}
        </span>
      ))}
    </div>
  )
}

export default KaraokeLyric
