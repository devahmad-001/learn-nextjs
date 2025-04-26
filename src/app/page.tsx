import Link from "next/link";

export default function Home() {
  return (
    <>
     <h1><Link href={'/blog/'+1}>clickhere</Link> </h1>
    </>
  );
}
