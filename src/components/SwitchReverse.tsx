'use client'

import { RocketIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Switch } from './ui/switch'
import { useState } from 'react'

interface Props {
  onReverseChange: (newReverse: boolean) => void
}

const SwitchReverse = ({ onReverseChange }: Props) => {
  const [reverse, setReverse] = useState(false)

  const handleSwitchChange = () => {
    const newReverse = !reverse
    setReverse(newReverse)
    onReverseChange(newReverse)
  }

  return (
    <div className="mx-3 md:mx-0 my-3">
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <div className="flex justify-between items-center gap-1">
          <div>
            <AlertTitle>Reverse ayat</AlertTitle>
            <AlertDescription className="text-gray-500">
              Munculkan terjemahan ayat terlebih dahulu
            </AlertDescription>
          </div>
          <Switch
            id="reverse"
            checked={reverse}
            onCheckedChange={handleSwitchChange}
          />
        </div>
      </Alert>
    </div>
  )
}

export default SwitchReverse
