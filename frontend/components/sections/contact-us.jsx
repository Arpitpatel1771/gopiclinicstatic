import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

export default function ContactUs() {
  const apiKey = process.env.NEXT_PUBLIC_GMAPS_API_KEY;
  const phone = process.env.NEXT_PUBLIC_CLINIC_PHONE || "";
  const displayPhone = phone.replace(/^\+91/, "+91 ");
  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHW_LHQBP4DsRjBrmvROPCEI&key=${apiKey}`;
  return (
    <section
      id="contact"
      className="w-full py-8 px-4 flex flex-col items-center bg-gray-100"
    >
      <h1 className="text-4xl tracking-tight font-bold text-primary mb-2 text-center">
        Contact Us
      </h1>
      <h2 className="text-lg text-gray-500 text-center">
        Reach out to us for appointments, queries, or directions. We're here to
        help!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 justify-items-center mt-8">
        {/* Map Section */}
        <div className="h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-lg border bg-white">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            src={mapSrc}
            title="Gopi Clinic Location"
          ></iframe>
        </div>
        {/* Contact Info Section */}
        <div className="flex flex-col gap-4 items-start justify-center dark:bg-muted h-72 md:h-96">
          <div className="text-base text-foreground">
            <div className="mb-4">
              <h1 className="text-xl tracking-normal font-bold">
                Clinic Address
              </h1>
              <h2>
                YAMUNA CHOWK, 239-240 rangila park shopping mall, opposite
                Krishna Township, near Sumeru city Mall, Mota Varachha, Surat,
                Gujarat 394101
              </h2>
            </div>
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="w-5 h-5 text-blue-500 fill-blue-500" />
                <a
                  href={`tel:${phone}`}
                  className="text-primary text-lg hover:underline"
                >
                  {displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <FaWhatsapp className="w-6 h-6 text-green-600" />
                <a
                  href={`tel:${phone}`}
                  className="text-primary text-lg hover:underline"
                >
                  {displayPhone}
                </a>
              </div>
            </div>
            <div className="mt-2 text-md tracking-tight text-gray-600">
              Call or WhatsApp the above number for any queries.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
