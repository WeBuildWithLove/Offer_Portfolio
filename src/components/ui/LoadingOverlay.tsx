// components/ui/LoadingOverlay.tsx

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex flex-col ">
        <div className="loader"></div>
        <div className="pt-10">
          <p className="md:text-2xl text-lg text-center px-[2%]">
            Welcome, lets go begin your journey as a thought leader
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
