export function CourtHeadingInput({ court, setCourt, language }) {
  return language === "Chinese" ? (
    <div>
      <p>香港特別行政區</p>
      <p>
        <ForumChoice {...{ court, setCourt, language }} />
      </p>
      <p>民事司法管轄權</p>
    </div>
  ) : (
    <div>
      <p>
        IN THE <ForumChoice {...{ court, setCourt, language }} /> OF THE
      </p>
      <p>HONG KONG SPECIAL ADMINISTRATIVE REGION</p>
      {court === "HC" && <p>COURT OF FIRST INSTANCE</p>}
    </div>
  )
}
export function CourtHeadingOuput({ court, language }) {
  return language === "Chinese" ? (
    <div>
      <p>香港特別行政區</p>
      {court === "HC" && (
        <>
          <p>高等法院原訟法庭</p> <p>民事司法管轄權</p>
        </>
      )}
      {court === "DC" && (
        <>
          <p>區域法院</p>
        </>
      )}
    </div>
  ) : (
    <div>
      <p>
        IN THE {court === "HC" && <>HIGH COURT</>}
        {court === "DC" && <>DISTRICT COURT</>} OF THE
      </p>
      <p>HONG KONG SPECIAL ADMINISTRATIVE REGION</p>
      {court === "HC" && <p>COURT OF FIRST INSTANCE</p>}
    </div>
  )
}

function ForumChoice({ court, setCourt, language }) {
  function handleChangeCourt(e) {
    setCourt((prevCourt) => e.target.value)
  }
  return (
    <>
      <select value={court} onChange={(e) => handleChangeCourt(e)}>
        <option value="HC">
          {language === "Chinese" ? "高等法院原訟法庭" : "HIGH COURT"}
        </option>
        <option value="DC">
          {language === "Chinese" ? "區域法院" : "DISTRICT COURT"}
        </option>
      </select>
    </>
  )
}
