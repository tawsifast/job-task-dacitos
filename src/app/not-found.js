import Link from "next/link";
import { SearchX, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative text-center max-w-xl">
        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 mb-6">
          <SearchX className="w-8 h-8 text-blue-600" />
        </div>

        <p className="text-7xl sm:text-8xl font-extrabold font-heading bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent leading-none">
          404
        </p>

        <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-slate-800">
          Page Not Found
        </h1>

        <p className="mt-3 text-slate-500 text-base sm:text-lg leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to exploring our property management
          services.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:shadow-lg hover:shadow-blue-600/25 transition-all active:scale-95"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm bg-white text-blue-700 border border-blue-200 hover:border-blue-400 rounded-xl transition-all active:scale-95"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
