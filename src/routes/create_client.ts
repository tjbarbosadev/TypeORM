import express from 'express';
import { Client } from '../entities/Client';

const router = express.Router();

router.post('/api/client', async (req, res) => {
  const { firstName, middleName, lastName, email, cardNumber, balance } = req.body;
  const client = Client.create({
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    card_number: cardNumber,
    email,
    balance,
  });

  await client.save();
  return res.json(client);
});

export { router as createClientRouter };
