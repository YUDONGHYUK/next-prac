import Image from "next/image";
import { redirect } from "next/navigation";
import { photos } from "../data";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = photos.find((p) => p.id === id);

  if (!photo) {
    redirect("/photo-feed");
  }

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
