import logoImage from '../assets/logo-2.png';

interface LogoLoadingProps {
  isVisible: boolean;
}

export default function LogoLoading({ isVisible }: LogoLoadingProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <img
            src={logoImage}
            alt="Sync Water Tech"
            className="w-48 h-48 mx-auto mb-6 animate-pulse"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border-4 border-blue-200 border-t-[#0073bc] rounded-full animate-spin"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#0073bc] mb-2">
          Loading...
        </h2>
        <p className="text-gray-600">
          Please wait
        </p>
      </div>
    </div>
  );
}
