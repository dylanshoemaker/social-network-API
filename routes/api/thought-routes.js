const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  addReaction,
  updateThought,
  removeThought,
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router
  .route('/:thoughtId/reactions')
  .post(addReaction);



module.exports = router;
