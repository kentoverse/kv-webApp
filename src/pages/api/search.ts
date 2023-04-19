import pokemon from '@/data/pokemon.json';
import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse): void {

    const filter: RegExp = req.query.q ? new RegExp(req.query.q.toString(), "i") : /.*/;
    
    res.status(200);
    res.setHeader('Content-Type', 'application/json');

    res.end(
        JSON.stringify(
          pokemon
            .filter(({ name: { english } }) => english.match(filter))
            .slice(0, 18)
        )
      );
};


    // res.send(
    //     JSON.stringify(
    //         pokemon?.filter(({ name: { english } }) => english.toLowerCase().includes(filter.toString().toLowerCase()))
    //     )
    //   );