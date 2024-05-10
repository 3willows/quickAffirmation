import React, { useState } from "react"

export function ToggleButtons({ inputOpen, setInputOpen }) {
  function toggleInputOpen(inputOpen) {
    setInputOpen((inputOpen) => !inputOpen)
    scrollToTop()
  }

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    })
  }

  window.addEventListener("scroll", toggleVisible)
  return (
    <div>
      <button className="large-button" onClick={toggleInputOpen}>
        {inputOpen ? `OUTPUT` : `REVISE`}
      </button>
    </div>
  )
}
