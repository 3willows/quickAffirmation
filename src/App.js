import "./App.css"
import React, { useState } from "react"
import { CourtHeading } from "./components/CourtHeading"
import {
  Heading,
  CaseType,
  CaseDigit,
  CaseYear,
} from "./components/CaseNumberHeading"
import { AffirmationTitle } from "./components/AffirmationTitle"
import { EndMatters } from "./components/EndMatters"
import { TopRight } from "./components/TopRight"
import { Output } from "./components/Output"
import { Parties } from "./components/PartiesLogic"
import { DisplayParties } from "./components/DisplayParties"
import { formattedDate } from "./components/TodayDate"
import { PopUpContent } from "./components/PopUpContent"

const initialPs = []
const initialDs = []

function App() {
  // Language
  const [language, setLanguage] = useState("English")

  //  HCA 123/2024
  const [caseType, setCaseType] = useState("ACTION")
  const [caseDigit, setCaseDigit] = useState("#")
  const [caseYear, setCaseYear] = useState("2024")

  // 1st Affirmation of Ming
  const [affirmNumber, setAffirmNumber] = useState("1st")
  const [deponentName, setDeponentName] = useState("[Deponent]")

  //Parties
  const [plaintiffs, setPlaintiffs] = useState(initialPs)
  const [defendants, setDefendants] = useState(initialDs)

  // End matters
  const [partyName, setPartyName] = useState("Plaintiff")
  const [date, setDate] = useState(formattedDate)

  // choose to show or hide 1 of 2 pages
  const [inputOpen, setInputOpen] = useState(true)

  // handle focus i.e. select all text in box
  const handleFocus = (event) => event.target.select()

  return (
    <div className="App">
      <PopUpContent />
      {inputOpen && (
        <div className="inputComponents">
          <TopRight
            {...{
              caseType,
              caseDigit,
              caseYear,
              affirmNumber,
              deponentName,
              date,
              partyName,
              language,
            }}
          />
          <Language {...{ language, setLanguage }} />
          <Heading>
            <CourtHeading {...{ language }} />
            {language === "Chinese" ? (
              <>
                <CaseType {...{ caseType, setCaseType, language }} />
                編號
                <CaseYear {...{ caseYear, setCaseYear, handleFocus }} />
                <CaseDigit {...{ caseDigit, setCaseDigit, handleFocus }} />號
              </>
            ) : (
              <>
                <CaseType {...{ caseType, setCaseType, language }} />
                NO.
                <CaseDigit {...{ caseDigit, setCaseDigit, handleFocus }} />
                OF
                <CaseYear {...{ caseYear, setCaseYear, handleFocus }} />
              </>
            )}
          </Heading>
          <Parties
            {...{
              plaintiffs,
              defendants,
              setPlaintiffs,
              setDefendants,
              language,
            }}
          >
            {" "}
            <DisplayParties {...{ plaintiffs, defendants, language }} />
          </Parties>
          <AffirmationTitle
            {...{
              affirmNumber,
              deponentName,
              setAffirmNumber,
              setDeponentName,
              handleFocus,
              language,
            }}
          />
          <p className="go-left">
            I, {deponentName}, of [address] do solemnly, truthfully and
            sincerely affirm and say as follows:-
          </p>
          <p></p>
          [Body of Affirmation]
          <p></p>
          <EndMatters
            partyName={partyName}
            setPartyName={setPartyName}
            date={date}
            setDate={setDate}
            handleFocus={handleFocus}
          />
        </div>
      )}
      {!inputOpen && (
        <Output
          caseType={caseType}
          caseDigit={caseDigit}
          caseYear={caseYear}
          affirmNumber={affirmNumber}
          deponentName={deponentName}
          date={date}
          partyName={partyName}
          plaintiffs={plaintiffs}
          defendants={defendants}
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

function Language({ language, setLanguage }) {
  return (
    <div className="go-right">
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="English">語言</option>
        <option value="English">English</option>
        <option value="Chinese">中文</option>
      </select>
    </div>
  )
}
