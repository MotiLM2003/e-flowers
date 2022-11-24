// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import api from '../../../apis/serverAPI';
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = req.body;
  console.log(user)
  try {
    const { data } = await api.post('/users', JSON.stringify(user));
    console.log(data);
  } catch (err: any) {
    res.status(err.statusCode).json({ name: 'John Doe' });
  }
}
