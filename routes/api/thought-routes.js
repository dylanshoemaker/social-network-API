const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  addReaction,
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

router
  .route('/:id')
  .get(getThoughtById);

router
  .route('/:thoughtId/reactions')
  .post(addReaction);



module.exports = router;
