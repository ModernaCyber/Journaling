import { Request, Response } from 'express';
import { Journal } from '../sequelize/models/Journal';

// GET /api/journals
export const getAllJournals = async (req: Request, res: Response): Promise<void> => {
  try {
    const journals = await Journal.findAll();
    res.status(200).json(journals);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// GET /api/journals/:id
export const getJournalById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const journal = await Journal.findByPk(id);
    if (!journal) {
      res.status(404).json({ error: 'Journal not found' });
      return;
    }
    res.status(200).json(journal);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST /api/journals
export const createJournal = async (req: Request, res: Response): Promise<void> => {
  const { title, content } = req.body;
  try {
    const newJournal = await Journal.create({ title, content });
    res.status(201).json(newJournal);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// PUT /api/journals/:id
export const updateJournal = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const journal = await Journal.findByPk(id);
    if (!journal) {
      res.status(404).json({ error: 'Journal not found' });
      return;
    }
    journal.title = title;
    journal.content = content;
    await journal.save();
    res.status(200).json(journal);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// DELETE /api/journals/:id
export const deleteJournal = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const journal = await Journal.findByPk(id);
    if (!journal) {
      res.status(404).json({ error: 'Journal not found' });
      return;
    }
    await journal.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
