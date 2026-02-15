export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
        <p className="text-sm text-gray-400">Se încarcă...</p>
      </div>
    </div>
  );
}
