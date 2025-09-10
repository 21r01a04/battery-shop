import ProductCard from '../components/ProductCard'

const products = [
  { img: '/product1.jpg', name: 'Product 1' },
  { img: '/product2.jpg', name: 'Product 2' },
  { img: '/product3.jpg', name: 'Product 3' },
  { img: '/product4.jpg', name: 'Product 4' },
  { img: '/product5.jpg', name: 'Product 5' },
  { img: '/product6.jpg', name: 'Product 6' },
  { img: '/product7.jpg', name: 'Product 7' },
  { img: '/product8.jpg', name: 'Product 8' },
  { img: '/product9.jpg', name: 'Product 9' },
  { img: '/product10.jpg', name: 'Product 10' },
  { img: '/product11.jpg', name: 'Product 11' },
  { img: '/product12.jpg', name: 'Product 12' },
  { img: '/product13.jpg', name: 'Product 13' },
  { img: '/product14.jpg', name: 'Product 14' },
  { img: '/product15.jpg', name: 'Product 15' },
  { img: '/product16.jpg', name: 'Product 16' },
  { img: '/product17.jpg', name: 'Product 17' },
  { img: '/product18.jpg', name: 'Product 18' },
  { img: '/product19.jpg', name: 'Product 19' },
  { img: '/product20.jpg', name: 'Product 20' },
  { img: '/product21.jpg', name: 'Product 21' },
  { img: '/product22.jpg', name: 'Product 22' },
]

export default function Shop() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Products</h2>
          <p className="text-gray-500">Pick your battery and buy on WhatsApp</p>
        </div>
        <a
          href="https://wa.me/917780232547"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-green-600 text-white"
        >
          Chat on WhatsApp
        </a>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((p, idx) => (
          <ProductCard key={idx} img={p.img} name={p.name} />
        ))}
      </div>
    </section>
  )
}
