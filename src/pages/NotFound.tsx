
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-teal-400 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-2xl">
        {/* Fun 404 Visual */}
        <div className="mb-8">
          <div className="text-9xl font-bold mb-4 opacity-80">404</div>
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Search className="h-8 w-8" />
            </div>
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-2xl">😕</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Oops! Page Not Found
        </h1>
        
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          It looks like this page went on an adventure of its own! Just like our young innovators, 
          sometimes we explore paths that don't exist yet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>

        <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">Looking for something specific?</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a href="/programs" className="hover:underline">Our Programs</a>
            <span>•</span>
            <a href="/about" className="hover:underline">About Us</a>
            <span>•</span>
            <a href="/team" className="hover:underline">Our Team</a>
            <span>•</span>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
