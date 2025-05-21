// src/App.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryModal from "./components/CategoryModal";
import ImageGrid from "./components/ImageGrid";
import ImageModal from "./components/ImageModal";

import {
  fetchImages,
  setCategory,
  setSort,
  setPage,
  openModal,
  closeModal,
  setSelectedImage,
} from "./redux/imageSlice";

const CATEGORIES = [
  "fashion",
  "nature",
  "backgrounds",
  "science",
  "education",
  "people",
  "feelings",
  "religion",
  "health",
  "places",
  "animals",
  "industry",
  "food",
  "computer",
  "sports",
  "transportation",
  "travel",
  "buildings",
  "business",
  "music",
];

function App() {
  const dispatch = useDispatch();
  const { images, category, sort, page, selectedImage, isModalOpen } =
    useSelector((state) => state.images);

  // Fetch images when filters change
  useEffect(() => {
    dispatch(fetchImages());
  }, [category, sort, page, dispatch]);

  // Handlers
  const handleCategorySelect = (cat) => {
    dispatch(setCategory(cat));
    dispatch(closeModal());
  };

  return (
    <div>
      {/* Pagination and Category Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button onClick={() => dispatch(setPage(Math.max(1, page - 1)))}>
          Prev
        </button>

        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <button onClick={() => dispatch(openModal())}>Select Category</button>
        </div>

        <button onClick={() => dispatch(setPage(page + 1))}>Next</button>
      </div>

      {/* Modal for selecting category */}
      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => dispatch(closeModal())}
        onSelectCategory={handleCategorySelect}
        categories={CATEGORIES}
      />

      {/* Sort Dropdown */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <label>
          Sort by:
          <select
            value={sort}
            onChange={(e) => dispatch(setSort(e.target.value))}
            style={{ marginLeft: "5px" }}
          >
            <option value="">None</option>
            <option value="id">ID</option>
            <option value="date">Date</option>
          </select>
        </label>
      </div>
      {/* Image Grid */}
      <ImageGrid
        images={images}
        onImageClick={(img) => dispatch(setSelectedImage(img))}
      />

      {/* Image Detail Modal */}
      <ImageModal />
    </div>
  );
}

export default App;
