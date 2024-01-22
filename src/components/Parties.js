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
    setNewParty({ name: e.target.value.toUpperCase() })
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
    removeParty(side, toRemove.toUpperCase())
  }

  return (
    <div className="go-left">
      <DisplayParties plaintiffs={plaintiffs} defendants={defendants} />

      <div className="flex-outside">
        <div className="flex-box ">
          <form onSubmit={handleAddParty} onChange={() => setSide("P")}>
            <button> Add P </button>
            <input
              type="text"
              value={side === "P" ? newParty.name : ""}
              onChange={handleInputChange}
            ></input>
          </form>

          <form onSubmit={handleRemoveParty} onChange={() => setSide("P")}>
            <button> Delete P </button>
            <input
              type="text"
              onChange={(e) => setToRemove(e.target.value.toUpperCase())}
              value={side === "P" ? toRemove : ""}
            ></input>
          </form>
        </div>

        <div style={{ flex: "0 0 33.33%" }}></div>

        <div className="flex-box ">
          <form onSubmit={handleAddParty} onChange={() => setSide("D")}>
            <button> Add D </button>
            <input
              type="text"
              value={side === "D" ? newParty.name : ""}
              onChange={handleInputChange}
            ></input>
          </form>

          <form onSubmit={handleRemoveParty} onChange={() => setSide("D")}>
            <button > Delete D </button>
            <input
              type="text"
              onChange={(e) => setToRemove(e.target.value.toUpperCase())}
              value={side === "D" ? toRemove : ""}
            ></input>
          </form>
        </div>
      </div>
    </div>
  )
}
