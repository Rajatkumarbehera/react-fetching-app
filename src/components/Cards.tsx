import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import { Loader } from "./Loader";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface CardsProps {
  posts: Post[];
  fetchData: () => void;
  hasMore: boolean;
  loading: boolean;
  error: boolean;
}

export const Cards = ({
  posts,
  fetchData,
  hasMore,
  loading,
  error,
}: CardsProps) => {
  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchData}
        hasMore={hasMore}
        loader={loading && <Loader />}
        scrollThreshold={0.9}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5 lg:mx-20">
          {posts.map(({ id, title, body }) => (
            <Link to={`/item/${id}`} key={id} state={{ id, title, body }}>
              <Card title={title} body={body} star={false} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
      {!loading && posts.length === 0 && !error && (
        <p className="text-center text-gray-500">No results found.</p>
      )}
    </>
  );
};
