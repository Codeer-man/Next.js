import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
      <h1>Welcome to Receipt app</h1>
      <Link href={'receipt-list'}>
          Explore receipe
      </Link>
   </div>
  );
}
