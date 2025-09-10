export default function Contact(){
  const phone='7780232547'
  const wa='917780232547'
  const address='2B, Kodad Town, Near Ganna Sarvaiah Function Hall, Khammam X Road, Vijayawada Road–Kodad, Kodad-508206'
  const mapQuery = encodeURIComponent(address)
  return (
    <section className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-3"><strong>Phone:</strong> <a className="text-blue-600 underline" href={`tel:${phone}`}>{phone}</a></p>
        <p className="mt-1"><strong>WhatsApp:</strong> <a className="text-green-700 underline" href={`https://wa.me/${wa}`} target="_blank">Chat Now</a></p>
        <p className="mt-3"><strong>Address:</strong> {address}</p>
        <form className="mt-5 bg-white rounded-2xl shadow p-4">
          <label className="block text-sm font-medium">Name</label>
          <input className="w-full border rounded-xl p-2 mt-1" placeholder="Your name" />
          <label className="block text-sm font-medium mt-3">Email</label>
          <input className="w-full border rounded-xl p-2 mt-1" placeholder="you@example.com" />
          <label className="block text-sm font-medium mt-3">Message</label>
          <textarea className="w-full border rounded-xl p-2 mt-1" rows="4" placeholder="I want a battery for..."></textarea>
          <button type="button" onClick={()=>alert('This is a demo form — please call or WhatsApp us!')} className="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-white">Send</button>
        </form>
      </div>
      <div>
        <iframe title="map" className="w-full h-96 rounded-2xl border" loading="lazy"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}></iframe>
      </div>
    </section>
  )
}