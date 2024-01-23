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
          href="https://github.com/3willows/quickAffirmation/assets/111284156/3e0880f7-c3f4-4b46-ad4a-a8f001b296fd
"
          target="_blank"
          rel="noreferrer"
        >
          Video demo
        </a>
        <p>Works best on computer (not mobile) </p>
      </Modal>
    </div>
  )
}
