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
  affirmNumber: "1st",
  deponentName: "[Deponent]",
  partyName: "Plaintiff",
  date: formattedDate,
  plaintiffs: initialPs,
  defendants: initialDs,
  inputOpen: true,
}

const AppContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, language: action.payload }
    case "SET_COURT":
      return { ...state, court: action.payload }
    case "SET_CASETYPE":
      return { ...state, caseType: action.payload }
    case "SET_CASEDIGIT":
      return { ...state, caseDigit: action.payload }
    case "SET_CASEYEAR":
      return { ...state, caseYear: action.payload }

    case "SET_AFFIRMNO":
      return { ...state, affirmNumber: action.payload }
    case "SET_DEPONENTNAME":
      return { ...state, deponentName: action.payload }
    case "SET_PARTYNAME":
      return { ...state, partyName: action.payload }
    case "SET_DATE":
      return { ...state, date: action.payload }


    case "SET_PLAINTIFF":
      return { ...state, plaintiffs: [...state.plaintiffs, action.payload] }

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
