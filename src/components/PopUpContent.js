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
          Enter data once and it appears in all the places needed (e.g.
          endorsement and backsheet).
        </p>
      </Modal>
    </div>
  )
}
