import { Check, Pipette, RefreshCw } from "lucide-react"
import React, { useEffect, useState } from "react"

import { Button } from "~components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~components/ui/card"
import { Input } from "~components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "~components/ui/tooltip"

declare global {
  interface Window {
    EyeDropper: any
  }
}

const HexColorPicker = () => {
  const [color, setColor] = useState("#ffffff")
  const [isPickerActive, setIsPickerActive] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isPickerActive) {
      const eyeDropper = new window.EyeDropper()
      eyeDropper
        .open()
        .then((result) => {
          setColor(result.sRGBHex)
          setIsPickerActive(false)
          copyToClipboard(result.sRGBHex)
        })
        .catch(() => {
          setIsPickerActive(false)
        })
    }
  }, [isPickerActive])

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  const activateEyeDropper = () => {
    setIsPickerActive(true)
  }

  const resetColor = () => {
    setColor("#ffffff")
    copyToClipboard("#ffffff")
  }

  return (
    <Card className="w-80 min-w-[320px] bg-secondary ml-12 h-[342px]">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-center">
          Hex Color Picker
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div
            className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-inner"
            style={{ backgroundColor: color }}></div>
          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Input
                    type="text"
                    value={color}
                    onChange={handleColorChange}
                    onBlur={() => copyToClipboard(color)}
                    className="w-28 text-center uppercase"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isCopied ? "Copied!" : "Click to copy"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button
              onClick={activateEyeDropper}
              className="p-2"
              variant="outline">
              <Pipette className="h-5 w-5" />
            </Button>
            <Button onClick={resetColor} className="p-2" variant="outline">
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>
          {isCopied && (
            <div className="text-green-500 flex items-center">
              <Check className="h-4 w-4 mr-1" /> Copied to clipboard
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default HexColorPicker
