import { GetServerSideProps } from "next";

interface Props {
  pokemon: any;
}

function PokemonDetails({ pokemon }: Props) {
  return (
    <div>
   
      <ul>
        {pokemon.map((data: any) => (

          <li key={data.id}>
            {data.name}
            {data.image}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default PokemonDetails;