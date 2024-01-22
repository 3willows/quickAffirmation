import { useState } from "react"
import { DisplayParties } from "./CommonParty"

export function Parties({
  plaintiffs,
  defendants,
  addPlaintiffs,
  addDefendants,
  removeParty,
}) {
  const [newParty, setNewParty] = useState(null)
  const [side, setSide] = useState("P")
  const [toRemove, setToRemove] = useState("")

  const handleInputChange = (e) => {
    setNewParty({ name: e.target.value })
  }

  const handleAddParty = (e) => {
    e.preventDefault()

    if (!newParty || !newParty.name) {
      return
    }
    const parties = [...plaintiffs, ...defendants]
    if (parties.some((obj) => obj.name === newParty.name)) return

    side === "P" && addPlaintiffs(newParty)
    side === "D" && addDefendants(newParty)
  }

  const handleRemoveParty = (e) => {
    e.preventDefault()
    console.log(toRemove)
    removeParty(side, toRemove)
  }

  return (
    <div className="go-left">
      <DisplayParties plaintiffs={plaintiffs} defendants={defendants} />
      <form onSubmit={handleAddParty}>
        <button onClick={() => setSide("P")}> Add Plaintiff </button>
        <input type="text" onChange={handleInputChange}></input>
      </form>
      <form onSubmit={handleRemoveParty}>
        <button onClick={() => setSide("P")}> Delete Plaintiff </button>
        <input type="text" onChange={e => setToRemove(e.target.value)}></input>
      </form>
      <form onSubmit={handleAddParty}>
        <button onClick={() => setSide("D")}> Add Defendant </button>
        <input type="text" onChange={handleInputChange}></input>
      </form>
      <form onSubmit={handleRemoveParty}>
        <button onClick={() => setSide("D")}> Delete Plaintiff </button>
        <input type="text" onChange={e => setToRemove(e.target.value)}></input>
      </form>
    </div>
  )
}
