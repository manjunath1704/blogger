import Image from "next/image";
type ResponsiveImageProps = {
  path: string;
  alternateText: string;
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  path,
  alternateText,
}) => {
  return (
    <div className={"image-container"}>
      <Image src={path} layout="fill" className={"image"} alt={alternateText} />
    </div>
  );
};

export default ResponsiveImage;
