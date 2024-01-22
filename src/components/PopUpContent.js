import React, { useState } from "react"
import Modal from "./Modal"

export const PopUpContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ul className="go-left">
          <h2>Quick Affirmation</h2>
          <li>
           Enter data once and it appears in the 4-5 required places. 
          </li>
          <li>
            This webpage is not meant for the mobile phone!
          </li>
          <li>
            Video tutorial:
            [to be done]
          </li>
        </ul>
      </Modal>
    </div>
  )
}
