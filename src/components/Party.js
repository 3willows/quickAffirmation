import { convertToChinese, getOrdinal } from "./helpers/OrdinalChineseFormat"

export function DisplayRoleName({ side, caseType, language }) {
  let name = "ERROR!"
  if (side === "P") {
    // if (caseType === "AL" || "MC") {
    //   name = { English: "Applicant", Chinese: "申請人" }
    // } else {
    name = { English: "Plaintiff".toUpperCase(), Chinese: "原告人" }
  }
  if (side === "D") {
    // if (caseType === "AL" || "MC") {
    //   name = { English: "Respondent", Chinese: "答辯人" }
    // } else {
    name = { English: "Defendant".toUpperCase(), Chinese: "被告人" }
  }
  return <>{language === "Chinese" ? name?.Chinese : name?.English}</>
}

export function Party({ partyName, i, side, array, language, caseType }) {
  return (
    <>
      {language === "Chinese" ? (
        <div>
          <span className="go-left">
            &ensp;
            {array.length === 1 ? (
              <span>
                <DisplayRoleName {...{ side, caseType, language }} />
              </span>
            ) : (
              <span>
                {`第${convertToChinese(i + 1)}`}
                <DisplayRoleName {...{ side, caseType, language }} />
              </span>
            )}
          </span>
          <span className="go-right">{partyName}</span>
        </div>
      ) : (
        <div>
          &ensp; {partyName.toUpperCase()}
          {array.length === 1 ? (
            <span className="go-right">
            <DisplayRoleName {...{ side, caseType, language }} />
          </span>
          ) : (
            <span className="go-right">{getOrdinal(i + 1)}{" "}
              <DisplayRoleName {...{ side, caseType, language }} />
            </span>
          )}
        </div>
      )}
    </>
  )
}
