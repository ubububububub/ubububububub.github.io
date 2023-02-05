import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Template from 'components/common/Template';
import PostContent from 'components/post/PostContent';
import { PostFrontmatterType } from 'types/PostItem.types';

export type PostPageItemType = {
  node: {
    html: string;
    frontmatter: PostFrontmatterType;
  };
};

type PostTemplateProps = {
  data: {
    site: {
      siteMetadata: {
        imageUrl: string;
      };
    };
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
  location: {
    href: string;
  };
};

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    site: {
      siteMetadata: { imageUrl },
    },
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const {
    node: {
      html,
      frontmatter: { title, summary, date },
    },
  } = edges[0];

  return (
    <Template
      title={title}
      description={summary}
      siteUrl={href}
      imageUrl={imageUrl}
    >
      <div className="p-4 lg:p-10">
        <div className="pb-2 border-b-2 border-light__bar dark:border-bar">
          <h2 className="mt-10 text-3xl font-bold">{title}</h2>
          <div className="mt-4 mb-2 flex space-x-2 divide-x  divide-light__bar dark:divide-bar">
            <strong className="font-normal">ubububububub</strong>
            <time className="pl-2">{date}</time>
          </div>
        </div>
        <PostContent html={html} />
      </div>
    </Template>
  );
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    site {
      siteMetadata {
        imageUrl
      }
    }
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
          }
        }
      }
    }
  }
`;
