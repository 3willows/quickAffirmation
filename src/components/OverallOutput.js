import { Backsheet } from "./BacksheetOutput"
import { AffirmationBody } from "./AffirmationBodyOutput"
import { CommonHeading } from "./CommonHeadingOutput"

export function AffirmationOutput({
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
  court
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
            court,
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
            court,
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
