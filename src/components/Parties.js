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
    removeParty(toRemove.toUpperCase())
    setNewParty({ name: "" })
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
        </div>

        <div className="flex-box ">
          <form onSubmit={handleRemoveParty}>
            <button> Delete </button>
            <input
              type="text"
              onChange={(e) => setToRemove(e.target.value.toUpperCase())}
              value={toRemove}
            ></input>
          </form>{" "}
        </div>

        <div className="flex-box ">
          <form onSubmit={handleAddParty} onChange={() => setSide("D")}>
            <button> Add D </button>
            <input
              type="text"
              value={side === "D" ? newParty.name : ""}
              onChange={handleInputChange}
            ></input>
          </form>{" "}
        </div>
      </div>
    </div>
  )
}
