export function AffirmationTitle({
  affirmNumber,
  setAffirmNumber,
  deponentName,
  setDeponentName,
  handleFocus,
  language,
}) {
  return (
    <div className="affirm-box">
      {language === "Chinese" ? (
        <>
          <input
            type="text"
            value={deponentName}
            onChange={(e) => setDeponentName(e.target.value)}
            onFocus={handleFocus}
          ></input>{" "}
          的第
          <input
            type="text"
            value={affirmNumber}
            onChange={(e) => setAffirmNumber(e.target.value)}
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
            onChange={(e) => setAffirmNumber(e.target.value)}
            className="digital"
            onFocus={handleFocus}
          ></input>
          AFFIRMATION OF
          <input
            type="text"
            value={deponentName}
            onChange={(e) => setDeponentName(e.target.value)}
            onFocus={handleFocus}
          ></input>
        </>
      )}
    </div>
  )
}
