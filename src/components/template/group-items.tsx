
import data from '../../utils/example.json';



export function CardGroupRow({fontSans,fontMono,theme,hide,
}:{
    fontSans: string, fontMono: string, theme: string, hide: string
}){

return (
<>
    <div className={`${hide === 'test' ? 'hidden' : ''} ${theme} ${fontSans} ${fontMono}
        grid grid-cols-1 gap-1 px-2 m-4 justify-center
        sm:grid-cols-3 md:gap-3 sm:px-10 md:px-20 lg:px-32
    `}>

    { data.cards.map((card) => (
        <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            key={card.id}

            className="group rounded-lg px-5 py-4 transition-colors
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
                      md:pb-20 border-lime-400 border-[1px] bg-skin-button-accent-muted"
        >
            <h2 className={`${true} font-sans font-semibold text-skin-inverted mb-3 text-2xl`}>

                {card.title} {' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>

            <p className={`${true} font-sans m-0 max-w-[30ch] text-sm opacity-70 text-skin-inverted`}>
                {card.description}
            </p>

        </a>
    ))}

    </div>
</>
)
}

