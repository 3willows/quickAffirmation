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
import { useAppContext } from "./AppContext"

export function AffirmationInput({
  plaintiffs,
  defendants,
  setPlaintiffs,
  setDefendants,
  handleFocus,
}) {
  const {
    state: {
      court,
      language,
      caseType,
      caseDigit,
      caseYear,
      affirmNumber,
      deponentName,
      date,
      partyName,
    },
  } = useAppContext()

  return (
    <div className="inputComponents">
      <TopRight
        {...{
          court,
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
      <Language />
      <CourtHeadingInput {...{ court, language }} />
      {language === "Chinese" ? (
        <>
          <CaseType {...{ court, caseType, language }} />
          編號
          <CaseYear {...{ caseYear, handleFocus }} />年
          <CaseDigit {...{ caseDigit, handleFocus }} />號
        </>
      ) : (
        <>
          <CaseType {...{ court, caseType, language }} />
          NO.
          <CaseDigit {...{ caseDigit, handleFocus }} />
          OF
          <CaseYear {...{ caseYear, handleFocus }} />
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
        <DisplayParties {...{ plaintiffs, defendants, language, caseType }} />
      </Parties>
      <AffirmationTitle
        {...{
          affirmNumber,
          deponentName,
          handleFocus,
          language,
        }}
      />
      <AffirmationBody {...{ deponentName, language }} />
      <EndMatters
        {...{
          partyName,
          date,
          handleFocus,
          language,
        }}
      />
    </div>
  )
}
