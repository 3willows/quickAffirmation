import { DisplayRoleName } from "./DisplayRoleName"
import { convertToChinese, getOrdinal } from "./helpers/OrdinalChineseFormat"

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
            <span className="go-right">
              {getOrdinal(i + 1)}{" "}
              <DisplayRoleName {...{ side, caseType, language }} />
            </span>
          )}
        </div>
      )}
    </>
  )
}
