import React from "react"
import { CourtHeadingInput } from "./CourtInputOutput"
import { CaseType, CaseDigit, CaseYear } from "./CaseNumberInputOutput"
import { AffirmationTitle } from "./AffirmationTitleInput"
import { EndMatters } from "./EndMattersInput.js"
import { TopRight } from "./TopRight"
import { Parties } from "./PartiesLogic"
import { DisplayParties } from "./PartiesDisplay"
import { AffirmationBody } from "./AffirmationBodyInput"
import { Language } from "./Language"

export function AffirmationInput({
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
}) {
  return (
    <div className="inputComponents">
      <TopRight
        {...{
          court,
          caseType,
          caseDigit,
          caseYear,
          affirmNumber,
          setAffirmNumber,
          deponentName,
          date,
          partyName,
          language,
        }}
      />
      <Language {...{ language, setLanguage }} />
      <CourtHeadingInput {...{ court, setCourt, language }} />
      {language === "Chinese" ? (
        <>
          <CaseType {...{ court, caseType, setCaseType, language }} />
          編號
          <CaseYear {...{ caseYear, setCaseYear, handleFocus }} />年
          <CaseDigit {...{ caseDigit, setCaseDigit, handleFocus }} />號
        </>
      ) : (
        <>
          <CaseType {...{ court, caseType, setCaseType, language }} />
          NO.
          <CaseDigit {...{ caseDigit, setCaseDigit, handleFocus }} />
          OF
          <CaseYear {...{ caseYear, setCaseYear, handleFocus }} />
        </>
      )}
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
  )
}
