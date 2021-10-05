import Image from "next/image";

const landingPage = () => {
  return (
    <div className="w-full">
      <div>
        <div className="flex justify-center">
          <h2 className="text-gray-500 font-medium text-4xl">Our Chefs</h2>
        </div>
        <div>
          <img src="/public/2.png" />
        </div>
      </div>
    </div>
  );
};
export default landingPage;
