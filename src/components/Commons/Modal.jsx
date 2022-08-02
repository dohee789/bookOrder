import React from 'react'
import ReactDOM from 'react-dom'
import calsses from './Modal.module.css'

const Background = (props) => {
    return <div className={calsses.background} onClick={props.onClose}/>
}

const ModalWindow = (props) => {
    return (
        <div className={calsses.modal}>
            <div className={calsses.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('modal-window');

const Modal = (props) => {

  return (
    <>
    {ReactDOM.createPortal(<Background onClose={props.onClose}/>, portalElement)}
    {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </>
    )
}

export default Modal