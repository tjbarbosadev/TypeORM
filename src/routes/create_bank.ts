import express from 'express';
import { Banker } from '../entities/Banker';

const router = express.Router();

router.post('/api/banker', async (req, res) => {
  const { firstName, middleName, lastName, email, cardNumber, employeeNumber } = req.body;
  const banker = Banker.create({
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    card_number: cardNumber,
    employee_number: employeeNumber,
    email,
  });

  await banker.save();
  return res.json(banker);
});

export { router as createBankerRouter };
