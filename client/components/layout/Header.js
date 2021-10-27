import Link from "next/link";
import { useRouter } from "next/router";
const Header = ({ currentUser }) => {
  const router = useRouter();

  const links = [
    !currentUser && { label: "LOGIN", href: "/auth/login" },
    !currentUser && { label: "SIGN UP", href: "/auth/signup" },
    currentUser && { label: "SIGN OUT", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <Link key={href} href={href}>
          <span
            className={`font-light text-base text-gray-800 cursor-pointer hover:text-yellow-500 ${
              router.pathname === href
                ? "text-yellow-500 font-normal"
                : "text-gray-800"
            }`}
          >
            {label}
          </span>
        </Link>
      );
    });
  return (
    <div className="relative md:fixed w-full">
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="flex flex-row space-x-11">
              <div className="flex items-center">
                <Link href="/" className="">
                  <span className="font-medium text-2xl text-indigo-900 cursor-pointer">
                    Delici<span className="text-yellow-500 text-3xl">O</span>
                  </span>
                </Link>
              </div>
              <div className="flex items-center space-x-10">
                <Link href="/meals">
                  <span
                    className={`font-light text-base cursor-pointer hover:text-yellow-500 ${
                      router.pathname === "/meals"
                        ? "text-yellow-500 font-normal"
                        : "text-gray-800"
                    }`}
                  >
                    OUR MEALS
                  </span>
                </Link>
                <Link href="/chefs">
                  <span
                    className={`font-light text-base text-gray-800 cursor-pointer hover:text-yellow-500 ${
                      router.pathname === "/chefs"
                        ? "text-yellow-500 font-normal"
                        : "text-gray-800"
                    }`}
                  >
                    OUR CHEFS
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-10">{links}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
