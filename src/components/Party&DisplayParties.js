export function Party({ name, i, side, array }) {
  function getOrdinal(n) {
    let suffix = ["TH", "ST", "ND", "RD"]
    let v = n % 100
    return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0])
  }

  return (
    <div>
      {name}
      {array.length === 1 ? (
        <span className="go-right">{`${side === "P" ? "PLAINTIFF" : "DEFENDANT"}`}</span>
      ) : (
        <span className="go-right">{`${getOrdinal(i + 1)} ${side === "P" ? "PLAINTIFF" : "DEFENDANT"}`}</span>
      )}
    </div>
  );
  
}

export function DisplayParties({ plaintiffs, defendants }) {
  return (
    <div className="go-left">
      BETWEEN
      <div>
        {plaintiffs.length === 0 && <div>[Plaintiff]<span className="go-right">PLAINTIFF</span></div> }
        {plaintiffs.map((party, iterator) => (
          <Party
            name={party.name}
            i={iterator}
            side={"P"}
            array={plaintiffs}
            key={party.name}
          />
        ))}
      </div>
      <p>AND</p>
      <div>
        {defendants.length === 0 && <div>[Defendant]<span className="go-right">DEFENDANT</span></div>}
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
