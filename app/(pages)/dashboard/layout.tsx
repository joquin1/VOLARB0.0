import { ReactNode } from "react";
import { fetchQuery } from 'convex/nextjs';
import { redirect } from 'next/navigation';
import { api } from '../../../convex/_generated/api';
import { getAuthToken } from '../../../lib/auth';
import DashboardSideBar from "./_components/dashboard-side-bar";
import DashboardTopNav from "./_components/dashbord-top-nav";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const token = await getAuthToken();

  const { hasActiveSubscription } = await fetchQuery(api.subscriptions.getUserSubscriptionStatus, {
  }, {
    token: token!,
  });

  if (!hasActiveSubscription) {
    redirect('/pricing');
  }

  return (
    <div className="flex h-screen overflow-hidden w-full">
      <DashboardSideBar />
      <main className="flex-1 overflow-y-auto">
        <DashboardTopNav>{children}</DashboardTopNav>
      </main>
    </div>
  );
}