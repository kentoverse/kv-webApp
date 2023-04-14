
import Image from "next/image";
import { usePokemon } from "../../../libs/store/PokemonContext";
import { DarkToggele } from "./test";
export { getServerSideProps } from "../../../libs/store/PokemonContext";


export default function Pokedex() {

    const { pokemon, filter, setFilter } = usePokemon();

    console.log('pokemon list - ', pokemon);

    return (
        <>
            <div className="h-[100vh] bg-slate-200 px-6 py-3">

            <h1 className="text-3xl font-bold underline text-black dark:text-white">
                Hello world!
            </h1>
            <DarkToggele/>

            <div className="mt-3">
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className={"bg-black text-white rounded-md px-3 border-l-gray-600"}
                />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-5">
                {pokemon.map((p) => (
                    <div className="grid bg-pink-100 dark:bg-slate-300">
                        <Image
                            alt={p.name}
                            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${p.image}`}
                            width={30}
                            height={30}
                        />
                        <p>{p.name}</p>
                    </div>

                ))}
            </div>
            </div>
        </>
    );
}