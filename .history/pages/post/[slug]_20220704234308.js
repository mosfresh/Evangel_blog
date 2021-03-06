import React from 'react';
import { useRouter } from 'next/router';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '../../components';
import { getPosts, getPostDetails } from '../../services';

const PostDetails = () => {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail/>
            <Author/>
            <CommentsForm/>
            <Comments/>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget/>
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}