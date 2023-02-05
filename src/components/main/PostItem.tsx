import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { PostFrontmatterType } from 'types/PostItem.types';

type PostItemProps = PostFrontmatterType & { link: string };

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  summary,
  link,
}) {
  return (
    <Link to={link}>
      <div className="pt-4 pb-2 border-b-2 border-light__bar dark:border-bar">
        <h2 className="mb-2 text-3xl font-bold">{title}</h2>
        <div className="mt-4 line-clamp-3">{summary}</div>
        <div className="mt-4 space-x-2 divide-x divide-light__bar dark:divide-bar">
          <strong className="font-normal">ubububububub</strong>
          <time className="pl-2">{date}</time>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
