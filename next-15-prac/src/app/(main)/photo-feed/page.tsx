import Image from "next/image";
import Link from "next/link";
import { photos } from "./data";

export default function PhotoFeedPage() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the world
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {photos.map(({ id, name, src }) => (
          <Link key={name} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
              width={500}
              height={500}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
