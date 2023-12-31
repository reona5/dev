"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export const ProviderAnalytics: React.FC = () => {
  return <VercelAnalytics />;
};
