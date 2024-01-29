export function Backsheet({ date, partyName, language, setLanguage, children }) {
  return (
    <>
      {children}
      <div className="backsheet-outside">
        <div className="backsheet-box"></div>
        <div className="backsheet-box">
          <p>
            {language === "Chinese" ? <>誓詞日期：</> : <> Affirmed on </>}
            {date}
          </p>
          <p> {language === "Chinese" ? <>存檔日期：</> : <> Filed on </>}</p>
          <p>
            {language === "Chinese" ? (
              <>這份誓詞是為</>
            ) : (
              <>This affirmation is filed on behalf of the</>
            )}
            {partyName}
            {language === "Chinese" ? <>送交存檔的。</> : <>. </>}
          </p>
        </div>
        <div className="backsheet-box"></div>
      </div>
      <p></p> <p></p> <p></p> <p>[Firm name]</p>
      <p>
        {language === "Chinese" ? (
          <>{partyName}的代表律師</>
        ) : (
          <> Solicitors for {partyName}</>
        )}{" "}
      </p>
      <p>[Firm address]</p>
      <p>[Firm Phone & Fax No]</p>
      <p>[Client reference]</p>
    </>
  )
}
