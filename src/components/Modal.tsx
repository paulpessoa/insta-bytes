import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imgSrc: string;
    caption: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imgSrc, caption }) => {
    if (!isOpen) return null;

    return (
        <div
            className="modal"
            style={{ display: 'block', position: 'fixed', zIndex: 1, left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.4)' }}
            onClick={onClose}
        >
            <span className="close" onClick={onClose} style={{ color: 'white', float: 'right', fontSize: '28px', fontWeight: 'bold', cursor: 'pointer' }}>&times;</span>
            <img alt='text-alt' id="modal-img" src={imgSrc} style={{ margin: 'auto', display: 'block', width: '80%', maxWidth: '700px' }} />
            <div id="caption" style={{ margin: 'auto', display: 'block', width: '80%', maxWidth: '700px', textAlign: 'center', color: 'white', padding: '10px 0', height: '150px' }}>
                <p>{caption}</p>
            </div>
        </div>
    );
};

export default Modal;

