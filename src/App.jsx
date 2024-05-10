import "./App.css"
import React, { useState } from "react"
import { AppProvider } from "./components/AppContext"
import { AffirmationOutput } from "./components/OverallOutput"
import { PopUpContent } from "./components/popup/PopUpContent"
import { AffirmationInput } from "./components/OverallInput"
import { ToggleButtons } from "./ToggleButtons"

function App() {
  // choose to show or hide 1 of 2 pages
  const [inputOpen, setInputOpen] = useState(true)
  const handleFocus = (event) => event.target.select()

  return (
    <div className="App">
      <AppProvider>
        <PopUpContent />
        {inputOpen && (
          <AffirmationInput
            {...{
              handleFocus,
            }}
          />
        )}
        {!inputOpen && <AffirmationOutput />}
        <ToggleButtons inputOpen={inputOpen} setInputOpen={setInputOpen} />
      </AppProvider>
    </div>
  )
}

export default App
