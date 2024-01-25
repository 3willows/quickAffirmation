import { useState } from "react"
import { AddParty, RemoveParty } from "./AddRemoveParty"

export function Parties({
  plaintiffs,
  defendants,
  setPlaintiffs,
  setDefendants,
  children,
  language,
}) {
  const parties = [{ name: "SELECT PARTY" }, ...plaintiffs, ...defendants]
  const [side, setSide] = useState("P")
  const [newParty, setNewParty] = useState({ name: "" })
  const [toRemove, setToRemove] = useState("")

  const handleInputChange = (e) => {
    language === "Chinese"
      ? setNewParty({ name: e.target.value })
      : setNewParty({ name: e.target.value.toUpperCase() })
  }

  const handleAddParty = (e) => {
    e.preventDefault()
    if (!newParty || !newParty.name) {
      return
    }
    if (parties.some((obj) => obj.name === newParty.name)) return
    side === "P" && setPlaintiffs((plaintiffs) => [...plaintiffs, newParty])
    side === "D" && setDefendants((defendants) => [...defendants, newParty])
    setNewParty({ name: "" })
  }

  function removeParty(toRemove) {
    setPlaintiffs((parties) =>
      parties.filter((party) => party.name !== toRemove)
    )
    setDefendants((parties) =>
      parties.filter((party) => party.name !== toRemove)
    )
  }
  const handleRemoveParty = (e) => {
    e.preventDefault()
    removeParty(toRemove.toUpperCase())
  }

  return (
    <div className="go-left">
      {children}
      <div className="flex-outside">
        <AddParty
          partyType="P"
          {...{ handleAddParty, side, setSide, handleInputChange, newParty }}
        />

        <RemoveParty
          {...{ toRemove, setToRemove, parties, handleRemoveParty }}
        />

        <AddParty
          partyType="D"
          {...{ handleAddParty, side, setSide, handleInputChange, newParty }}
        />
      </div>
    </div>
  )
}
