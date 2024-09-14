"use client";
import { useEffect, useState, useRef } from 'react';
import TitleBar from "./components/cards/title-bar";
import PostCard from "./components/cards/post-card";
import { UserCardSmall } from "./components/cards/user-card";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setPosts(data.posts);
      setDisplayedPosts(data.posts.slice(0, 5)); // Initialize with first 5 posts
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      setUsers(data.users);
    }

    fetchUsers();
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

  const mergedPosts = displayedPosts.map(post => {
    const match = users.find(user => user.id === post.id);
    return match ? 
      {...post, 
      firstName: match.firstName, 
      lastName: match.lastName,
      username: match.username } : post;
  });

  const topPosts = mergedPosts
    .sort((a, b) => b.reactions.likes - a.reactions.likes)
    .slice(0, 2);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <TitleBar title="Feed" />
      
      <div className="max-w-screen-md ml-auto mr-auto p-4">
        <h2 className="text-xl font-bold mb-2">Suggested posts</h2>
        {topPosts.map(post => (
          <PostCard 
            key={post.id}
            firstName={post.firstName}
            username={post.username}
            body={post.body}
            likes={post.reactions.likes}
            dislikes={post.reactions.dislikes}
            views={post.views}
            tags={post.tags}
          />
        ))}

        <h2 className="text-xl font-bold mb-2">Who to follow</h2>
        <div className="grid gris-cols-1 lg:grid-cols-2 grid-rows-2 gap-4">
          {users.slice(0, 4).map(user => (
            <UserCardSmall 
              key={user.id} 
              firstName={user.firstName} 
              lastName={user.lastName} 
              username={user.username} 
            />
          ))}
        </div>

        <h2 className="text-xl font-bold mb-2">Recent</h2>
        {mergedPosts.map(post => (
          <PostCard 
            key={post.id}
            firstName={post.firstName}
            username={post.username}
            body={post.body}
            likes={post.reactions.likes}
            dislikes={post.reactions.dislikes}
            views={post.views}
            tags={post.tags}
          />
        ))}
        <div ref={loadMoreRef} style={{ height: '20px' }} />
      </div>
    </div>
  );
}
