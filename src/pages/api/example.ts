

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  id: number,
  name: string;
  description: string;
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { 
        id: 1,
        name: 'John',
        description: 'This is the description..'
      },
      { 
        id: 2,
        name: 'Marc',
        description: 'This is the description..'
      },
      { 
        id: 3,
        name: 'Lit',
        description: 'This is the description..'
      },

    ])
}
