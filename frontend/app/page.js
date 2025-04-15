import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Gopi Dholiya Hair and Skin Clinic - Dermatology & Cosmetology in Ahmedabad</title>
        <meta name="description" content="Get advanced skin and hair care treatments at Dr. Gopi Dholiya's Hair and Skin Clinic in Ahmedabad. Book your consultation for acne, hair loss, anti-aging and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <main className="min-h-screen p-8 bg-white text-black">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#01004e]">Dr. Gopi Dholiya Hair and Skin Clinic</h1>
          <p className="text-lg mt-2 text-[#b78212]">Expert Dermatology & Cosmetology Care in Ahmedabad</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Acne and Scar Treatment</li>
            <li>Hair Fall & PRP Therapy</li>
            <li>Anti-aging & Wrinkle Reduction</li>
            <li>Laser Hair Removal</li>
            <li>Skin Brightening & Pigmentation Treatment</li>
            <li>Dandruff and Scalp Care</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Dr. Gopi Dholiya</h2>
          <p>Dr. Gopi Dholiya, MD in Dermatology, is a trusted skin and hair care specialist with over 10 years of experience treating patients in Ahmedabad. She combines clinical expertise with a compassionate approach to deliver personalized care for every patient.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Location & Contact</h2>
          <p>Address: 2nd Floor, Shine Complex, Near Metro Pillar 123, Satellite Road, Ahmedabad</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: drgopi@hairskinclinic.in</p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.891511652032!2d72.50993931492215!3d23.0259973849496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f310b3a4ed%3A0x5c3b9c4b47db3164!2sSatellite%20Rd%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1686754321000!5m2!1sen!2sin"
              width="100%"
              height="300"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Dr. Gopi Dholiya Hair and Skin Clinic. All rights reserved.
        </footer>
      </main>
    </>
  )
}
