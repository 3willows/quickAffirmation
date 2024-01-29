import React, { useEffect } from "react"
import { highCourtcaseTypes } from "./HighCourtcaseTypes"
import { districtCourtcaseTypes } from "./DistrictCourtcaseTypes"

export function CaseHeadingOutput({
  caseType,
  caseDigit,
  caseYear,
  language,
  court,
}) {
  const selectedHcCase = highCourtcaseTypes.find(
    (element) => element.abbrev === caseType
  )

  const selectedDcCase = districtCourtcaseTypes.find(
    (element) => element.abbrev === caseType
  )

  let selectedCase = [{Chinese: "Error!", English: "Error", abbrev: "Error"}]

  if (court === "HC") {
    selectedCase = selectedHcCase
  }
  if (court === "DC") {
    selectedCase = selectedDcCase
  }

  return (
    <>
      {language === "Chinese" && (
        <>
          {selectedCase[language]?.trim()}
          編號{caseYear}年{caseDigit}號
        </>
      )}
      {language === "English" && (
        <>
          {selectedCase[language]?.trim()} NO. {caseDigit} OF {caseYear}
        </>
      )}
    </>
  )
}

export function CaseType({ caseType, setCaseType, language, court }) {
  useEffect(() => {
    court === "HC" && setCaseType("A")
    court === "DC" && setCaseType("CJ")
  }, [court])

  return (
    <>
      {court === "HC" && (
        <select value={caseType} onChange={(e) => setCaseType(e.target.value)}>
          {highCourtcaseTypes.map((option) => (
            <option key={option.English} value={option.abbrev}>
              {language === "Chinese" ? option.Chinese : option.English}
            </option>
          ))}
        </select>
      )}
      {court === "DC" && (
        <select value={caseType} onChange={(e) => setCaseType(e.target.value)}>
          {districtCourtcaseTypes.map((option) => (
            <option key={option.English} value={option.abbrev}>
              {language === "Chinese" ? option.Chinese : option.English}
            </option>
          ))}
        </select>
      )}
    </>
  )
}

export function CaseDigit({ caseDigit, setCaseDigit, handleFocus }) {
  return (
    <input
      type="text"
      value={caseDigit}
      onChange={(e) => setCaseDigit(e.target.value)}
      className="digital"
      onFocus={handleFocus}
    ></input>
  )
}

export function CaseYear({ caseYear, setCaseYear, handleFocus }) {
  return (
    <input
      type="text"
      value={caseYear}
      onChange={(e) => setCaseYear(e.target.value)}
      className="digital"
      onFocus={handleFocus}
    ></input>
  )
}
