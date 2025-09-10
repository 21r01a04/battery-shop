export default function Reviews() {
  const reviews = [
    {
      name: "Nandu Chowdhary",
      rating: 5,
      text: "Excellent batteries, I never saw this type of batteries",
      time: "5 years ago",
    },
    {
      name: "Bhavani",
      rating: 5,
      text: "5",
      time: "5 years ago",
    },
    {
      name: "Shekar Reddy",
      rating: 5,
      text: "Great service and quality batteries!",
      time: "3 years ago",
    },
    {
      name: "Mr Sai",
      rating: 5,
      text: "Trusted shop, highly recommended!",
      time: "4 years ago",
    },
    {
      name: "Barla Veerababu",
      rating: 5,
      text: "Very good shop, wide variety of batteries",
      time: "2 years ago",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto p-6" id="reviews">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

      <div className="space-y-4">
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-xl shadow-sm bg-white"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">{r.name}</p>
              <span className="text-sm text-gray-500">{r.time}</span>
            </div>

            <div className="flex items-center mt-1">
              {Array(r.rating)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              <span className="ml-2 text-sm text-green-600 font-medium">
                {r.rating}.0
              </span>
            </div>

            <p className="text-gray-700 mt-2">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
