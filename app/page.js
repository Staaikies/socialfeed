"use client";
import { useEffect, useState, useRef } from 'react';
import TitleBar from "./components/cards/title-bar";
import PostCard from "./components/cards/post-card";
import { UserCardSmall } from "./components/cards/user-card";

const fetchPosts = async () => {
  const response = await fetch('https://dummyjson.com/posts');
  const data = await response.json();
  return data.posts;
};

const fetchUser = async (userId) => {
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const data = await response.json();
  return data;
};

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const postsData = await fetchPosts();

        const userPromises = postsData.map(post => fetchUser(post.userId));
        const usersData = await Promise.all(userPromises);

        setUsers(usersData);

        const combinedData = postsData.map(post => ({
          ...post,
          user: usersData.find(user => user.id === post.userId),
        }));

        setPosts(combinedData);
      } catch (error) {
        console.error('Error fetching data:', error);
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

  const loadMorePosts = () => {
    setDisplayedPosts(prevPosts => {
      const nextPosts = posts.slice(prevPosts.length, prevPosts.length + 5);
      return [...prevPosts, ...nextPosts];
    });
  };
  
  const topPosts = posts
    .sort((a, b) => b.reactions.likes - a.reactions.likes)
    .slice(0, 2);

  const findUser = (postId) => {
    return users.find(user => user.id === postId);
  }


  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <TitleBar title="Feed" />
      
      <div className="max-w-screen-md ml-auto mr-auto p-4">
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
        <div className="grid gris-cols-1 lg:grid-cols-2 grid-rows-2 gap-4">
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
        <div ref={loadMoreRef} style={{ height: '160px' }} />
      </div>
    </div>
  );
}
