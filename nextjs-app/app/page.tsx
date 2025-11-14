import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <h1>Hello World</h1>
        <Link href="/users">Users</Link>
      </main>
    </div>
  );
}
