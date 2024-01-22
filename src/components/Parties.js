import { useState } from "react"
import { DisplayParties } from "./Party&DisplayParties"

export function Parties({
  plaintiffs,
  defendants,
  addPlaintiffs,
  addDefendants,
  removeParty,
}) {
  const [newParty, setNewParty] = useState({ name: "" })
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
    setNewParty({ name: "" })
  }

  const handleRemoveParty = (e) => {
    e.preventDefault()
    removeParty(side, toRemove)
  }

  return (
    <div className="go-left">
      <DisplayParties plaintiffs={plaintiffs} defendants={defendants} />
      <div className="flex-outside">
        <div className="flex-box ">
          <form onSubmit={handleAddParty}>
            <button onClick={() => setSide("P")}> Add P </button>
            <input type="text" onChange={handleInputChange}></input>
          </form>
          <form onSubmit={handleRemoveParty}>
            <button onClick={() => setSide("P")}> Delete P </button>
            <input
              type="text"
              onChange={(e) => setToRemove(e.target.value)}
            ></input>
          </form>
        </div>
        <div style={{ flex: '0 0 33.33%' }}></div>

        <div className="flex-box ">
          <form onSubmit={handleAddParty} onChange={() => setSide("D")}>
            <button onClick={() => setSide("D")}> Add D </button>
            <input type="text" onChange={handleInputChange}></input>
          </form>
          <form onSubmit={handleRemoveParty}>
            <button onClick={() => setSide("D")}> Delete D </button>
            <input
              type="text"
              onChange={(e) => setToRemove(e.target.value)}
            ></input>
          </form>
        </div>
      </div>
    </div>
  )
}
