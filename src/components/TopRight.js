import { useAppContext } from "./AppContext"

export function TopRight({
  caseType,
  caseDigit,
  caseYear,
  affirmNumber,
  deponentName,
  partyName,
  date,
  language,
  court,
}) {

  return (
    <div className="top-right">
      <p>
        {court}{caseType} {caseDigit}/{caseYear}
      </p>
      <p>
        {partyName}:
        {language === "Chinese" ? `第${affirmNumber}份誓章` : affirmNumber}:
        {deponentName}:{date}
      </p>
    </div>
  )
}
