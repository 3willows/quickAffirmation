import "./App.css"
import React, { useState } from "react"
import { AffirmationOutput } from "./components/OverallOutput"
import { formattedDate } from "./components/helpers/TodayDate"
import { PopUpContent } from "./components/popup/PopUpContent"
import { AffirmationInput } from "./components/OverallInput"

const initialPs = []
const initialDs = []

function App() {
  const [language, setLanguage] = useState("English")

  const [court, setCourt] = useState("HC")

  const [caseType, setCaseType] = useState("A")
  const [caseDigit, setCaseDigit] = useState("#")
  const [caseYear, setCaseYear] = useState("2024")

  const [plaintiffs, setPlaintiffs] = useState(initialPs)
  const [defendants, setDefendants] = useState(initialDs)

  //Affirmation Specific
  const [affirmNumber, setAffirmNumber] = useState("1st")
  const [deponentName, setDeponentName] = useState("[Deponent]")
  const [partyName, setPartyName] = useState("Plaintiff")
  const [date, setDate] = useState(formattedDate)

  // choose to show or hide 1 of 2 pages
  const [inputOpen, setInputOpen] = useState(true)
  const handleFocus = (event) => event.target.select()

  return (
    <div className="App">
      <PopUpContent />
      {inputOpen && (
        <AffirmationInput
          {...{
            caseType,
            setCaseType,
            caseDigit,
            setCaseDigit,
            caseYear,
            setCaseYear,
            affirmNumber,
            deponentName,
            date,
            setDate,
            partyName,
            setPartyName,
            language,
            setLanguage,
            court,
            setCourt,
            setAffirmNumber,
            setDeponentName,
            handleFocus,
            plaintiffs,
            defendants,
            setPlaintiffs,
            setDefendants,
          }}
        />
      )}
      {!inputOpen && (
        <AffirmationOutput
          {...{
            court,
            caseType,
            caseDigit,
            caseYear,
            affirmNumber,
            deponentName,
            date,
            partyName,
            plaintiffs,
            defendants,
            language,
            setLanguage,
          }}
        />
      )}
      <ToggleButtons inputOpen={inputOpen} setInputOpen={setInputOpen} />
    </div>
  )
}

export default App

function ToggleButtons({ inputOpen, setInputOpen }) {
  function toggleInputOpen(inputOpen) {
    setInputOpen((inputOpen) => !inputOpen)
    scrollToTop()
  }

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
      /* you can also use 'auto' behaviour
       in place of 'smooth' */
    })
  }

  window.addEventListener("scroll", toggleVisible)
  return (
    <div>
      <button className="large-button" onClick={toggleInputOpen}>
        {inputOpen ? `OUTPUT` : `REVISE`}
      </button>
    </div>
  )
}
