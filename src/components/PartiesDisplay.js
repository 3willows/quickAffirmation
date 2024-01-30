import { Party, DisplayRoleName } from "./Party"

export function DisplayParties({ plaintiffs, defendants, language, caseType }) {
  return (
    <div className="go-left">
      {language === "Chinese" ? "" : `BETWEEN`}
      <p></p>{" "}
      <DisplayOneSideParties
        OneSideParties={plaintiffs}
        side="P"
        {...{ language, caseType }}
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
          {...{ language, caseType }}
        />
      </div>
    </div>
  )
}

function DisplayOneSideParties({ OneSideParties, side, language, caseType }) {
  return (
    <div>
      {language === "Chinese" ? (
        <>
          {OneSideParties.length === 0 && (
            <div>
              {" "}
              <span className="go-right">
                <DisplayRoleName {...{ side, caseType, language }} />
              </span>
              <span>
                {" "}
                &ensp;[ <DisplayRoleName {...{ side, caseType, language }} />]
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
                <DisplayRoleName {...{ side, caseType, language }} />
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
          {...{ caseType, language }}
        />
      ))}
    </div>
  )
}
