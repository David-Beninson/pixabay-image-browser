// Displays details of the selected image in a modal using Redux
import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedImage } from "../redux/imageSlice";

const ImageModal = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.images.selectedImage);

  return (
    <Modal
      isOpen={!!selectedImage}
      onRequestClose={() => dispatch(clearSelectedImage())}
      contentLabel="Image Details"
      style={{
        content: {
          maxWidth: "500px",
          margin: "auto",
          padding: "20px",
        },
      }}
    >
      {selectedImage && (
        <div>
          <h2>Image Details</h2>
          <img
            src={selectedImage.largeImageURL}
            alt={selectedImage.tags}
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          />
          <p>
            <strong>Tags:</strong> {selectedImage.tags}
          </p>
          <p>
            <strong>Views:</strong> {selectedImage.views}
          </p>
          <p>
            <strong>Downloads:</strong> {selectedImage.downloads}
          </p>
          <p>
            <strong>Collections:</strong> {selectedImage.collections}
          </p>
          <button onClick={() => dispatch(clearSelectedImage())}>Close</button>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
