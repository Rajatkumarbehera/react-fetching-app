import { useCallback, useEffect, useState } from "react";
import { apiDetails } from "../apis/api";
import { Input } from "../components/Input";
import { Cards } from "../components/Cards";
import { useDebounce } from "../hooks/useDebounce";
import { Loader } from "../components/Loader";
import { toast, ToastContainer } from "react-toastify";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const debouncedQuery = useDebounce(query, 500);
  const apiUrl = import.meta.env.VITE_API_URL;

  const getAllPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(
        `${apiUrl}${apiDetails.posts}?_limit=10&_page=${page}${
          debouncedQuery && `&q=${debouncedQuery}`
        }`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setHasMore(data.length === 10);
      setPosts((prev) => (page === 1 ? data : [...prev, ...data]));
    } catch (error) {
      console.error("Fetch error:", error);
      setError(true);
      toast.error("Failed to fetch posts.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
      });
    } finally {
      setLoading(false);
    }
  }, [apiUrl, debouncedQuery, page]);

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const fetchMorePosts = () => {
    if (hasMore) setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full">
      <div className="flex justify-center h-30 lg:h-50 sticky top-0 z-50 bg-white p-4">
        <Input query={query} onQueryChange={setQuery} />
      </div>
      {loading && page === 1 ? (
        <Loader />
      ) : (
        <Cards
          posts={posts}
          fetchData={fetchMorePosts}
          hasMore={hasMore}
          loading={loading}
          error={error}
        />
      )}
      <ToastContainer />
    </div>
  );
};
