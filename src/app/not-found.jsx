import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto bg-green-300 p-40 rounded-3xl text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/" className="btn btn-primary bg-green-800 mt-6">
        Go Home
      </Link>
    </div>
  );
}