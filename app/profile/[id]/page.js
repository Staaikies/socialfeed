"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProfileCard from '@/app/components/cards/profile-card';
import TitleBar from '@/app/components/cards/title-bar';

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
      setUserPosts(data);
    }

    fetchPosts();
  }, []);

  console.log(userPosts);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TitleBar title="Profile" href="/" />
      <div className="max-w-screen-md ml-auto mr-auto p-4">
      <ProfileCard 
        firstName={user.firstName}
        lastName={user.lastName}
        username={user.username}
        address={user.address}
        department={user.company.department}
      />
      </div>

      
    </div>
  );
}
