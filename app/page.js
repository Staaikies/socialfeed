"use client";
import { useEffect, useState } from 'react';
import TitleBar from "./components/cards/title-bar";
import ProfileCard from "./components/cards/profile-card";
import PostCard from "./components/cards/post-card";
import { UserCard, UserCardSmall } from "./components/cards/user-card";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setPosts(data.posts);
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

  console.log(posts);

  const mergedPosts = posts.map(post => {
    const match = users.find(user => user.id === post.id);
    return match ? 
    { ...post, 
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
      
      <div className="max-w-screen-sm ml-auto mr-auto pt-4">
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
      </div>
      
      <div className="max-w-md p-10">
        <ProfileCard />
        <br /><br />
        <PostCard />
        <br /><br />
        <UserCard />
        <br /><br />
        <UserCardSmall />
      </div>
    </div>
  );
}
