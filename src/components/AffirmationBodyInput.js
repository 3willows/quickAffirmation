import React from "react"

export function AffirmationBody({ deponentName, language }) {
  return (
    <div>
      <p className="go-left">
        {language === "Chinese" ? (
          <>本人{deponentName}現居於[地址]謹以至誠確認以下內容:-</>
        ) : (
          <>
            I, {deponentName}, of [address] do solemnly, truthfully and
            sincerely affirm and say as follows:-
          </>
        )}
      </p>
      <p></p>
      {language === "Chinese" ? <>[誓詞內容]</> : <>[Body of Affirmation]</>}
      <p></p>
    </div>
  )
}
