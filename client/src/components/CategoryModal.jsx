// Modal for selecting image category
import React from "react";
import Modal from "react-modal";

const CategoryModal = ({ isOpen, onClose, onSelectCategory, categories }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Select Category"
      style={{
        content: {
          width: "300px",
          margin: "auto",
          height: "fit-content",
        },
      }}
    >
      <h2>Select a Category</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((cat) => (
          <li key={cat}>
            <button
              style={{ margin: "5px 0", width: "100%" }}
              onClick={() => onSelectCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default CategoryModal;
