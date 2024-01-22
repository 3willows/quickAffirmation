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
        {caseType === "BANKRUPTCY" && "B"}
        {caseType === "INTENDED ACTION" && "ZZ"}
        {caseType === "APPLICATION TO SET ASIDE A STATUTORY DEMAND" && "SD"}
        {caseType === "PROBATE ACTION" && "PA"}
        {caseType === "COMPANIES (WINDING-UP) PROCEEDINGS" && "CW"}
        {caseType === "MENTAL HEALTH CASE" && "MH"} {" "}
        {caseDigit}/{caseYear}
      </p>
      <p>
        {partyName}:{affirmNumber}:{deponentName}:{date}
      </p>
    </div>
  )
}
