import { Backsheet } from "./BacksheetOutput"
import { AffirmationBody } from "./AffirmationBodyOutput"
import { CommonHeading } from "./CommonHeadingOutput"
import { useAppContext } from "./AppContext"

export function AffirmationOutput({
  affirmNumber,
  deponentName,
  date,
  partyName,
  plaintiffs,
  defendants,
}) {
  const {
    state: { court, language, caseType, caseDigit, caseYear },
    dispatch,
  } = useAppContext()

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
