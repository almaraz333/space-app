export type ArticleProps = {
  title: string;
  imgUrl: string;
  description: string;
  publishedAt: string;
  url: string;
  sourceName: string;
};

export const Article: React.FC<ArticleProps> = ({
  title,
  imgUrl,
  description,
  publishedAt,
  url,
  sourceName,
}) => {
  return (
    <div className="article my-5 p-5 border-primary border-2">
      <div className="article-header">
        {
          <img
            className="image"
            alt="article"
            src={imgUrl}
            height="50%"
            width="50%"
          />
        }
        <h2 className="title mt-3 text-grey">
          <a href={url}>
            <p>{title}</p>
          </a>
        </h2>
      </div>
      <div className="content">
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="flex mt-5">
          <p className="font-bold">
            {Math.floor((Date.now() - Date.parse(publishedAt)) / 3600000)} hours
            ago
          </p>
          <span className="mx-2 text-primary">|</span>
          <p>{sourceName}</p>
        </div>
      </div>
    </div>
  );
};
