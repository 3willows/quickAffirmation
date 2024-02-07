import React, { createContext, useReducer, useContext } from "react"
import { formattedDate } from "./helpers/TodayDate"

const initialPs = []
const initialDs = []

const initialState = {
  language: "English",
  court: "HC",
  caseType: "A",
  caseDigit: "#",
  caseYear: "2024",
  plaintiffs: initialPs,
  defendants: initialDs,
  affirmNumber: "1st",
  deponentName: "[Deponent]",
  partyName: "Plaintiff",
  date: formattedDate,
  inputOpen: true,
}

const AppContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, language: action.payload }
    case "SET_COURT":
      return { ...state, court: action.payload }
    case "SET_PLAINTIFF":
      return { ...state, plaintiffs: [...state.plaintiffs, action.payload] }
    case "SET_DATE":
      return { ...state, date: action.payload }
    case "SET_INPUT_OPEN":
      return { ...state, inputOpen: action.payload }
    default:
      return state
  }
}

// Context provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use the context
const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}

export { AppProvider, useAppContext }
