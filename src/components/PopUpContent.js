import React, { useState } from "react"
import Modal from "./Modal"

export const PopUpContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="go-left">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>
          <strong>Quick Affirmation</strong>
        </p>
        <p className=""> Enter data once and it appears everywhere needed.</p>
        <a
          href="https://github.com/3willows/quickAffirmation/assets/111284156/636ce687-03e4-4455-ba3b-cb3210b5411c

"
          target="_blank"
          rel="noreferrer"
        >
          Video demo
        </a>
        <p>Works best on computer (not mobile). </p>
        <a
          href="https://github.com/3willows/quickAffirmation
"
          target="_blank"
          rel="noreferrer"
        >
          Further Info
        </a>
      </Modal>
    </div>
  )
}
