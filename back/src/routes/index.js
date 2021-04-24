const {Router} = require('express');
const {
  fetchInitialData,
  depotCarAdd,
  depotCarDelete
} = require('../controllers');

const router = Router();

router.get("/", fetchInitialData);
router.post("/", depotCarAdd);
router.delete("/:id", depotCarDelete);

module.exports = router;
