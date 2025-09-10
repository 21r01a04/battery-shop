export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        {/* Business Info */}
        <div>
          <h3 className="font-semibold text-white">Sri Ganesh Batteries</h3>
          <p className="text-sm mt-2">
            Address: 2B, Kodad Town, Near Ganna Sarvaiah Function Hall, Khammam X Road, Vijayawada Road–Kodad, Kodad-508206
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="text-sm mt-2">
            <a className="underline" href="tel:7780232547">Phone: 7780232547</a>
          </p>
          <p className="text-sm mt-1">
            <a className="underline" href="https://wa.me/917780232547" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="font-semibold text-white">Opening Hours</h3>
          <p className="text-sm mt-2">Mon – Sat: 9:00 AM – 8:00 PM</p>
          <p className="text-sm">Sunday: Closed</p>
        </div>
      </div>

      <div className="text-center text-xs py-3 bg-black/50">
        © {new Date().getFullYear()} Sri Ganesh Batteries. All rights reserved.
      </div>
    </footer>
  );
}
