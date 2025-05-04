import Link from "next/link";
import { Card } from "../components/card";

export default function Notification() {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href={"/complex-dashboard/archived"}>Archived</Link>
      </div>
    </Card>
  );
}
