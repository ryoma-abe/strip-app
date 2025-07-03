import AuthButton from "@/components/auth/auth-button";
import MobileNav from "@/components/ui/dashboard/mobile-nav";
import DashboardNavigation from "@/components/ui/dashboard/nav";
import { SparklesIcon } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 dark:border-slate-700">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity"
            >
              <SparklesIcon className="h-8 w-8 text-purple-600" />
              <span>AI Creator Studio</span>
            </Link>
            <div className="hidden md:block">
              <AuthButton />
            </div>
            <MobileNav />
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="hidden md:block sticky top-4 h-fit">
          <nav className="rounded-lg bg-white/70 backdrop-blur-sm p-4 dark:bg-slate-800/50 border border-gray-200/50 dark:border-slate-700/50 shadow-sm">
            <div className="font-semibold text-slate-900 dark:text-slate-100 mb-4">
              <DashboardNavigation />
            </div>
          </nav>
        </aside>
        <main className="min-h-[calc(100vh-120px)]">{children}</main>
      </div>
    </div>
  );
}
