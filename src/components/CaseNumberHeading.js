const highCourtcaseTypes = [
  { Chinese: "民事訴訟案件", English: "ACTION" },
  { Chinese: "破產案件", English: "BANKRUPTCY" },
  {
    Chinese: "公司清盤案件",
    English: "COMPANIES (WINDING-UP) PROCEEDINGS",
  },
  {
    Chinese: "擬進行的訴訟",
    English: "INTENDED ACTION",
  },
  {
    Chinese: "雜項案件",
    English: "MISCELLANEOUS PROCEEDINGS",
  },
  {
    Chinese: "傷亡訴訟",
    English: "PERSONAL INJURIES ACTION",
  },
]

const districtCourtCaseTypes = [
  { Chinese: "民事訴訟案件", English: "CIVIL ACTION" },
  {
    Chinese: "僱員補償案件",
    English: "EMPLOYEES’ COMPENSATION CASE",
  },
  {
    Chinese: "婚姻訴訟案件",
    English: "MATRIMONIAL CAUSES",
  },
  {
    Chinese: "雜項案件",
    English: "MISCELLANEOUS PROCEEDINGS",
  },
  {
    Chinese: "傷亡訴訟",
    English: "PERSONAL INJURIES ACTION",
  },
]

export function CaseHeadingOutput({ caseType, caseDigit, caseYear, language }) {
  console.log(caseType)

  const selectedCase = highCourtcaseTypes.find(
    (element) => element.English === caseType
  )

  return (
    <>
      {language === "Chinese" ? (
        <>
          {selectedCase[language]}編號{caseYear}年{caseDigit}號
        </>
      ) : (
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
          <option key={option.English} value={option.English}>
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
