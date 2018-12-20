import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root')

const Modal = ({ children, el }) => {
  useEffect(() => {
    modalRoot.appendChild(el)

    return () => {
      modalRoot.removeChild(el)
    }
  }, [])

  return (
    createPortal(children, el)
  )
}

export default Modal
