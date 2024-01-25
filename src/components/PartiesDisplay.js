import { Party } from "./Party"

export function DisplayParties({ plaintiffs, defendants, language }) {
  return (
    <div className="go-left">
      {language === "Chinese" ? "" : `BETWEEN`}
      <p></p>{" "}
      <DisplayOneSideParties
        OneSideParties={plaintiffs}
        side="P"
        {...{ language }}
      />
      <p>
        {language === "Chinese" ? (
          <p style={{ textAlign: "center" }}>與</p>
        ) : (
          `AND`
        )}
      </p>
      <p></p>{" "}
      <div>
        <DisplayOneSideParties
          OneSideParties={defendants}
          side="D"
          {...{ language }}
        />
      </div>
    </div>
  )
}

function DisplayOneSideParties({ OneSideParties, sideName, side, language }) {
  return (
    <div>
      {language === "Chinese" ? (
        <>
          {OneSideParties.length === 0 && (
            <div>
              {" "}
              <span className="go-right">
                {side === "P" && `原告人`}
                {side === "D" && `被告人`}
              </span>
              <span>
                {" "}
                &ensp;[{side === "P" && `原告人`}
                {side === "D" && `被告人`}]
              </span>
            </div>
          )}
        </>
      ) : (
        <>
          {OneSideParties.length === 0 && (
            <div>
              {" "}
              &ensp; [{side === "P" && `Plaintiff`}
              {side === "D" && `Defendant`}]
              <span className="go-right">
                {side === "P" && `Plaintiff`.toUpperCase()}
                {side === "D" && `Defendant`.toUpperCase()}
              </span>
            </div>
          )}
        </>
      )}
      {OneSideParties.map((party, iterator) => (
        <Party
          partyName={party.name}
          i={iterator}
          side={side}
          array={OneSideParties}
          key={party.name}
          {...{ language }}
        />
      ))}
    </div>
  )
}
