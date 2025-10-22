import React from "react";

 const Modal = ({ isVisible, onClose, children, videourl }) => {
      if(!isVisible) return null;

      const handleClose = (e) => {
        if ( e.target.id === 'wrapper' )  onClose();
      }

      return (
      <div className="modalBackdrop" id="wrapper" onClick={handleClose}>
          <div className="modalContent">
            <button className="cerrarstyle" onClick={() => onClose()}> X </button>
            <div className="iframe-16-9">
                <iframe  title="Reproductor"  src={videourl} frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          {children}
          </div>
      </div>
  );
};

export default Modal;