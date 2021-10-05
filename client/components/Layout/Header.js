const Header = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between max-w-screen-2xl mx-auto">
        <div className="flex flex-row ">
          <div>
            <a href="#" className="flex items-center space-x-2 py-4 px-4">
              <span className="font-bold text-3xl text-indigo-900">
                Delicio
              </span>
            </a>
          </div>
          <div className="flex text-gray-500 font-medium">
            <a href="#" className="flex items-center space-x-2 py-4 px-4">
              Our Dishes
            </a>
            <a href="#" className="flex items-center space-x-2 py-4 px-4">
              Our Chefs
            </a>
            <a href="#" className="flex items-center space-x-2 py-4 px-4">
              How we cook
            </a>
            <a href="#" className="flex items-center space-x-2 py-4 px-4">
              Suppliers
            </a>
          </div>
        </div>
        <div className="flex space-x-3">
          <a href="#" className="flex items-center space-x-2 py-3 px-5 my-2">
            Log in
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 py-2 px-5 my-2 bg-indigo-900 text-white rounded-2xl font-medium"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
