import type { Metadata } from "next";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Give | Sharon House Family International Church Inc.",
  description:
    "Support the ministry of Sharon House Family International Church through tithes, offerings, and donations. Give securely online.",
};

export default function GivePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Give
            </h1>
            <p
              className="text-xl md:text-2xl opacity-90 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Partner with us in advancing God's kingdom
            </p>
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Why We Give
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Giving is an act of worship and a demonstration of our trust in
                God's provision. When we give, we participate in God's work and
                experience the joy of being generous.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#F5F5F5] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#6FAF2E]"
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
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Worship
                </h3>
                <p className="text-[#6B7280]">
                  Giving is an expression of our love and gratitude to God
                </p>
                <p className="text-sm text-[#6FAF2E] mt-3 font-semibold">
                  "Honor the LORD with your wealth" - Proverbs 3:9
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#6FAF2E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Obedience
                </h3>
                <p className="text-[#6B7280]">
                  We give in obedience to God's command and principle
                </p>
                <p className="text-sm text-[#6FAF2E] mt-3 font-semibold">
                  "Bring the whole tithe" - Malachi 3:10
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#6FAF2E]"
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
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Impact
                </h3>
                <p className="text-[#6B7280]">
                  Our giving advances God's kingdom and transforms lives
                </p>
                <p className="text-sm text-[#6FAF2E] mt-3 font-semibold">
                  "Give, and it will be given to you" - Luke 6:38
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] rounded-3xl p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                God's Promise
              </h3>
              <blockquote className="text-center text-lg md:text-xl leading-relaxed italic mb-4">
                "Bring the whole tithe into the storehouse, that there may be
                food in my house. Test me in this," says the LORD Almighty, "and
                see if I will not throw open the floodgates of heaven and pour
                out so much blessing that there will not be room enough to store
                it."
              </blockquote>
              <p className="text-center font-semibold">— Malachi 3:10 (NIV)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                Ways to Give
              </h2>
              <p className="text-lg text-[#6B7280]">
                Choose the giving method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Online Giving */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-[#6FAF2E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  Online Giving
                </h3>
                <p className="text-[#6B7280] mb-6">
                  Give securely online using your debit card, credit card, or
                  bank transfer. Fast, convenient, and secure.
                </p>
                <div className="bg-[#F5F5F5] rounded-xl p-6 mb-6">
                  <p className="text-sm text-[#6B7280] mb-4">
                    <strong className="text-[#1A1A1A]">Coming Soon:</strong>{" "}
                    We're setting up secure online giving through Paystack.
                    Check back soon!
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    In the meantime, you can give through bank transfer (see
                    details below).
                  </p>
                </div>
                <button
                  disabled
                  className="w-full px-6 py-3 bg-gray-300 text-gray-500 font-semibold rounded-full cursor-not-allowed"
                >
                  Online Giving (Coming Soon)
                </button>
              </div>

              {/* Bank Transfer */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-[#6FAF2E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  Bank Transfer
                </h3>
                <p className="text-[#6B7280] mb-6">
                  Transfer your tithes and offerings directly to our church
                  account.
                </p>
                <div className="bg-[#F5F5F5] rounded-xl p-6 mb-6">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-[#6B7280] mb-1">Bank Name</p>
                      <p className="font-semibold text-[#1A1A1A]">
                        Contact church for details
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7280] mb-1">
                        Account Name
                      </p>
                      <p className="font-semibold text-[#1A1A1A]">
                        Sharon House Family International Church Inc.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7280] mb-1">
                        Account Number
                      </p>
                      <p className="font-semibold text-[#1A1A1A]">
                        Contact church for details
                      </p>
                    </div>
                  </div>
                </div>
                <CTAButton
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Request Bank Details
                </CTAButton>
              </div>

              {/* In-Person Giving */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-[#6FAF2E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  In-Person Giving
                </h3>
                <p className="text-[#6B7280] mb-6">
                  Give during any of our services. Offering envelopes are
                  available at the church.
                </p>
                <div className="bg-[#F5F5F5] rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-[#1A1A1A] mb-3">
                    Service Times:
                  </h4>
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
                      Sunday: 8:00 AM
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
                      Wednesday: 6:00 PM
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
                      Friday: 5:00 PM
                    </li>
                  </ul>
                </div>
                <CTAButton
                  href="/visit"
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  Plan Your Visit
                </CTAButton>
              </div>

              {/* Mail/Drop-off */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-[#6FAF2E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  Mail or Drop-off
                </h3>
                <p className="text-[#6B7280] mb-6">
                  You can mail your offering or drop it off at the church office
                  during office hours.
                </p>
                <div className="bg-[#F5F5F5] rounded-xl p-6 mb-6">
                  <p className="text-sm text-[#6B7280] mb-3">
                    <strong className="text-[#1A1A1A]">Mailing Address:</strong>
                  </p>
                  <p className="text-[#1A1A1A]">
                    Sharon House Family International Church Inc.
                    <br />
                    4 Usiefrun Road
                    <br />
                    Opposite Alaba Waterside Junction
                    <br />
                    Orhuwhorun, Delta State
                    <br />
                    Nigeria
                  </p>
                </div>
                <p className="text-sm text-[#6B7280] italic">
                  Please make checks payable to "Sharon House Family
                  International Church Inc."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of Giving */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
                Your Impact
              </h2>
              <p className="text-lg text-[#6B7280]">
                When you give to Sharon House, you're investing in:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 bg-[#F5F5F5] rounded-xl p-6">
                <div className="w-12 h-12 bg-[#6FAF2E] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                    Worship & Ministry
                  </h3>
                  <p className="text-[#6B7280]">
                    Supporting vibrant worship services and powerful ministry
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-[#F5F5F5] rounded-xl p-6">
                <div className="w-12 h-12 bg-[#6FAF2E] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                    Community Outreach
                  </h3>
                  <p className="text-[#6B7280]">
                    Reaching the lost and serving our community with God's love
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-[#F5F5F5] rounded-xl p-6">
                <div className="w-12 h-12 bg-[#6FAF2E] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                    Youth & Children
                  </h3>
                  <p className="text-[#6B7280]">
                    Investing in the next generation through dynamic programs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-[#F5F5F5] rounded-xl p-6">
                <div className="w-12 h-12 bg-[#6FAF2E] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                    Facility & Operations
                  </h3>
                  <p className="text-[#6B7280]">
                    Maintaining a welcoming space for worship and fellowship
                  </p>
                </div>
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
              Thank You for Your Generosity
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your faithful giving makes it possible for us to fulfill our
              mission and impact lives for eternity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="accent" size="lg">
                Contact Us
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
