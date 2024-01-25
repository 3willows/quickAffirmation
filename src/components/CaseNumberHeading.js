export function Heading({ children }) {
  return <div>{children}</div>
}

export function CaseType({ caseType, setCaseType, language }) {
  return (
    <>
      <select value={caseType} onChange={(e) => setCaseType(e.target.value)}>
        <option value="ACTION">{
          language === "Chinese" ? `高院民事訴訟案件` : `ACTION`
        }</option>
        <option value="BANKRUPTCY">{
          language === "Chinese" ? `高院破產案件` : `BANKRUPTCY`
        }</option>
        <option value="COMPANIES (WINDING-UP) PROCEEDINGS">
        {
          language === "Chinese" ? `高院公司清盤案件` : ` COMPANIES (WINDING-UP) PROCEEDINGS`
        }
        </option>
        <option value="INTENDED ACTION">{
          language === "Chinese" ? `擬進行的訴訟` : `INTENDED ACTION`
        }</option>
        <option value="MISCELLANEOUS PROCEEDINGS">
        {
          language === "Chinese" ? `高院雜項案件` : `     MISCELLANEOUS PROCEEDINGS`
        }
        </option>
        <option value="PERSONAL INJURIES ACTION">
        {
          language === "Chinese" ? `高等法院傷亡訴訟` : `     PERSONAL INJURIES ACTION`
        }
        </option>
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
