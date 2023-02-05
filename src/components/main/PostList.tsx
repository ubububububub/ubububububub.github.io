import React, { FunctionComponent } from 'react';
import PostItem from 'components/main/PostItem';
import { PostListItemType } from 'types/PostItem.types';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

type PostListProps = {
  posts: PostListItemType[];
};

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  const { containerRef, postList } = useInfiniteScroll(posts);

  return (
    <div className="p-4" ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </div>
  );
};

export default PostList;
