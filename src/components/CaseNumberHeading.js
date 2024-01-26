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

// more

const moreHcCaseTypes = [
  { English: "Constitutional and Administrative Law Proceedings", Chinese: "憲法及行政訴訟"},
  { English: "Admiralty Action", Chinese: "海事訢訟" },
  { English: "Adoption Application", Chinese: "收養申請"  },
  { English: "High Court Bankruptcy Interim Order", Chinese: "破產案臨時命令" },
  { English: "Applicati on to set as這e a Statutory Demand", Chinese: "申請將法定要求償債書作廢" },
  { English: "Construction and Arbitration Proceedings", Chinese: "建築及仲裁訴訟" },
  { English: "Matrimonial Causes", Chinese: "婚姻訢訟", },
  { English: "Confidential Miscellaneous Proceedings", Chinese: "機密雜項案件" },
  { English: "Bookdebt Registration", Chinese: "帳面債項登記" },
  { English: "Bill of Sale Registration", Chinese: "賣據登記" },
  { English: "Stop Notice", Chinese: "停止通知書" },
  { English: "Application for Discharge", Chinese: "釋放申請" },
  { English: "Applications under the Mental Health Ordinance", Chinese: "根據《精神健康條例》提出的申請" },
  { English: "Intellectual Property Case", Chinese: "知識產權案件" },
  { English: "Reciprocal Enforcement Case", Chinese: "民商事相互執行案件" },
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
