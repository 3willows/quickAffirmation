import { TopRight } from "./TopRight"
import { CourtHeadingOuput } from "./CourtHeading"
import { DisplayParties } from "./PartiesDisplay"
import { AffirmationTitleOutput } from "./AffirmationTitleOutput"
import { CaseHeadingOutput } from "./CaseNumberHeading"
import { Language } from "./Language"

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
  setLanguage
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
      <Language {...{ language, setLanguage }} />
      <div>
        <CourtHeadingOuput
          {...{
            language,
          }}
        />
        <CaseHeadingOutput
          {...{
            caseType,
            caseDigit,
            caseYear,
            language,
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