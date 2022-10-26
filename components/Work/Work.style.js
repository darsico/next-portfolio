import tw from "twin.macro";

export const WorkImage = tw.img`object-cover w-full h-60 hover:scale-150`;

export const WorkSecondImage = tw.img` hidden -mt-40 md:inline w-36 justify-self-center`;

export const WorkArticle = tw.article`grid grid-cols-3 gap-4`;

export const WorkContent = tw.div`col-span-3 sm:col-span-2 `;

export const WorkTitle = tw.h3`text-3xl font-medium md:text-5xl tracking-[-0.05em] cursor-pointer `;

export const WorkSubtitle = tw.h4`mt-2 text-base`;

export const WorkDescription = tw.p`mt-2 mb-6 text-xl leading-5 md:text-2xl tracking-[-0.05em] max-w-[90%] md:max-w-lg md:leading-[1.8rem] opacity-90`;

export const WorkCTA = tw.a`underline hover:font-medium`;
