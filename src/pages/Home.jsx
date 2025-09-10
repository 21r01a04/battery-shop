import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center p-6 min-h-[70vh]">
      {/* Left Side - Text Content */}
      <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Trusted Batteries for All Vehicles</h1>
        <p className="mt-4 text-lg text-green-700">
          Power your ride with <span className="font-semibold">Amaron • Exide • PowerZone</span>
        </p>
        <div className="mt-6 flex gap-4">
          <Link to="/products" className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700">Shop Now</Link>
          <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-700">View Deals</Link>
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Address: 2B, Kodad Town, Near Ganna Sarvaiah Function Hall, Khammam X Road, Vijayawada Road–Kodad, Kodad-508206
        </p>
      </motion.div>

      {/* Right Side - Single Large Image */}
      <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex justify-center">
        <img
          src="/battery1.jpg"
          alt="Main Battery Banner"
          className="w-full max-w-md rounded-xl shadow-lg object-contain"
        />
      </motion.div>
    </section>
  );
}