export function CourtHeadingInput({ court, setCourt, language }) {
  return language === "Chinese" ? (
    <div>
      <p>香港特別行政區</p>
      <p>高等法院原訟法庭</p>
    </div>
  ) : (
    <div>
      <p>IN THE HIGH COURT OF THE</p>
      <p>HONG KONG SPECIAL ADMINISTRATIVE REGION</p>
      <p>COURT OF FIRST INSTANCE</p>
    </div>
  )
}
export function CourtHeadingOuput({ language }) {
  return language === "Chinese" ? (
    <div>
      <p>香港特別行政區</p>
      <p>高等法院原訟法庭</p>
    </div>
  ) : (
    <div>
      <p>IN THE HIGH COURT OF THE</p>
      <p>HONG KONG SPECIAL ADMINISTRATIVE REGION</p>
      <p>COURT OF FIRST INSTANCE</p>
    </div>
  )
}
