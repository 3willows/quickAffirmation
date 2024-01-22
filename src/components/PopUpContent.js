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
        <p><strong>Quick Affirmation</strong></p>
        <p className="">
          {" "}
          Enter data once and it appears everywhere needed. 
        </p>
      </Modal>
    </div>
  )
}
