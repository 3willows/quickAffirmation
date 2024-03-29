import { highCourtcaseTypes } from "./caseTypes/HighCourtcaseTypes"
import { districtCourtcaseTypes } from "./caseTypes/DistrictCourtcaseTypes"
import { useAppContext } from "./AppContext"

export function CaseType({ language }) {
  const {
    state: { court, caseType },
    dispatch,
  } = useAppContext()
  return (
    <>
      {court === "HC" && (
        <select
          value={caseType}
          onChange={(e) =>
            dispatch({ type: "SET_CASETYPE", payload: e.target.value })
          }
        >
          {highCourtcaseTypes.map((option) => (
            <option key={option.English} value={option.abbrev}>
              {language === "Chinese" ? option.Chinese : option.English}
            </option>
          ))}
        </select>
      )}
      {court === "DC" && (
        <select
          value={caseType}
          onChange={(e) =>
            dispatch({ type: "SET_CASETYPE", payload: e.target.value })
          }
        >
          {districtCourtcaseTypes.map((option) => (
            <option key={option.English} value={option.abbrev}>
              {language === "Chinese"
                ? option.Chinese
                : option.English.toUpperCase()}
            </option>
          ))}
        </select>
      )}
    </>
  )
}

export function CaseDigit({ caseDigit, handleFocus }) {
  const { dispatch } = useAppContext()

  return (
    <input
      type="text"
      value={caseDigit}
      onChange={(e) =>
        dispatch({ type: "SET_CASEDIGIT", payload: e.target.value })
      }
      className="digital"
      onFocus={handleFocus}
    ></input>
  )
}

export function CaseYear({ caseYear, handleFocus }) {
  const { dispatch } = useAppContext()

  return (
    <input
      type="text"
      value={caseYear}
      onChange={(e) =>
        dispatch({ type: "SET_CASEYEAR", payload: e.target.value })
      }
      className="digital"
      onFocus={handleFocus}
    ></input>
  )
}

export function CaseHeadingOutput({ language }) {
  const {
    state: { court, caseType, caseDigit, caseYear },
  } = useAppContext()

  const selectedHcCase = highCourtcaseTypes.find(
    (element) => element.abbrev === caseType
  )

  const selectedDcCase = districtCourtcaseTypes.find(
    (element) => element.abbrev === caseType
  )

  let selectedCase = [{ Chinese: "Error!", English: "Error", abbrev: "Error" }]

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
          {selectedCase[language]?.trim().toUpperCase()} NO. {caseDigit} OF{" "}
          {caseYear}
        </>
      )}
    </>
  )
}
