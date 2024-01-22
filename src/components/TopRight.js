export function TopRight({
  caseType,
  caseDigit,
  caseYear,
  affirmNumber,
  deponentName,
  partyName,
  date,
}) {
  return (
    <div className="top-right">
      <p>
        HC{caseType === "ACTION" && "A"}
        {caseType === "MISCELLANEOUS PROCEEDINGS" && "MP"}
        {caseType === "BANKRUPTCY" && "B"} {caseDigit}/{caseYear}
      </p>
      <p>
        {partyName}:{affirmNumber}:{deponentName}:{date}
      </p>
    </div>
  )
}
