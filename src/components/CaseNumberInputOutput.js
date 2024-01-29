import { highCourtcaseTypes } from "./HighCourtcaseTypes"
import { districtCourtcaseTypes } from "./DistrictCourtcaseTypes"

export function CaseHeadingOutput({
  caseType,
  caseDigit,
  caseYear,
  language,
  court,
}) {
  const selectedCase = (
    court === "HC" &&
    highCourtcaseTypes.find((element) => element.abbrev === caseType)
  )(
    court === "DC" &&
      districtCourtcaseTypes.find((element) => element.abbrev === caseType)
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

export function CaseType({ caseType, setCaseType, language, court }) {
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
