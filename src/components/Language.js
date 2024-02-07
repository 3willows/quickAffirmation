import React from "react"
import { useAppContext } from "./AppContext"

export function Language({ language, setLanguage }) {
  const { dispatch } = useAppContext()
  return (
    <div className="full-width-flexbox">
      <select
        value={language}
        onChange={(e) => {
          dispatch({ type: "SET_LANGUAGE", payload: e.target.value })
        }}
      >
        <option value="English">語言</option>
        <option value="English">English</option>
        <option value="Chinese">中文</option>
      </select>
    </div>
  )
}
