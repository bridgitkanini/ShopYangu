import { FaStore, FaBoxes } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-gradient-to-br from-white to-[#1d4268] p-4 md:p-14 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 overflow-auto">
        <h1 className="flex items-center justify-center text-3xl md:text-4xl font-bold text-[#041c4c] mb-6 text-center">
          Welcome to ShopYangu Admin
        </h1>
        <p className="text-xl text-[#1d4268] mb-8 max-w-2xl mx-auto text-center">
          Your central hub for seamless shop and product management. Take
          control of your digital marketplace with our powerful admin tools.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-white/50 flex items-start space-x-4 hover:bg-white/70 transition-all duration-300">
            <div className="text-[#4ebcbe] text-3xl mt-1">
              <FaStore />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#041c4c] mb-2">
                Shop Management
              </h3>
              <p className="text-[#1d4268]">
                Monitor and manage all shops with real-time insights and
                powerful tools.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-white/50 flex items-start space-x-4 hover:bg-white/70 transition-all duration-300">
            <div className="text-[#4ebcbe] text-3xl mt-1">
              <FaBoxes />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#041c4c] mb-2">
                Product Control
              </h3>
              <p className="text-[#1d4268]">
                Streamline your product listings and inventory management
                effortlessly.
              </p>
            </div>
          </div>
        </div>

        <Link href="/shops" className="flex justify-center">
          <button
            className="bg-[#4ebcbe] text-white py-3 px-8 rounded-lg text-lg font-medium
            hover:bg-[#1d4268] transform hover:scale-105 transition-all duration-300
            shadow-lg hover:shadow-xl"
          >
            View Shops
          </button>
        </Link>
      </div>
    </main>
  );
}
