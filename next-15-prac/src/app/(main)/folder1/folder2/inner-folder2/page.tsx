import Link from "next/link";

export default function InnerFolder2Page() {
  return (
    <>
      <h1>Inner Folder2 page</h1>
      <div>
        <Link href={"/folder5"}>Folder5</Link>
      </div>
    </>
  );
}
