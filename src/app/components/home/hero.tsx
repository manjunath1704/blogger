import Image from "next/image";
import Container from "../ui/container";
import ResponsiveImage from "../ui/responsive-image";

type HeroProps = {
  title: string;
  backgroundImage: string;
  category: string;
  authorName: string;
  authorAvatar: string;
  date: string;
};
const Hero: React.FC<HeroProps> = ({
  title,
  backgroundImage,
  category,
  authorName,
  authorAvatar,
  date,
}) => {
  return (
    <header className="mt-10 mb-20">
      <Container className="relative">
        <div className="h-[350px] lg:h-[500px] rounded-xl relative overflow-hidden">
          {backgroundImage ? (
            <ResponsiveImage path={backgroundImage} alternateText={title} />
          ) : (
            <ResponsiveImage path={backgroundImage} alternateText={title} />
          )}
        </div>
        <article className="bg-white p-5 rounded-lg shadow-lg w-11/12 lg:w-2/5 absolute bottom-[-16%] left-[5%]">
          {category && (
            <span className="bg-violet-600 inline-block rounded-lg py-1 px-2 text-xs text-white mb-3">
              {category}
            </span>
          )}

          <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">{title}</h1>
          <div className="flex mt-3 items-center gap-4">
            {authorAvatar && (
              <div className="h-8 lg:h-12 w-8 lg:w-12 rounded-full overflow-hidden relative">
                <ResponsiveImage
                  path={authorAvatar}
                  alternateText={authorName}
                />
              </div>
            )}
            {authorName && (
              <span className="text-xs text-gray-400">{authorName}</span>
            )}
            {date && <span className="text-xs text-gray-400">{date}</span>}
          </div>
        </article>
      </Container>
    </header>
  );
};

export default Hero;
