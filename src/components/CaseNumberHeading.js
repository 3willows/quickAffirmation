export function Heading({ children }) {
  return <div>{children}</div>
}

export function CaseType({ caseType, setCaseType }) {
  return (
    <>
      <select value={caseType} onChange={(e) => setCaseType(e.target.value)}>
        <option value="ACTION">ACTION</option>
        <option value="BANKRUPTCY">BANKRUPTCY</option>
        <option value="COMPANIES (WINDING-UP) PROCEEDINGS">
          COMPANIES (WINDING-UP) PROCEEDINGS
        </option>
        <option value="INTENDED ACTION">INTENDED ACTION</option>
        <option value="MENTAL HEALTH CASE">MENTAL HEALTH CASE</option>
        <option value="MISCELLANEOUS PROCEEDINGS">
          MISCELLANEOUS PROCEEDINGS
        </option>
        <option value="PROBATE ACTION">PROBATE ACTION </option>
      </select>
    </>
  )
}

export function CaseDigit({ caseDigit, setCaseDigit, handleFocus }) {
  return (
    <input
      type="text"
      value={caseDigit}
      onChange={(e) => setCaseDigit(e.target.value)}
      className="digital"
      onFocus={handleFocus}
    ></input>
  )
}

export function CaseYear({ caseYear, setCaseYear, handleFocus }) {
  return (
    <input
      type="text"
      value={caseYear}
      onChange={(e) => setCaseYear(e.target.value)}
      className="digital"
      onFocus={handleFocus}
    ></input>
  )
}

export function AffirmationTitle({
  affirmNumber,
  setAffirmNumber,
  deponentName,
  setDeponentName,
  handleFocus,
}) {
  return (
    <div className="affirm-box">
      <input
        type="text"
        value={affirmNumber}
        onChange={(e) => setAffirmNumber(e.target.value)}
        className="digital"
        onFocus={handleFocus}
      ></input>
      AFFIRMATION OF
      <input
        type="text"
        value={deponentName}
        onChange={(e) => setDeponentName(e.target.value)}
        onFocus={handleFocus}
      ></input>
    </div>
  )
}

export function EndMatters({
  date,
  setDate,
  partyName,
  setPartyName,
  handleFocus,
}) {
  return (
    <div className="go-left">
      <p>
        This affirmation is filed on behalf of the
        <input
          type="text"
          value={partyName}
          onChange={(e) => setPartyName(e.target.value)}
          onFocus={handleFocus}
        ></input>
        .
      </p>
      <p>
        Dated this
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onFocus={handleFocus}
        ></input>
        .
      </p>
    </div>
  )
}
