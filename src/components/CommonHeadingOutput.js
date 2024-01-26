import { TopRight } from "./TopRight"
import { CourtHeading } from "./CourtHeading"
import { DisplayParties } from "./PartiesDisplay"
import { AffirmationTitleOutput } from "./AffirmationTitleOutput"
import { CaseHeadingOutput } from "./CaseNumberHeading"

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
        <CaseHeadingOutput
          {...{
            caseType,
            caseDigit,
            caseYear,
            language
          }}
        />
      </div>
      <DisplayParties {...{ plaintiffs, defendants, language }} />
      <p></p>{" "}
      <div className="affirm-box">
        <AffirmationTitleOutput
          {...{
            affirmNumber,
            deponentName,
            language,
          }}
        />
        <p></p>{" "}
      </div>
    </div>
  )
}
