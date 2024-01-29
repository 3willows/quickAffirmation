import { TopRight } from "./TopRight"
import { CourtHeadingOuput } from "./CourtInputOutput"
import { DisplayParties } from "./PartiesDisplay"
import { AffirmationTitleOutput } from "./AffirmationTitleOutput"
import { CaseHeadingOutput } from "./CaseNumberInputOutput"
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
  setLanguage,
  court,
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
          court,
        }}
        className="top-right"
      />
      <Language {...{ language, setLanguage }} />
      <div>
        <CourtHeadingOuput
          {...{
            language,
            court,
          }}
        />
        <CaseHeadingOutput
          {...{
            caseType,
            caseDigit,
            caseYear,
            language,
            court,
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
