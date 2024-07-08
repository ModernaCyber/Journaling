import express from 'express';
import {
  getAllJournals,
  getJournalById,
  createJournal,
  updateJournal,
  deleteJournal,
} from '../controllers/journalController';

const router = express.Router();

// Define routes
router.get('/', getAllJournals);
router.get('/:id', getJournalById);
router.post('/', createJournal);
router.put('/:id', updateJournal);
router.delete('/:id', deleteJournal);

export default router;
