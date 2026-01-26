import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src="/logo.svg" alt="Gopi Clinic Logo" width={150} height={50} className="h-12 w-auto mb-4" />
            <p className="text-gray-600 mt-2 max-w-md">
              Providing expert hair and skin treatments with personalized care for all your dermatological needs.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-clinic-blue hover:text-clinic-darkblue">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-clinic-blue hover:text-clinic-darkblue">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-clinic-blue hover:text-clinic-darkblue">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/#services" },
                { name: "About Us", href: "/#about" },
                { name: "Testimonials", href: "/#testimonials" },
                { name: "Contact", href: "/#contact" },
                { name: "Book Appointment", href: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-clinic-blue">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-clinic-blue flex-shrink-0 mr-2" />
                <span className="text-gray-600">123 Main Street, City Center, Your City, State 123456</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-clinic-blue flex-shrink-0 mr-2" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-clinic-blue flex-shrink-0 mr-2" />
                <span className="text-gray-600">info@gopiclinic.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900">Clinic Hours</h4>
              <p className="mt-1 text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Gopi Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
