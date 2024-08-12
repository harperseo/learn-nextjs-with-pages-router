import { deleteCartItem } from '@/api';

export default async function handler(req, res) {
  const id = req.body.id;
  const { data } = await deleteCartItem(id);
  console.log('# id:', id);
  res.status(200).send(`${data.name} is deleted`);
}
