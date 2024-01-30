export function DisplayRoleName({ side, caseType, language }) {
  let name = "ERROR!"

  if (caseType === "AL") {
    name =
      side === "P"
        ? { English: "Applicant".toUpperCase(), Chinese: "申請人" }
        : {
            English: "(Putative) Respondent".toUpperCase(),
            Chinese: "擬答辯人",
          }
  } else if (caseType === "AD" || caseType === "MH" || caseType === "RE") {
    name =
      side === "P"
        ? { English: "Applicant".toUpperCase(), Chinese: "申請人" }
        : { English: "Respondent".toUpperCase(), Chinese: "答辯人" }
  } else if (
    caseType === "MC" ||
    caseType === "CW" ||
    caseType === "B" ||
    caseType === "BI"
  ) {
    name =
      side === "P"
        ? { English: "Petitioner".toUpperCase(), Chinese: "呈請人" }
        : (name = { English: "Respondent".toUpperCase(), Chinese: "答辯人" })
  } else {
    name =
      side === "P"
        ? { English: "Plaintiff".toUpperCase(), Chinese: "原告人" }
        : { English: "Defendant".toUpperCase(), Chinese: "被告人" }
  }

  return <>{language === "Chinese" ? name?.Chinese : name?.English}</>
}
