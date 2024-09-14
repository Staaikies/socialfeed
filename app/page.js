import ProfileCard from "./components/profile-card";
import PostCard from "./components/post-card";
import { UserCard, UserCardSmall } from "./components/user-card";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
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
