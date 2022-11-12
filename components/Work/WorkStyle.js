export const WorkImage = ({ children }) => <figure className="object-cover w-full h-60 hover:scale-150">{children}</figure>

export const WorkSecondImage = ({ children }) => <figure className="hidden -mt-40 md:inline w-36 justify-self-center">{children}</figure>

export const WorkArticle = ({ children }) => <article className="grid grid-cols-3 gap-4">{children}</article>

export const WorkContent = ({ children }) => <div className="col-span-3 sm:col-span-2">{children}</div>

export const WorkTitle = ({ customClass, children }) => <h3 className={`${customClass} text-3xl font-medium md:text-5xl tracking-[-0.05em] cursor-pointer `}>{children}</h3 >

export const WorkSubtitle = ({ children }) => <h4 className="mt-2 text-base">{children}</h4>

export const WorkDescription = ({ children }) => <p className="mt-2 mb-6 text-xl leading-5 md:text-2xl tracking-[-0.05em] max-w-[90%] md:max-w-lg md:leading-[1.8rem] opacity-90">{children}</p>

export const WorkCTA = ({ children }) => <div className="underline hover:font-medium">{children}</div>
