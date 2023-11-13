import { MouseEventHandler } from "react"

export function Modal(props: {
    onClose: MouseEventHandler | undefined,
     show: unknown,
}) {
  return (
    <div className="modal" onClick={props.onClose}>
      <div
      onClick={(e) => e.stopPropagation()} 
      className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal Title</h4>
        </div>
        <div className="modal-body">Modal Body</div>
        <div className="modal-footer">
          <button
            onClick={props.onClose} 
           className="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal