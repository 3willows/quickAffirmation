import React, { useState } from "react"
import Modal from "./Modal"

export const PopUpContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const isMobile = window.innerWidth <= 700

  return (
    <div className="go-left">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>
          <strong>Quick Affirmation</strong>
        </p>
        <p className=""> Enter data once and it appears everywhere needed.</p>
        {/* likely best to use the same link, users can rotate if they like */}
        {isMobile ? (
          <a
            href="https://github.com/3willows/quickAffirmation/assets/111284156/1dbe2678-772d-431d-ad68-d3f996e2e935
      "
            target="_blank"
            rel="noreferrer"
          >
            Video demo
          </a>
        ) : (
          <a
            href="https://github.com/3willows/quickAffirmation/assets/111284156/1dbe2678-772d-431d-ad68-d3f996e2e935
      
      "
            target="_blank"
            rel="noreferrer"
          >
            Video demo
          </a>
        )}
        <p> </p>
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
