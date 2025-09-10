export default function ProductCard({ img, name }) {
  const whatsappLink = `https://wa.me/917780232547?text=Hi, I am interested in ${encodeURIComponent(
    name
  )}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white"
    >
      <div className="w-full h-64 flex items-center justify-center bg-gray-100">
        <img
          src={img}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </a>
  )
}
