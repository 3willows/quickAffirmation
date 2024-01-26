import { TopRight } from "./TopRight"
import { CourtHeading } from "./CourtHeading"
import { DisplayParties } from "./PartiesDisplay"
import { AffirmationTitleOutput } from "./AffirmationTitleOutput"

export function CommonHeading({
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
}) {
  return (
    <div>
      <TopRight
        {...{
          caseType,
          caseDigit,
          caseYear,
          affirmNumber,
          deponentName,
          date,
          partyName,
          language,
        }}
        className="top-right"
      />
      <div>
        <CourtHeading
          {...{
            language,
          }}
        />
        {caseType} NO. {caseDigit} OF {caseYear}
      </div>
      <DisplayParties {...{ plaintiffs, defendants, language }} />
      <p></p>{" "}
      <div className="affirm-box">
      <AffirmationTitleOutput
          {...{
            affirmNumber,
            deponentName,
            language,
          }} />
        <p></p>{" "}
      </div>
    </div>
  )
}
