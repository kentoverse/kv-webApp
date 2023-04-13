
import Image from "next/image";
import { usePokemon } from "../../../libs/store/PokemonContext";
export { getServerSideProps } from "../../../libs/store/PokemonContext";


export default function Pokedex() {

    const { pokemon, filter, setFilter } = usePokemon();

    console.log('pokemon list - ', pokemon);

    return (
        <>
            <h2>Welcome to Pokedex!</h2>
            <div>
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className={"bg-black text-white"}
                />
            </div>
            <div className="grid grid-cols-4 md:grid-cols-2 gap-2 mt-5">
                {pokemon.map((p) => (
                    <div className="grid bg-pink-100">
                        <Image
                            alt={p.name}
                            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${p.image}`}
                            width={50}
                            height={50}
                        />
                        <p>{p.name}</p>
                    </div>

                ))}
            </div>


        </>

    );
}