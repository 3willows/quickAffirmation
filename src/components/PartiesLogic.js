import { useState } from "react"
import { AddParty, RemoveParty } from "./PartiesAddRemove"
import { useAppContext } from "./AppContext"

export function Parties({
  plaintiffs,
  defendants,
  // setPlaintiffs,
  // setDefendants,
  children,
  language,
}) {
  const { dispatch } = useAppContext()
  const parties = [
    { name: "SELECT PARTY", key: "SELECT PARTY" },
    ...plaintiffs,
    ...defendants,
  ]
  const [side, setSide] = useState("P")
  const [newParty, setNewParty] = useState({ name: "" })
  const [toRemove, setToRemove] = useState("")

  const handleInputChange = (e) => {
    setNewParty({ name: e.target.value, key: e.target.value })
  }

  const handleAddParty = (e) => {
    e.preventDefault()
    if (!newParty || !newParty.name) {
      return
    }
    if (parties.some((obj) => obj.name === newParty.name)) return
    if (parties.some((obj) => obj.name.toUpperCase() === newParty.name)) return
    side === "P" && dispatch({
      type: "ADD_P",
      payload:newParty 
    })
    side === "D" && dispatch({
      type: "ADD_D",
      payload:newParty 
    })
    setNewParty({ name: "", key: "" })
  }

  // function removeParty(toRemove) {
  //   setPlaintiffs((parties) =>
  //     parties.filter((party) => party.name !== toRemove)
  //   )
  //   setDefendants((parties) =>
  //     parties.filter((party) => party.name !== toRemove)
  //   )
  // }

  // const handleRemoveParty = (e) => {
  //   e.preventDefault()
  //   removeParty(toRemove)
  // }

  return (
    <div className="go-left">
      {children}
      <div className="flex-outside">
        <AddParty
          partyType="P"
          {...{ handleAddParty, side, setSide, handleInputChange, newParty }}
        />

        {/* <RemoveParty
          {...{ toRemove, setToRemove, parties, handleRemoveParty, language }}
        /> */}

        <AddParty
          partyType="D"
          {...{ handleAddParty, side, setSide, handleInputChange, newParty }}
        />
      </div>
    </div>
  )
}
