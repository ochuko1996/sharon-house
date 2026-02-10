import type { Metadata } from "next";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Visit Us | Sharon House Family International Church Inc.",
  description:
    "Plan your visit to Sharon House Family International Church. Service times, location, and directions to 4 Usiefrun Road, Orhuwhorun, Delta State, Nigeria.",
};

export default function VisitPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#3E6F1E] to-[#6FAF2E] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              We Can't Wait to Meet You!
            </h1>
            <p
              className="text-xl md:text-2xl opacity-90 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Join us for an unforgettable worship experience this Sunday
            </p>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Service Times
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Choose a service that fits your schedule and join our family in
              worship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Sunday Service */}
            <div className="bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  MAIN SERVICE
                </div>
                <h3 className="text-3xl font-bold mb-3">Sunday</h3>
                <p className="text-lg mb-2 opacity-90">Celebration Service</p>
                <p className="text-4xl font-bold mb-4">8:00 AM</p>
                <p className="text-sm opacity-80">Main Sanctuary</p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm">Duration: ~2.5 hours</p>
                </div>
              </div>
            </div>

            {/* Wednesday Service */}
            <div className="bg-gradient-to-br from-[#3E6F1E] to-[#2F5516] rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  MIDWEEK
                </div>
                <h3 className="text-3xl font-bold mb-3">Wednesday</h3>
                <p className="text-lg mb-2 opacity-90">Bible Study & Prayer</p>
                <p className="text-4xl font-bold mb-4">6:00 PM</p>
                <p className="text-sm opacity-80">Main Sanctuary</p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm">Duration: ~1.5 hours</p>
                </div>
              </div>
            </div>

            {/* Friday Service */}
            <div className="bg-gradient-to-br from-[#e3781a] to-[#c55d0f] rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  YOUTH
                </div>
                <h3 className="text-3xl font-bold mb-3">Friday</h3>
                <p className="text-lg mb-2 opacity-90">Ignite Youth Service</p>
                <p className="text-4xl font-bold mb-4">5:00 PM</p>
                <p className="text-sm opacity-80">Youth Center</p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm">Duration: ~2 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                Find Us
              </h2>
              <p className="text-lg text-[#6B7280]">
                We're located in the heart of Orhuwhorun, Delta State
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Address & Contact */}
              <div>
                <div className="bg-white rounded-3xl p-8 shadow-xl mb-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[#6FAF2E]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                        Physical Address
                      </h3>
                      <p className="text-[#6B7280] leading-relaxed">
                        4 Usiefrun Road
                        <br />
                        Opposite Alaba Waterside Junction
                        <br />
                        Orhuwhorun, Delta State
                        <br />
                        Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[#6FAF2E]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                        Google Maps Plus Code
                      </h3>
                      <p className="text-[#6B7280] font-mono text-lg">
                        GR6P+5RG
                      </p>
                      <a
                        href="https://plus.codes/6FR4GR6P+5RG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6FAF2E] hover:text-[#3E6F1E] font-semibold inline-flex items-center mt-2"
                      >
                        Open in Google Maps
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                      Nearby Landmarks
                    </h3>
                    <ul className="space-y-2 text-[#6B7280]">
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-[#6FAF2E] mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Opposite Alaba Waterside Junction
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-4 h-4 text-[#6FAF2E] mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Usiefrun Road, Orhuwhorun
                      </li>
                    </ul>
                  </div>
                </div>

                <CTAButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Need Directions? Contact Us
                </CTAButton>
              </div>

              {/* Map */}
              <div>
                <div className="bg-white rounded-3xl p-4 shadow-xl">
                  <div className="aspect-square bg-[#F5F5F5] rounded-2xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps?q=6FR4GR6P+5RG&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sharon House Family International Church Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Time Visitor Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                First Time Visiting?
              </h2>
              <p className="text-lg text-[#6B7280]">
                Here's what you need to know to make your visit comfortable and
                enjoyable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <div className="w-14 h-14 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-[#6FAF2E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  What to Wear
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Come as you are! While many dress in smart casual or Sunday
                  best, we welcome you regardless of what you wear. Comfort is
                  key.
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <div className="w-14 h-14 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-[#6FAF2E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  When to Arrive
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  We recommend arriving 15-20 minutes early to find parking, get
                  settled, and meet our welcome team who will help you feel at
                  home.
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <div className="w-14 h-14 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-[#6FAF2E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Children & Family
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Children are welcome in all services! We also have a dedicated
                  children's ministry with age-appropriate teaching and
                  activities.
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <div className="w-14 h-14 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-[#6FAF2E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  What to Expect
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Expect vibrant worship, practical teaching, and a warm
                  welcome. Services typically last 2-2.5 hours with worship,
                  message, and ministry time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Visit?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We can't wait to welcome you into our family this Sunday!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="accent" size="lg">
                Let Us Know You're Coming
              </CTAButton>
              <CTAButton href="/about" variant="secondary" size="lg">
                Learn More About Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
