const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const drugsControllers = require("./controllers/drugsControllers");
const userControllers = require("./controllers/userControllers");
const articleControllers = require("./controllers/articleControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// Route for drugs
router.get("/drugs", drugsControllers.browse);
router.get("/drugs/:id", drugsControllers.read);
router.put("/drugs/:id", drugsControllers.edit);
router.post("/drugs", drugsControllers.add);
router.delete("/drugs/:id", drugsControllers.destroy);

// Route for user
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

// Route for article
router.get("/articles", articleControllers.browse);
router.get("/articles/:id", articleControllers.read);
router.put("/articles/:id", articleControllers.edit);
router.post("/articles", articleControllers.add);
router.delete("/articles/:id", articleControllers.destroy);

module.exports = router;
