import ProfileCard from "./components/profile-card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-md p-10">
        <ProfileCard />
      </div>
    </div>
  );
}
