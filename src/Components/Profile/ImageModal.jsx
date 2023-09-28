import React from 'react';
import imgmodal from "../Profile/cssp/ImageModal.module.css";

function ImageModal({ imageUrl, onClose }) {
  return (
    <div className={imgmodal.modal_overlay}>
      <span className={imgmodal.close_button} onClick={onClose}>&times;</span>
      <div className={imgmodal.modal}>
        <img src={imageUrl} alt=" Poster Img" className={imgmodal.modal_image} />
      </div>
    </div>
  );
}

export default ImageModal;
 