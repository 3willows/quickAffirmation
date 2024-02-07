import { useAppContext } from "./AppContext"

export function AffirmationTitleOutput({

  language,
}) {
  const {
    state: { affirmNumber, deponentName  },

  } = useAppContext()
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
          &nbsp;AFFIRMATION OF &nbsp;
          {deponentName.toUpperCase()}
        </>
      )}
    </div>
  )
}
