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
          href="https://github.com/3willows/quickAffirmation/assets/111284156/e5ecf2d4-ce2e-4a02-be6e-82f6c30d6065

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
