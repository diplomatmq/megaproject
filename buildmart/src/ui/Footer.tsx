
import { Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const quickLinks = ['About Us', 'Products', 'Delivery Info', 'Returns Policy'];
const supportLinks = ['Contact Us', 'FAQs', 'Shipping & Tracking', 'Privacy Policy'];

export function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">BuildMart</h3>
            <p className="mb-4 text-sm">
              Your trusted source for premium building materials and construction
              supplies.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a key={idx} href="#" className="transition hover:text-orange-500">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="text-sm transition hover:text-orange-500">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Customer Service</h3>
            <ul className="space-y-2">
              {supportLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="text-sm transition hover:text-orange-500">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Newsletter</h3>
            <p className="mb-4 text-sm">Subscribe for updates and exclusive deals.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
              />
              <button className="rounded-lg bg-orange-600 px-4 py-2 text-white transition hover:bg-orange-700">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
            <div>
              <p className="mb-1 font-semibold text-white">Phone</p>
              <p>1-800-BUILD-MART</p>
            </div>
            <div>
              <p className="mb-1 font-semibold text-white">Email</p>
              <p>support@buildmart.com</p>
            </div>
            <div>
              <p className="mb-1 font-semibold text-white">Address</p>
              <p>123 Construction Ave, Builder City, BC 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>(c) 2026 BuildMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
