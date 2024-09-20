import React from "react"

import "./style.css"

import { TabsDemo } from "~TabsDemo"

// import { TabsDemo } from "~TabsDemo"

import HexColorPicker from "./HexColorPicker"

function IndexPopup() {
  return (
    <div className="p-4 bg-secondary dark min-w-[412px] h-[402px] p-12 bg-gray-100 flex flex-col items-center justify-center  shadow-lg">
      <TabsDemo />
    </div>
  )
}

export default IndexPopup
