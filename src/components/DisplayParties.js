export function DisplayParties({ plaintiffs, defendants }) {
  return (
    <div className="go-left">
      BETWEEN
      <p></p>{" "}
      <DisplayOneSideParties
        OneSideParties={plaintiffs}
        name="Plaintiff"
        side="P"
      />
      <p>AND</p>
      <p></p>{" "}
      <div>
        <DisplayOneSideParties
          OneSideParties={defendants}
          name="Defendant"
          side="D"
        />
      </div>
    </div>
  )
}

function DisplayOneSideParties({ OneSideParties, name, side }) {
  return (
    <div>
      {OneSideParties.length === 0 && (
        <div>
          {" "}
          &ensp; [{name}]<span className="go-right">{name.toUpperCase()}</span>
        </div>
      )}
      {OneSideParties.map((party, iterator) => (
        <Party
          name={party.name}
          i={iterator}
          side={side}
          array={OneSideParties}
          key={party.name}
        />
      ))}
    </div>
  )
}

export function Party({ name, i, side, array }) {
  function getOrdinal(n) {
    let suffix = ["th", "st", "nd", "rd"]
    let v = n % 100
    return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0])
  }
  return (
    <div>
      &ensp; {name}
      {array.length === 1 ? (
        <span className="go-right">{`${
          side === "P" ? "PLAINTIFF" : "DEFENDANT"
        }`}</span>
      ) : (
        <span className="go-right">{`${getOrdinal(i + 1)} ${
          side === "P" ? "PLAINTIFF" : "DEFENDANT"
        }`}</span>
      )}
    </div>
  )
}
