import { convertToChinese, getOrdinal } from "./OrdinalChineseFormat"

export function Party({ partyName, i, side, array, language }) {
  return (
    <>
      {language === "Chinese" ? (
        <div>
          <span className="go-left">
            &ensp;
            {array.length === 1 ? (
              <span>
                {side === "P" ? `原告人` : ""}
                {side === "D" ? `被告人` : ""}
              </span>
            ) : (
              <span>{`第${convertToChinese(i + 1)}${
                side === "P" ? `原告人` : ""
              }
              ${side === "D" ? `被告人` : ""}
              `}</span>
            )}
          </span>
          <span className="go-right">{partyName}</span>
        </div>
      ) : (
        <div>
          &ensp; {partyName}
          {array.length === 1 ? (
            <span className="go-right">{`${
              side === "P" ? "PLAINTIFF" : "DEFENDANT"
            }`}</span>
          ) : (
            <span className="go-right">{`${getOrdinal(i + 1)} ${
              side === "P" ? "PLAINTIFF" : "DEFENDANT"
            }`}</span>
          )}
        </div>
      )}
    </>
  )
}
