import ProfileCard from "./components/profile-card";
import PostCard from "./components/post-card";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-md p-10">
        <ProfileCard />
        <br /><br />
        <PostCard />
      </div>
    </div>
  );
}
