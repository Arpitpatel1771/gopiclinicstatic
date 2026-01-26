import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Calendar, Clock, ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Expert Hair & Skin Care at <span className="text-clinic-blue">Gopi Clinic</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your trusted destination for all hair and skin treatments. Our expert dermatologists provide
                  personalized care for all your needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-clinic-blue hover:bg-clinic-darkblue">Book Appointment</Button>
                <Button variant="outline" className="border-clinic-blue text-clinic-blue hover:bg-clinic-lightblue">
                  View Services
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <div className="text-sm text-gray-500">
                  <span className="font-medium">4.9/5</span> from 200+ reviews
                </div>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Doctor examining patient's skin"
                width={550}
                height={550}
                className="rounded-lg object-cover border shadow-lg"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Certified Specialists</p>
                    <p className="text-sm text-gray-500">Experienced Dermatologists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Calendar className="h-10 w-10 text-clinic-blue" />,
                title: "Easy Appointments",
                description: "Book your appointment online or call us directly for convenient scheduling.",
              },
              {
                icon: <Clock className="h-10 w-10 text-clinic-blue" />,
                title: "Minimal Wait Times",
                description: "We respect your time with efficient scheduling and minimal waiting periods.",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-clinic-blue" />,
                title: "Personalized Care",
                description: "Customized treatment plans tailored to your specific skin and hair needs.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive hair and skin treatments provided by our expert team
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Hair Treatments",
                description: "Advanced solutions for hair loss, dandruff, and scalp conditions.",
                image: "/placeholder.svg?height=300&width=400",
                services: [
                  "Hair Loss Treatment",
                  "Scalp Therapy",
                  "Dandruff Treatment",
                  "Hair Transplant Consultation",
                ],
              },
              {
                title: "Skin Care",
                description: "Personalized skin care for acne, pigmentation, and aging concerns.",
                image: "/placeholder.svg?height=300&width=400",
                services: ["Acne Treatment", "Anti-Aging Solutions", "Pigmentation Therapy", "Skin Rejuvenation"],
              },
              {
                title: "Cosmetic Procedures",
                description: "Non-invasive cosmetic treatments for skin enhancement.",
                image: "/placeholder.svg?height=300&width=400",
                services: ["Chemical Peels", "Microdermabrasion", "Laser Therapy", "Botox & Fillers"],
              },
              {
                title: "Medical Dermatology",
                description: "Treatment for various skin conditions and diseases.",
                image: "/placeholder.svg?height=300&width=400",
                services: [
                  "Eczema Treatment",
                  "Psoriasis Management",
                  "Fungal Infection Care",
                  "Skin Cancer Screening",
                ],
              },
              {
                title: "Laser Treatments",
                description: "Advanced laser procedures for various skin concerns.",
                image: "/placeholder.svg?height=300&width=400",
                services: ["Laser Hair Removal", "Scar Reduction", "Tattoo Removal", "Vascular Lesion Treatment"],
              },
              {
                title: "Ayurvedic Therapies",
                description: "Traditional Ayurvedic treatments for holistic skin and hair care.",
                image: "/placeholder.svg?height=300&width=400",
                services: ["Herbal Treatments", "Oil Therapy", "Natural Face Packs", "Ayurvedic Consultations"],
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden service-card transition-all duration-300">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-500 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-clinic-blue flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="mt-4 p-0 text-clinic-blue hover:text-clinic-darkblue">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Clinic interior"
                width={600}
                height={600}
                className="rounded-lg object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-clinic-blue p-6 rounded-lg shadow-lg text-white hidden md:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Gopi Clinic</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Established with a vision to provide world-class dermatological care, Gopi Clinic has been serving
                  patients with dedication and expertise for over a decade.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500">
                  Our clinic is equipped with state-of-the-art technology and staffed by experienced dermatologists who
                  are committed to delivering the highest standard of care. We understand the unique needs of our
                  patients from tier 2 and tier 3 cities and provide affordable yet effective treatments.
                </p>
                <p className="text-gray-500">
                  At Gopi Clinic, we believe in a holistic approach to skin and hair care, combining modern medical
                  practices with traditional wisdom to ensure the best results for our patients.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-clinic-blue">5000+</span>
                  <span className="text-gray-500">Happy Patients</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-clinic-blue">15+</span>
                  <span className="text-gray-500">Expert Doctors</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-clinic-blue">30+</span>
                  <span className="text-gray-500">Treatments</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-clinic-blue">3</span>
                  <span className="text-gray-500">Clinic Locations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Patients Say</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied patients about their experience at Gopi Clinic
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                location: "Jaipur",
                quote:
                  "I had been struggling with acne for years until I visited Gopi Clinic. The personalized treatment plan worked wonders for my skin. Highly recommended!",
                rating: 5,
              },
              {
                name: "Rajesh Kumar",
                location: "Lucknow",
                quote:
                  "The hair loss treatment at Gopi Clinic has given me back my confidence. The doctors are knowledgeable and the staff is very friendly.",
                rating: 5,
              },
              {
                name: "Anita Patel",
                location: "Surat",
                quote:
                  "I was skeptical about laser treatments, but the team at Gopi Clinic made me comfortable. The results are amazing and the prices are reasonable.",
                rating: 4,
              },
              {
                name: "Vikram Singh",
                location: "Bhopal",
                quote:
                  "After trying many remedies for my eczema, I finally found relief at Gopi Clinic. The Ayurvedic approach combined with modern medicine worked perfectly.",
                rating: 5,
              },
              {
                name: "Meena Gupta",
                location: "Patna",
                quote:
                  "The skin rejuvenation treatment has taken years off my face. The clinic is clean, modern and the doctors take time to explain everything.",
                rating: 5,
              },
              {
                name: "Suresh Reddy",
                location: "Vijayawada",
                quote:
                  "My daughter's acne scars have significantly reduced after the treatment at Gopi Clinic. Worth every rupee spent!",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="bg-clinic-lightblue text-clinic-blue rounded-full p-3 mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or ready to schedule your appointment? Contact us today.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-clinic-blue flex-shrink-0 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-gray-500">123 Main Street, City Center, Your City, State 123456</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-clinic-blue flex-shrink-0 mr-3" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-gray-500">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-clinic-blue flex-shrink-0 mr-3" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-gray-500">info@gopiclinic.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-clinic-blue flex-shrink-0 mr-3" />
                  <div>
                    <p className="font-medium">Clinic Hours</p>
                    <p className="text-gray-500">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-500">Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="hair">Hair Treatment</option>
                        <option value="skin">Skin Care</option>
                        <option value="cosmetic">Cosmetic Procedures</option>
                        <option value="medical">Medical Dermatology</option>
                        <option value="laser">Laser Treatments</option>
                        <option value="ayurvedic">Ayurvedic Therapies</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button className="w-full bg-clinic-blue hover:bg-clinic-darkblue">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-clinic-blue text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">
            Ready to Transform Your Hair and Skin?
          </h2>
          <p className="max-w-[700px] mx-auto mb-6 text-clinic-lightblue md:text-xl/relaxed">
            Book your appointment today and take the first step towards healthier hair and glowing skin.
          </p>
          <Button className="bg-white text-clinic-blue hover:bg-gray-100">Book Your Appointment Now</Button>
        </div>
      </section>
    </div>
  )
}
