import React, { useState } from "react"


export function Language({ language, setLanguage }) {
  return (
    <div className="go-right">
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="English">語言</option>
        <option value="English">English</option>
        <option value="Chinese">中文</option>
      </select>
    </div>
  )
}
