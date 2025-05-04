import Modal from "@/app/components/modal";
import Image from "next/image";
import { photos } from "../../data";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = photos.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image alt={photo.name} src={photo.src} width={500} height={500} />
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
      </div>
    </Modal>
  );
}
