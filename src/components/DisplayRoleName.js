export function DisplayRoleName({ side, caseType, language }) {
  let name = "ERROR!"
  if (side === "P") {
    if (caseType === "AL") {
      name = { English: "Applicant", Chinese: "申請人" }
    } else {
      name = { English: "Plaintiff".toUpperCase(), Chinese: "原告人" }
    }
  }
  if (side === "D") {
    if (caseType === "AL") {
      name = { English: "Respondent", Chinese: "答辯人" }
    } else {
      name = { English: "Defendant".toUpperCase(), Chinese: "被告人" }
    }
  }
  return <>{language === "Chinese" ? name?.Chinese : name?.English}</>
}
