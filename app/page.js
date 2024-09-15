"use client";
import { useEffect, useState, useRef } from 'react';
import TitleBar from "./components/cards/title-bar";
import PostCard from "./components/cards/post-card";
import { UserCardSmall } from "./components/cards/user-card";
import { LoadingSpinner, ErrorCard } from './components/common';

const fetchPosts = async () => {
  const response = await fetch('https://dummyjson.com/posts', {
    cache: 'force-cache'
  });
  const data = await response.json();
  return data.posts;
};

const fetchUser = async (userId) => {
  const response = await fetch(`https://dummyjson.com/users/${userId}`, {
    cache: 'force-cache'
  });
  const data = await response.json();
  return data;
};

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMoreLoading, setLoadMoreLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState();
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        // Check if data is in local storage
        const cachedPosts = localStorage.getItem('posts');
        const cachedUsers = localStorage.getItem('users');

        if (cachedPosts && cachedUsers) {
          const postsData = JSON.parse(cachedPosts);
          const usersData = JSON.parse(cachedUsers);

          setPosts(postsData);
          setUsers(usersData);

          const combinedData = postsData.map(post => ({
            ...post,
            user: usersData.find(user => user.id === post.userId),
          }));

          setPosts(combinedData);
          setDisplayedPosts(posts);
        } else {
          const postsData = await fetchPosts();

          const userPromises = postsData.map(post => fetchUser(post.userId));
          const usersData = await Promise.all(userPromises);

          setUsers(usersData);

          const combinedData = postsData.map(post => ({
            ...post,
            user: usersData.find(user => user.id === post.userId),
          }));

          setPosts(combinedData);

          // Save data to local storage
          localStorage.setItem('posts', JSON.stringify(postsData));
          localStorage.setItem('users', JSON.stringify(usersData));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [displayedPosts]);

  const loadMorePosts = async () => {
    setLoadMoreLoading(true);
    setTimeout(() => {
      const nextPosts = posts.slice(displayedPosts.length, displayedPosts.length + 5);
      if (nextPosts.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedPosts(prevPosts => [...prevPosts, ...nextPosts]);
      }
      setLoadMoreLoading(false);
    }, 500);
  };
  
  const topPosts = posts
    .sort((a, b) => b.reactions.likes - a.reactions.likes)
    .slice(0, 2);

  const findUser = (postId) => {
    return users.find(user => user.id === postId);
  }

  if (error) {
    return (
      <div>
        <TitleBar title="Feed" />
        <div className="max-w-screen-md ml-auto mr-auto p-8">
          <ErrorCard error={error} />
        </div>
      </div>
    )
  }

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <TitleBar title="Feed" />
      <div className="max-w-screen-md ml-auto mr-auto p-8">
        {loading === true ?
          <div className="mt-10">
            <LoadingSpinner />
          </div>
        :
          <>
            <h2 className="text-xl font-bold mb-2">Suggested posts</h2>
            {topPosts.map(post => (
              <PostCard 
                key={post.id} 
                firstName={findUser(post.userId).firstName} 
                lastName={findUser(post.userId).lastName} 
                username={findUser(post.userId).username} 
                {...post} 
              />
            ))}

            <h2 className="text-xl font-bold mb-2">Who to follow</h2>
            <div className="grid gris-cols-1 md:grid-cols-2 grid-rows-2 gap-4 mb-4">
              {users.slice(0, 4).map(user => (
                <UserCardSmall 
                  key={user.id} 
                  {...user}
                />
              ))}
            </div>

            <h2 className="text-xl font-bold mb-2">Recent</h2>
            {displayedPosts.map(post => (
              <PostCard 
                key={post.id} 
                firstName={findUser(post.userId).firstName} 
                lastName={findUser(post.userId).lastName} 
                username={findUser(post.userId).username}
              {...post} />
            ))}
            {(loadMoreLoading && hasMore) && (
              <div className="mt-6">
                <LoadingSpinner />
              </div>
            )}
            {!hasMore && (<h4 className="text-center text-lg text-slate-400 font-bold">You're all caught up!</h4>)}
            <div ref={loadMoreRef} style={{ height: '100px' }} />
          </>
        }
      </div>
    </div>
  );
}
