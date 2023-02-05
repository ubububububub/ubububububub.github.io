export type PostFrontmatterType = {
  title: string;
  date: string;
  summary: string;
};

export type PostListItemType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: PostFrontmatterType;
  };
};
