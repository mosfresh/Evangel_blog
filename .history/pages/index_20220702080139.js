
import { PostCard, Categories, PostWidget } from '../components';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-black">
        <div className="lg:col-span-8 col-span-1">
          hello world
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

