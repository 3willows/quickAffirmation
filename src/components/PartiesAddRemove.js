export function AddParty({
  partyType,
  handleAddParty,
  side,
  setSide,
  handleInputChange,
  newParty,
}) {
  return (
    <div className="flex-box ">
      <form onSubmit={handleAddParty} onChange={() => setSide(partyType)}>
        <button> Add {partyType} </button>
        <input
          type="text"
          value={side === partyType ? newParty.name : ""}
          onChange={handleInputChange}
        ></input>
      </form>
    </div>
  )
}

export function RemoveParty({
  toRemove,
  setToRemove,
  parties,
  handleRemoveParty,
  language,
}) {
  return (
    <div className="flex-box">
      <form onSubmit={handleRemoveParty}>
        <button type="submit">Delete</button>
        <select
          value={toRemove}
          onChange={(e) => {
            setToRemove(e.target.value)
          }}
        >
          {parties.map((party) => (
            <option value={party.name}>{party.name}</option>
          ))}
        </select>
      </form>
    </div>
  )
}
