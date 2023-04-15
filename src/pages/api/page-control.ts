

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  id: number;
  page: string;
  path: string;
  theme: string;
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { 
        id: 1,
        page: 'about-us',
        path: '/about-us',
        theme: 'theme-mo'
      },
      { 
        id: 2,
        page: 'dashboard',
        path: '/dashboard',
        theme: 'theme-mo'
      },
      { 
        id: 3,
        page: 'project',
        path: 'dashboard/project',
        theme: 'theme-mo'
      },
    ])
}
