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
