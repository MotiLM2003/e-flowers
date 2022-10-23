// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import api from '../../../apis/serverAPI';
import axios from 'axios';
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = req.body;
  console.log('here', user);
  try {
    // const { data } = await api.post('/users', JSON.stringify(user));
    // console.log(data);

    await axios.post(
      'http://ec2-3-20-223-255.us-east-2.compute.amazonaws.com:5000/api/v1/users/',
      user
    );
    // fetch(
    //   'http://ec2-3-20-223-255.us-east-2.compute.amazonaws.com:5000/api/v1/users/',
    //   {
    //     method: 'POST',
    //     body: {
    //       'password': '111111',
    //       'confirm_password': '111111',
    //       'f_name': '21321312',
    //       'l_name': '213213213',
    //       'email': 'west@siloespresso.com',
    //       'phone': '231',
    //       'settlement': '21213123',
    //       'sex': 'זכר',
    //       'accept_terms_of_service': true,
    //       'username': '123456',
    //     },
    //     headers: {
    //       'Content-Type': 'application/json',
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ name: 'John Doe' });
}
