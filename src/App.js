import "./App.css"
import React, { useState } from "react"
import { CourtHeading } from "./components/CourtHeading"
import { CaseType, CaseDigit, CaseYear } from "./components/CaseNumberHeading"
import { CommonHeadingInput } from "./components/CommonHeadingInput"
import { AffirmationTitle } from "./components/AffirmationTitleInput"
import { EndMatters } from "./components/OuputEndMatter"
import { TopRight } from "./components/TopRight"
import { Output } from "./components/OverallOutput"
import { Parties } from "./components/PartiesLogic"
import { DisplayParties } from "./components/PartiesDisplay"
import { formattedDate } from "./components/helpers/TodayDate"
import { PopUpContent } from "./components/popup/PopUpContent"
import { AffirmationBody } from "./components/AffirmationBodyInput"
import { Language } from "./components/Language"

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
          <CommonHeadingInput>
            <CourtHeading {...{ language }} />
            {language === "Chinese" ? (
              <>
                <CaseType {...{ caseType, setCaseType, language }} />
                編號
                <CaseYear {...{ caseYear, setCaseYear, handleFocus }} />年
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
          </CommonHeadingInput>
          <Parties
            {...{
              plaintiffs,
              defendants,
              setPlaintiffs,
              setDefendants,
              language,
            }}
          >
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
          <AffirmationBody {...{ deponentName, language }} />
          <EndMatters
            {...{
              partyName,
              setPartyName,
              date,
              setDate,
              handleFocus,
              language,
            }}
          />
        </div>
      )}
      {!inputOpen && (
        <Output
          {...{
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
