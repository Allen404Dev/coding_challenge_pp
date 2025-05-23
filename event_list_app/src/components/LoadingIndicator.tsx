const LoadingIndicator = () => {
  return (
    <div className="flex items-center justify-center h-[200px] md:h-[400px]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-blue-500 text-lg font-semibold">Wird geladen...</p>
      </div>
    </div>
  );
};

export default LoadingIndicator;
