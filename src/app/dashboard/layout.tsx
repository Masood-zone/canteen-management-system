import { AppSidebar } from "@/components/sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AppSidebar>{children}</AppSidebar>;
}
