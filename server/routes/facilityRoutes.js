const express = require("express");
const router = express.Router();
const facilityController = require("../controllers/facilityController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const multer = require("multer");
const cloudinary = require("../utils/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");



const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", 
    allowed_formats: ["jpeg", "png", "jpg"], 
  },
});

const upload = multer({ storage });


router.get("/", facilityController.getFacilities);
router.post(
  "/add-facility",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("image"), 
  facilityController.addFacility
);
router.delete(
  "/delete-facility/:id",
  authMiddleware,
  roleMiddleware("admin"),
  facilityController.deleteFacility
);
router.put(
  "/update-facility/:id",
  authMiddleware,
  roleMiddleware("admin"),
  facilityController.updateFacility
);
router.get("/:id", facilityController.getFacility);

module.exports = router;
