export function Party({ name, i, side, array }) {
  function getOrdinal(n) {
    let suffix = ["th", "st", "nd", "rd"]
    let v = n % 100
    return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0])
  }

  return (
    <div>
      {array.length === 1
        ? `     ${name.toUpperCase()}  ${side === "P" ? `Plaintiff` : `Defendant`}`
        : `     ${name.toUpperCase()} ${getOrdinal(i + 1)} ${
            side === "P" ? `Plaintiff` : `Defendant`
          }`}
    </div>
  )
}

export function DisplayParties({ plaintiffs, defendants }) {
  return (
    <div className="go-left">
      <p>
        {plaintiffs.length === 0 && `[Plaintiff]`}
        {plaintiffs.map((party, iterator) => (
          <Party
            name={party.name}
            i={iterator}
            side={"P"}
            array={plaintiffs}
            key={party.name}
          />
        ))}
      </p>
      <p>AND</p>
      <div>
        {defendants.length === 0 && `[Defendant]`}
        {defendants.map((party, iterator) => (
          <Party
            name={party.name}
            i={iterator}
            side={"D"}
            array={defendants}
            key={party.name}
          />
        ))}
      </div>
    </div>
  )
}
