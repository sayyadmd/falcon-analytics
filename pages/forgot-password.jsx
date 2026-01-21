import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, BarChart3, TrendingUp, Users } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const slides = [
    {
      title: "Data-Driven Insights",
      description: "Transform raw test performance data into actionable teaching strategies with AI-powered analytics.",
      icon: <BarChart3 size={64} className="text-white" />,
      color: "from-primary-500 to-primary-700"
    },
    {
      title: "Track Student Progress",
      description: "Monitor chapter-wise performance, identify weak areas, and create targeted improvement plans.",
      icon: <TrendingUp size={64} className="text-white" />,
      color: "from-primary-500 to-primary-700"
    },
    {
      title: "Empower Your Teaching",
      description: "Get AI recommendations for test creation, teaching focus, and question-type analysis.",
      icon: <Users size={64} className="text-white" />,
      color: "from-primary-500 to-primary-700"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Auto-advance carousel
  useState(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side - Carousel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-br ${slide.color} transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-full flex flex-col items-center justify-center p-12 text-white">
              <div className="mb-8">{slide.icon}</div>
              <h2 className="text-4xl font-bold mb-4 text-center">{slide.title}</h2>
              <p className="text-xl text-center text-white/90 max-w-md">{slide.description}</p>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto bg-gray-50">
        <div className="min-h-full flex flex-col items-center pt-24 px-8 pb-8">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-primary-600 mb-2">Falcon</h1>
              <p className="text-gray-600">Faculty Analytics & Learning Console</p>
            </div>

            {/* Forgot Password Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
                  <p className="text-gray-600 mb-6">
                    Enter your email address and we'll send you a link to reset your password.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@institute.edu"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
                    >
                      Send Reset Link
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-success-100 text-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
                  <p className="text-gray-600 mb-6">
                    We've sent a password reset link to <strong>{email}</strong>
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Try another email
                  </button>
                </div>
              )}

              {/* Back to Login */}
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <Link 
                  href="/login" 
                  className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Sign In
                </Link>
              </div>
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-8">
              © 2026 Falcon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
