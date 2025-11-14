import Link from "next/link";
import ProductCard from "./users/component/ProductCard";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <h1>Hello World</h1>
        <Link href="/users">Users</Link>
        <ProductCard />
      </main>
    </div>
  );
}
