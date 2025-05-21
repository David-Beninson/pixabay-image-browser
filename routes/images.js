// This route handles fetching images from the Pixabay API based on a category,
// and supports optional pagination and sorting (by id or date)

const express = require("express");
const axios = require("axios");
const router = express.Router();

// Load environment variables
require("dotenv").config();

// Get the API key from .env
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;

router.get("/", async (req, res) => {
  try {
    const CATEGORY = req.query.category;
    const PAGE = req.query.page || 1;
    const PER_PAGE = req.query.perPage || 9;
    const SORT = req.query.sort; // 'id' or 'date'

    const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${CATEGORY}&image_type=photo&page=${PAGE}&per_page=${PER_PAGE}`;
    const response = await axios.get(url);

    let results = response.data.hits;

    // If sort is 'id', sort by ID ascending
    if (SORT === "id") {
      console.log("Sorting images by ID (ascending)");
      results.sort((a, b) => a.id - b.id);
    }

    // If sort is 'date', sort by date ascending
    if (SORT === "date") {
      console.log("Sorting images by date (ascending).");

      results.sort((a, b) => b._date - a._date);
    }

    res.json(results);
  } catch (error) {
    console.error("Error fetching from Pixabay:", error.message);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

module.exports = router;
