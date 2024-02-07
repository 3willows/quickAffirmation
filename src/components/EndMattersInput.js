import { useAppContext } from "./AppContext"

export function EndMatters({ handleFocus }) {
  const { state : { language, date, partyName }, dispatch } = useAppContext()

  return (
    <div className="go-left">
      <p>
        {language === "Chinese" ? (
          <>這份誓詞是為</>
        ) : (
          <>This affirmation is filed on behalf of the</>
        )}
        <input
          type="text"
          value={partyName}
          onChange={(e) => {
            dispatch({ type: "SET_DATE", payload: e.target.value })
          }}
          onFocus={handleFocus}
        ></input>
        {language === "Chinese" ? <>送交存檔的。</> : <>. </>}
      </p>
      <p>
        {language === "Chinese" ? <>日期：</> : <> Dated this </>}
        <input
          type="text"
          value={date}
          onChange={(e) =>
            dispatch({ type: "SET_DATE", payload: e.target.value })
          }
          onFocus={handleFocus}
        ></input>
        .
      </p>
    </div>
  )
}
