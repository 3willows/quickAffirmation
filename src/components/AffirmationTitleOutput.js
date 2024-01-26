export function AffirmationTitleOutput({
  affirmNumber,
  deponentName,
  language,
}) {
  return (
    <div className="affirm-box">
      {language === "Chinese" ? (
        <>
          {deponentName}
          的第
          {affirmNumber}
          份非宗教式誓詞
        </>
      ) : (
        <>
          {affirmNumber}
          AFFIRMATION OF
          {deponentName.toUpperCase()}
        </>
      )}
    </div>
  )
}
