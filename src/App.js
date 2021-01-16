import React from "react"
import "./styles.css"
import { Frame, useCycle } from "framer"

export default function App() {
  let [mode, cycleMode] = useCycle("on", "off")

  return (
    <div className="App">
      <Frame
        width={120}
        height={60}
        borderRadius={30}
        backgroundColor={"#999"}
        animate={mode}
        onTap={() => {
          cycleMode()
        }}
        variants={{
          off: { background: "#999" },
          on: { background: "#00072f" }
        }}
      >
        <Frame
          size={60}
          borderRadius={30}
          transition={{ duration: 0.3 }}
          backgroundColor={"#fff"}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 2px"
          }}
          variants={{
            off: { x: 0, scale: 0.8 },
            on: { x: 60, scale: 1 }
          }}
        />
      </Frame>
    </div>
  )
}
