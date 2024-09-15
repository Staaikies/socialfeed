"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProfileCard from '@/app/components/cards/profile-card';
import TitleBar from '@/app/components/cards/title-bar';
import PostCard from '@/app/components/cards/post-card';
import { LoadingSpinner } from '@/app/components/common';

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const userId = id;

  useEffect(() => {
    if (userId) {
      async function fetchUser() {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      }
      fetchUser();
    }
  }, [userId]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(`https://dummyjson.com/users/${userId}/posts`);
      const data = await response.json();
      setUserPosts(data.posts);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <TitleBar title="Profile" href="/" />
      <div className="max-w-screen-md ml-auto mr-auto p-4">
        {!user ?
          <div className="mt-10">
            <LoadingSpinner />
          </div>
        :
          <>
            <ProfileCard 
              firstName={user.firstName}
              lastName={user.lastName}
              username={user.username}
              address={user.address}
              department={user.company.department}
              posts={userPosts}
            />
            {userPosts.map(post => (
              <PostCard 
                key={post.id} 
                firstName={user.firstName} 
                lastName={user.lastName} 
                username={user.username} 
                {...post} 
              />
            ))}
          </>
        }
      </div>
    </div>
  );
}
