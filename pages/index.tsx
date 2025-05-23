import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Side - Background with Logo */}
        <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 text-white">
          <div className="absolute inset-0">
            <Image
              src="/background-image.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-60"
            />
          </div>
          <div className="relative z-10 text-center">
            <Image
              src="https://raw.githubusercontent.com/nsriv531/zbank-image/refs/heads/main/zbank.jpg"
              alt="ZBank Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
            <h1 className="text-3xl font-bold mt-4">Secure Sign-In</h1>
            <p className="text-lg font-light">ZBank Online Banking</p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-6 bg-gray-50">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Client Card or Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  id="password"
                  name="password"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-600"
                >
                  Save client card or username
                </label>
              </div>

              
<div className="flex items-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </button>
              {/* Wrapped "Sign Up" button with Link */}
              <Link href="/signup">
                <button
                  type="button"
                  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign Up
                </button>
              </Link>
            </div>

            </form>

            <div className="mt-4 text-sm">
              <a href="#" className="block text-blue-600 hover:underline">
                Recover Your Username
              </a>
              <a href="#" className="block text-blue-600 hover:underline">
                Enroll in Online Banking
              </a>
            </div>
            <hr className="my-6 border-gray-200" />
            <p className="text-sm text-gray-600">
              Need help?{" "}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
