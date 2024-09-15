"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProfileCard from '@/app/components/cards/profile-card';
import TitleBar from '@/app/components/cards/title-bar';
import PostCard from '@/app/components/cards/post-card';
import { LoadingSpinner } from '@/app/components/common';
import { ErrorCard } from '@/app/components/common';

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [error, setError] = useState();
  const userId = id;

  useEffect(() => {
    if (userId) {
      async function fetchUser() {
        try {
          const response = await fetch(`https://dummyjson.com/users/${userId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const data = await response.json();
          setUser(data);
        } catch (err) {
          setError(err.message);
        }
      }
      fetchUser();
    }
  }, [userId]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}/posts`);
        if (!response.ok) {
          throw new Error('Failed to fetch user posts');
        }
        const data = await response.json();
        setUserPosts(data.posts);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchPosts();
  }, [userId]);

  if (error) {
    return (
      <div>
        <TitleBar title="Profile" href="/" />
        <div className="max-w-screen-md ml-auto mr-auto p-8">
          <ErrorCard error={error} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <TitleBar title="Profile" href="/" />
      <div className="max-w-screen-md ml-auto mr-auto p-8">
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
            <h2 className="text-xl font-bold mb-2">Recent</h2>
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
