export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-indigo-200 border-b-indigo-700 animate-spin" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-bold text-slate-800 font-heading tracking-wide">
          Amaze<span className="text-blue-600">PMS</span>
        </p>
        <p className="mt-1 text-sm text-slate-500 animate-pulse">
          Loading amazing experiences...
        </p>
      </div>
    </div>
  );
}
