import { highCourtcaseTypes } from "./HighCourtcaseTypes"

export function CaseHeadingOutput({ caseType, caseDigit, caseYear, language }) {
  const selectedCase = highCourtcaseTypes.find(
    (element) => element.abbrev === caseType
  )
  return (
    <>
      {language === "Chinese" && (
        <>
          {selectedCase[language]}編號{caseYear}年{caseDigit}號
        </>
      )}
      {language === "English" && (
        <>
          {" "}
          {selectedCase[language]} NO. {caseDigit} OF {caseYear}
        </>
      )}
    </>
  )
}

export function CaseType({ caseType, setCaseType, language }) {
  return (
    <>
      <select value={caseType} onChange={(e) => setCaseType(e.target.value)}>
        {highCourtcaseTypes.map((option) => (
          <option key={option.English} value={option.abbrev}>
            {language === "Chinese" ? option.Chinese : option.English}
          </option>
        ))}
      </select>
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

