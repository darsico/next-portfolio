import Image from "next/image";

const ImageBlock = ({ caption, alt, className, url }) => {
  const squareDynamicSize = parseFloat(className.replace("square-", ""));
  const squareImage = className.split("-").shift();

  return (
    <>
      {className && squareImage ? (
        <figure className="flex justify-center mx-auto">
          <Image alt={alt} src={url} width={squareDynamicSize} height={squareDynamicSize} />
        </figure>
      ) : (
        <figure style={{ position: "relative", width: "100%", paddingBottom: "50%" }}>
          <Image
            alt={alt}
            src={url}
            layout="fill"
            objectFit="contain" // Scale your image down to fit into the container
          />
        </figure>
      )}
      <figcaption className="flex justify-center text-sm text-gray-600 mb-2">
        <p>{caption}</p>
      </figcaption>
    </>
  );
};

export default ImageBlock;
