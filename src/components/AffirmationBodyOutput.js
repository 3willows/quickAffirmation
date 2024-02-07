import { useAppContext } from "./AppContext"

export function AffirmationBody({
  language,
  children,
}) {
  const {
    state: { deponentName , date,
      partyName}
  } = useAppContext()
  return (
    <>
      {children}
      <p className="go-left">
        {language === "Chinese" ? (
          <>本人{deponentName}現居於[地址]謹以至誠確認以下內容:-</>
        ) : (
          <>
            I, {deponentName}, of [address] do solemnly, truthfully and
            sincerely affirm and say as follows:-
          </>
        )}
      </p>
      <p></p>{" "}
      <p>
        {" "}
        {language === "Chinese" ? (
          <>[誓詞內容]</>
        ) : (
          <>[Body of Affirmation]</>
        )}{" "}
      </p>
      <p></p>{" "}
      <div className="go-left">
        <p>
          {language === "Chinese" ? (
            <> ({deponentName}簽署)</>
          ) : (
            <> Signature of {deponentName}</>
          )}
        </p>
        <p>
          {language === "Chinese" ? <>日期：</> : <> Dated this </>} {date}
        </p>
        <p>
          {language === "Chinese" ? (
            <>此項確認是於{date}在[獨立律師]面前作出。 </>
          ) : (
            <>
              {" "}
              Affirmed at [independent solicitors' office] of [address] on{" "}
              {date}.
            </>
          )}
        </p>
        <p>
          {" "}
          {language === "Chinese" ? (
            <>這份誓詞是為{partyName}送交存檔的。 </>
          ) : (
            <>This affirmation is filed on behalf of the {partyName}.</>
          )}
        </p>
      </div>
    </>
  )
}
