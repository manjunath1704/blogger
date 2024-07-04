import ResponsiveImage from "./responsive-image";
type PostCardProps = {
  thumbnail: string;
  category: string;
  title: string;
  description: string;
  linkToPost: string;
  authorAvatar:string;
  authorName:string;
  date:string;
};

const PostCard: React.FC<PostCardProps> = ({
  thumbnail,
  category,
  title,
  description,
  linkToPost,
  authorAvatar,
  authorName,
  date
}) => {
  return (
    <article className="rounded-lg p-2 border">
      <figure className="relative">
        <div className="h-52 lg:h-72 w-full relative rounded-lg overflow-hidden">
          <ResponsiveImage path={thumbnail} alternateText={title} />
        </div>
       
      </figure>
      {category && (
            <span className="bg-violet-600 inline-block rounded-lg py-1 px-2 text-xs text-white mt-3">
              {category}
            </span>
          )}
      <h4 className="text-base lg:text-lg font-semibold my-2">{title}</h4>
      <p className="text-sm">{description}</p>
      <div className="flex mt-3 items-center gap-4">
            {authorAvatar && (
              <div className="h-8 w-8 rounded-full overflow-hidden relative">
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
  );
};
export default PostCard;
