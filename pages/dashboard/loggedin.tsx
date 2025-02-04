import Image from "next/image";

export default function LoggedIn() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
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
                className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your username"
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
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Next
            </button>
          </form>
          <div className="mt-4 text-sm">
            <a
              href="#"
              className="block text-blue-600 hover:underline"
            >
              Recover Your Username
            </a>
            <a
              href="#"
              className="block text-blue-600 hover:underline"
            >
              Enroll in Online Banking
            </a>
          </div>
          <hr className="my-6 border-gray-200" />
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
