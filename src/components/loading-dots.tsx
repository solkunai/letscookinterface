export function LoadingDots() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <span className="sr-only">Loading...</span>
      <div className="h-3 w-3 animate-bounce rounded-full bg-accent [animation-delay:-0.3s]" />
      <div className="h-3 w-3 animate-bounce rounded-full bg-accent [animation-delay:-0.15s]" />
      <div className="h-3 w-3 animate-bounce rounded-full bg-accent" />
    </div>
  );
}
