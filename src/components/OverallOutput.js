import { Backsheet } from "./Backsheet"
import { AffirmationBody } from "./AffirmationBodyOutput"
import { CommonHeading } from "./CommonHeadingOutput"

export function Output({
  caseType,
  caseDigit,
  caseYear,
  affirmNumber,
  deponentName,
  date,
  partyName,
  plaintiffs,
  defendants,
  language,
  setLanguage,
}) {
  return (
    <div className="output">
      ***** BODY ******
      <AffirmationBody
        {...{
          deponentName,
          date,
          partyName,
          language,
        }}
      >
        <CommonHeading
          {...{
            caseType,
            caseDigit,
            caseYear,
            affirmNumber,
            deponentName,
            date,
            plaintiffs,
            defendants,
            partyName,
            language,
            setLanguage,
          }}
        />
      </AffirmationBody>
      ***** BACKSHEET ******
      <Backsheet {...{ date, partyName, language }}>
        <CommonHeading
          {...{
            caseType,
            caseDigit,
            caseYear,
            affirmNumber,
            deponentName,
            date,
            plaintiffs,
            defendants,
            partyName,
            language,
          }}
        />
      </Backsheet>
    </div>
  )
}
