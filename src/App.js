import "./App.css"
import React, { useState } from "react"
import { Heading, AffirmationTitle, EndMatters } from "./components/Input"
import { TopRight } from "./components/TopRight"
import { Output } from "./components/Output"
import { Parties } from "./components/Parties"
import { formattedDate } from "./components/TodayDate"
import { PopUpContent } from "./components/PopUpContent"

const initialPs = []
const initialDs = []

function App() {
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

  function addPlaintiffs(newP) {
    setPlaintiffs((plaintiffs) => [...plaintiffs, newP])
  }
  function addDefendants(newP) {
    setDefendants((defendants) => [...defendants, newP])
  }
  function removeParty(toRemove) {
    setPlaintiffs((parties) =>
      parties.filter((party) => party.name !== toRemove)
    )

    setDefendants((parties) =>
      parties.filter((party) => party.name !== toRemove)
    )
  }
  // End matters
  const [partyName, setPartyName] = useState("Plaintiff")
  const [affirmAddress, setAffirmAddress] = useState("place of affirmation")
  const [independentSolicitor, setIndependentSolicitor] = useState(
    "Independent Solicitors"
  )
  const [date, setDate] = useState(formattedDate)

  // choose to show or hide 1 of 2 pages
  const [inputOpen, setInputOpen] = useState(true)
  function toggleInputOpen(inputOpen) {
    setInputOpen((inputOpen) => !inputOpen)
    scrollToTop()
  }
  const handleFocus = (event) => event.target.select()

  // scroll to top
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
    <div className="App">
      <PopUpContent />

      {inputOpen && (
        <div className="inputComponents">
          <TopRight
            caseType={caseType}
            caseDigit={caseDigit}
            caseYear={caseYear}
            affirmNumber={affirmNumber}
            deponentName={deponentName}
            date={date}
            partyName={partyName}
          />
          <Heading
            caseType={caseType}
            caseDigit={caseDigit}
            caseYear={caseYear}
            setCaseType={setCaseType}
            setCaseDigit={setCaseDigit}
            setCaseYear={setCaseYear}
            handleFocus={handleFocus}
          />
          <Parties
            plaintiffs={plaintiffs}
            defendants={defendants}
            addPlaintiffs={addPlaintiffs}
            addDefendants={addDefendants}
            removeParty={removeParty}
            handleFocus={handleFocus}
          />
          <AffirmationTitle
            affirmNumber={affirmNumber}
            deponentName={deponentName}
            setAffirmNumber={setAffirmNumber}
            setDeponentName={setDeponentName}
            handleFocus={handleFocus}
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
            affirmAddress={affirmAddress}
            independentSolicitor={independentSolicitor}
            setDate={setDate}
            setAffirmAddress={setAffirmAddress}
            setIndependentSolicitor={setIndependentSolicitor}
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
          affirmAddress={affirmAddress}
          independentSolicitor={independentSolicitor}
          partyName={partyName}
          plaintiffs={plaintiffs}
          defendants={defendants}
        />
      )}
      <ToggleButtons inputOpen={inputOpen} toggleInputOpen={toggleInputOpen} />
    </div>
  )
}

export default App

function ToggleButtons({ inputOpen, toggleInputOpen }) {
  return (
    <div>
      <button className="large-button" onClick={toggleInputOpen}>
        {inputOpen ? `OUTPUT` : `REVISE`}
      </button>
    </div>
  )
}
