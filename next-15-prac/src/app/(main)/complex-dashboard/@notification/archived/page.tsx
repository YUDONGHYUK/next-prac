import Link from "next/link";
import { Card } from "../../components/card";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}
