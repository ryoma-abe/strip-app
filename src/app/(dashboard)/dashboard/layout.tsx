import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity"
          >
            AI Image Generator
          </Link>
        </div>
      </header>
      <div className="container md:grid md:grid-cols-[220px_minmax(0,1fr)]">
        <aside>
          <div>Dashboard Navigation</div>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
