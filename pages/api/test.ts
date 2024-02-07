import type { NextApiRequest, NextApiResponse } from 'next'
import sqlite from 'sqlite3'


type ResponseData = {
  message: string
}

console.log(process.__dirname)
const db = new sqlite.Database('./demo.db');

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  db.all('SELECT * FROM users', [], (err, users) => {
    res.status(200).json({ message: 'Hello from Next.js!', users: users })
  });
}