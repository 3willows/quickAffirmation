import { Backsheet } from "./Backsheet"
import { AffirmationBody } from "./AffirmationBodyOutput"
import { CommonHeading } from "./OutputCommonHeading"

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
