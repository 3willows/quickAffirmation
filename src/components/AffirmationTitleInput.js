import { useAppContext } from "./AppContext"

export function AffirmationTitle({ handleFocus, language }) {
  const {
    state: { affirmNumber, deponentName  },
    dispatch,
  } = useAppContext()

  return (
    <div className="affirm-box">
      {language === "Chinese" ? (
        <>
          <input
            type="text"
            value={deponentName}
            onChange={(e) =>
              dispatch({ type: "SET_DEPONENTNAME", payload: e.target.value })
            }
            onFocus={handleFocus}
          ></input>{" "}
          的第
          <input
            type="text"
            value={affirmNumber}
            onChange={(e) =>   dispatch({ type: "SET_AFFIRMNO", payload: e.target.value })}
            className="digital"
            onFocus={handleFocus}
          ></input>
          份非宗教式誓詞
        </>
      ) : (
        <>
          <input
            type="text"
            value={affirmNumber}
            onChange={(e) => dispatch({ type: "SET_AFFIRMNO", payload: e.target.value })}
            className="digital"
            onFocus={handleFocus}
          ></input>
          AFFIRMATION OF
          <input
            type="text"
            value={deponentName}
            onChange={(e) =>    dispatch({ type: "SET_DEPONENTNAME", payload: e.target.value })}
            onFocus={handleFocus}
          ></input>
        </>
      )}
    </div>
  )
}
