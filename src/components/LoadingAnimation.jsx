
function LoadingAnimation() {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-[#e8e8e8] animate-bounce [animation-delay:.7s]"></div>
      <div className="w-4 h-4 rounded-full bg-[#e8e8e8] animate-bounce [animation-delay:.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-[#e8e8e8] animate-bounce [animation-delay:.7s]"></div>
    </div>
  );
}

export default LoadingAnimation