const imgs = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
  '/image6.jpg',
]

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="w-full h-56 object-cover rounded-2xl shadow"
          />
        ))}
      </div>
    </section>
  );
}
