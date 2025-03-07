import type { Metadata } from "next";

import { PageLayout } from "../_components/PageLayout";
import { EventGrid } from "./EventGrid";

export const metadata: Metadata = {
  title: "Games of the Realms",
  description:
    "Fully Onchain Games in the Realms Autonomous World- Created for adventurers by Bibliotheca DAO",
};

export default async function Page() {
  return (
    <PageLayout title="Events">
      <div className="pb-8 md:text-2xl">Events from across Realms.World</div>
      <EventGrid />
    </PageLayout>
  );
}
