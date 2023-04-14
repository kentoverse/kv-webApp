



export function CardGroupRow({
    fontSans,
    fontMono,
    theme,
    hide,
}: {
    fontSans: string,
    fontMono: string,
    theme: string,
    hide: string
}) {

    // lg:mb-0 lg:grid-cols-4 lg:text-left text-center
return (
<>
            <div className={`${hide === 'test' ? 'hidden' : ''} ${theme} ${fontSans} ${fontMono}
                grid grid-cols-1 gap-1 px-2 m-4 justify-center
                sm:grid-cols-3 md:gap-3 sm:px-10 md:px-20 lg:px-32
            `}>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"

                    className="group rounded-lg px-5 py-4 transition-colors
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
                    md:pb-20 border-lime-400 border-2 bg-skin-button-accent-muted
                    "
                >
                    <h2 className={`${true} font-sans font-semibold text-skin-inverted mb-3 text-2xl`}>
                        Docs{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>

                    <p className={`${true} font-sans m-0 max-w-[30ch] text-sm opacity-70 text-skin-inverted`}>
                        Find in-depth information about Next.js features and API.
                    </p>

                </a>

                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"

                    className="group rounded-lg px-5 py-4 transition-colors
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
                    border-lime-400 border-2 bg-skin-button-accent-muted
                    "
                 >
                    <h2 className={`${true} font-sans mb-3 text-2xl font-semibold text-skin-inverted`}>
                        Learn{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>

                    <p className={`${true} font-sans m-0 max-w-[30ch] text-sm opacity-70 text-skin-inverted`}>
                        Learn about Next.js in an interactive course with&nbsp;quizzes!
                    </p>
                </a>

                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"

                    className="group rounded-lg px-5 py-4 transition-colors
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
                     border-lime-400 border-2 bg-skin-button-accent-muted"
                >
                    <h2 className={`${true} font-sans mb-3 text-2xl font-semibold text-skin-inverted `}>
                        Templates{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`${true} font-sans m-0 max-w-[30ch] text-sm opacity-70 text-skin-inverted`}
                    >
                        Discover and deploy boilerplate example Next.js&nbsp;projects.
                    </p>
                </a>

                {/* <a
                    href="#"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors
                    hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                        <h2 className={`${true} font-sans mb-3 text-2xl font-semibold`}>
                        Deploy{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                        </h2>
                        <p className={`${true} font-sans m-0 max-w-[30ch] text-sm opacity-50`}
                        >
                        Instantly deploy your Next.js site to a shareable URL with Vercel.
                        </p>
                </a> */}
            </div>
        </>
    )
}

