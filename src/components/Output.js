import { TopRight } from "./TopRight"
import { FullHeading } from "./FullHeading"
import { DisplayParties } from "./Party&DisplayParties"

export function Output({
  caseType,
  caseDigit,
  caseYear,
  affirmNumber,
  deponentName,
  date,
  affirmAddress,
  independentSolicitor,
  partyName,
  plaintiffs,
  defendants,
}) {
  return (
    <div className="backsheet">
      ***** FIRST PAGE ******
      <CommonHeading
        caseType={caseType}
        caseDigit={caseDigit}
        caseYear={caseYear}
        affirmNumber={affirmNumber}
        deponentName={deponentName}
        date={date}
        plaintiffs={plaintiffs}
        defendants={defendants}
        partyName={partyName}
      />
      <p className="go-left">
        {" "}
        I, {deponentName}, of [business address] do solemnly, truthfully and sincerely
        affirm and say as follows:-
      </p>
      <p> [BODY OF THE AFFIRMATION ] </p>
      <div className="go-left">
        <p>
         Signature of {deponentName} 
        </p>
        <p>
         Dated this {date} 
        </p>
        <p>
          Affirmed at [independent solicitors' office] of [address] on {date}.
        </p>
        <p> This affirmation is filed on behalf of the {" "}{partyName}.</p>
      </div>
      ***** BACKSHEET ******
      <CommonHeading
        caseType={caseType}
        caseDigit={caseDigit}
        caseYear={caseYear}
        affirmNumber={affirmNumber}
        deponentName={deponentName}
        date={date}
        plaintiffs={plaintiffs}
        defendants={defendants}
        partyName={partyName}
      />
      <div className="flex-outside">
        <div className="flex-box">
          <p>Affirmed on {date}</p>
          <p>Filed on </p>
          <p> This affirmation is filed on behalf of the {" "}{partyName}.</p>
        </div>
      </div>
      <p>[Your firm name]</p>
      <p>Solicitors for {partyName}</p>
      <p>[Firm address]</p>
      <p>[Firm Phone & Fax No]</p>
      <p>[Client reference]</p>
    </div>
  )
}

function CommonHeading({
  caseType,
  caseDigit,
  caseYear,
  affirmNumber,
  deponentName,
  date,
  plaintiffs,
  defendants,
  partyName,
}) {
  return (
    <div>
      <TopRight
        caseType={caseType}
        caseDigit={caseDigit}
        caseYear={caseYear}
        affirmNumber={affirmNumber}
        deponentName={deponentName}
        date={date}
        partyName={partyName}
        className="top-right"
      />
      <div>
        <FullHeading />
        {caseType} NO. {caseDigit} OF {caseYear}
      </div>
      <DisplayParties plaintiffs={plaintiffs} defendants={defendants} />
      <div className="affirm-box">
        {affirmNumber} AFFIRMATION OF {deponentName.toUpperCase()}
      </div>
    </div>
  )
}
