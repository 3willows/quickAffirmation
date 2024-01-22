import { FullHeading } from "./FullHeading"

export function AffirmationTitle({
  affirmNumber,
  setAffirmNumber,
  deponentName,
  setDeponentName,
}) {
  return (
    <div div className="affirm-box">
      <input
        type="text"
        value={affirmNumber}
        onChange={(e) => setAffirmNumber(e.target.value)}
      ></input>
      AFFIRMATION OF
      <input
        type="text"
        value={deponentName}
        onChange={(e) => setDeponentName(e.target.value)}
      ></input>
    </div>
  )
}
export function Heading({
  caseType,
  setCaseType,
  caseDigit,
  setCaseDigit,
  caseYear,
  setCaseYear,
}) {
  return (
    <div>
      <FullHeading />
      HIGH COURT
      <select value={caseType} onChange={(e) => setCaseType(e.target.value)}>
        <option value="ACTION">ACTION</option>
        <option value="MISCELLANEOUS PROCEEDINGS">
          MISCELLANEOUS PROCEEDINGS
        </option>
        <option value="BANKRUPTCY">BANKRUPTCY</option>
      </select>
      <input
        type="text"
        value={caseDigit}
        onChange={(e) => setCaseDigit(e.target.value)}
      ></input>
      OF
      <input
        type="text"
        value={caseYear}
        onChange={(e) => setCaseYear(e.target.value)}
      ></input>
    </div>
  )
}
export function EndMatters({
  date,
  setDate,
  affirmAddress,
  setAffirmAddress,
  independentSolicitor,
  setIndependentSolicitor,
  partyName,
  setPartyName,
}) {
  return (
    <div className="go-left">
      <p>
        This affirmation is filed on behalf of the
        <input
          type="text"
          value={partyName}
          onChange={(e) => setPartyName(e.target.value)}
        ></input>
        .
      </p>
      <p>
        Dated this
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        .
      </p>
    </div>
  )
}
