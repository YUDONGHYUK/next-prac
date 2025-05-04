// Intercepting Routes Example

import Link from "next/link";

export default function Forder1Page() {
  return (
    <>
      <h1>Forder1 Page</h1>
      <div>
        <Link href={"/folder1/folder2"}>Folder2</Link>
        <Link href={"/folder3"}>Folder3</Link>
      </div>
    </>
  );
}
