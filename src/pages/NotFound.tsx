import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";

const NotFound = () => {
    return (
        <PageTransition>
        <div className="min-h-screen flex items-center justify-center py-32">
          <div className="text-center px-4">
            <h1 className="text-9xl font-bold text-primary-600">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-primary px-6 py-3 flex items-center justify-center mx-auto w-48">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </PageTransition>
    );
}

export default NotFound;