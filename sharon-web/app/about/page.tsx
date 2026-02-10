import type { Metadata } from "next";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "About Us | Sharon House Family International Church Inc.",
  description:
    "Learn about Sharon House Family International Church, our vision, mission, and leadership under Rev. Pastor Godfrey Ebuzor.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              About Sharon House
            </h1>
            <p
              className="text-xl md:text-2xl opacity-90 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Raising a people of excellence and power, living in victory every
              day
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] rounded-3xl p-10 text-white shadow-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed opacity-95">
                To raise a generation of believers who walk in excellence,
                operate in divine power, and live victoriously in every area of
                life. We envision a community where faith is not just professed
                but demonstrated through transformed lives and supernatural
                manifestations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#3E6F1E] to-[#2F5516] rounded-3xl p-10 text-white shadow-2xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8"
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
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed opacity-95">
                To equip believers with the Word of God, empower them through
                the Holy Spirit, and establish them in their God-given purpose.
                We are committed to creating an atmosphere where worship is
                vibrant, teaching is sound, and miracles are commonplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 text-center">
              Our Story
            </h2>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                Sharon House Family International Church Inc. was birthed from a
                divine mandate to establish a spiritual family where believers
                can experience the fullness of God's presence and power. Located
                in the heart of Orhuwhorun, Delta State, Nigeria, we have become
                a beacon of hope and transformation in our community.
              </p>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                Our name "Sharon House" is inspired by the biblical reference to
                the Rose of Sharon, symbolizing beauty, abundance, and divine
                favor. We believe that every member of our church family is
                called to flourish like the Rose of Sharon—beautiful, fragrant,
                and life-giving.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                From our humble beginnings, we have grown into a vibrant
                community of believers who are passionate about worship,
                committed to the Word, and dedicated to impacting our world for
                Christ. Our journey has been marked by testimonies of healing,
                deliverance, provision, and supernatural breakthroughs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Pastor */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-12 text-center">
              Our Leadership
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-2 bg-[#6FAF2E]/10 text-[#6FAF2E] rounded-full font-semibold mb-4">
                  Senior Pastor
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                  Rev. Pastor Godfrey Ebuzor
                </h3>
                <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                  Rev. Pastor Godfrey Ebuzor is a man of God with a burning
                  passion for souls and a deep commitment to raising believers
                  who walk in excellence and power. His ministry is
                  characterized by powerful teaching, prophetic insight, and a
                  demonstration of the Spirit's power.
                </p>
                <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                  Under his leadership, Sharon House has become a place where
                  lives are transformed, families are restored, and destinies
                  are fulfilled. Pastor Godfrey's heart is to see every believer
                  discover their God-given potential and live victoriously in
                  every area of life.
                </p>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  His teaching ministry is rooted in the Word of God, practical
                  in application, and powerful in impact. He believes that the
                  church should be a place where heaven touches earth and where
                  the supernatural becomes natural.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] rounded-3xl shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <svg
                          className="w-32 h-32 mx-auto mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <p className="text-xl font-semibold">
                          Rev. Pastor Godfrey Ebuzor
                        </p>
                        <p className="text-sm opacity-90 mt-2">Senior Pastor</p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#e3781a] rounded-full opacity-20 blur-2xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#6FAF2E] rounded-full opacity-20 blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-12 text-center">
              What to Expect When You Visit
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Vibrant Worship
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Experience powerful, Spirit-filled worship that ushers you
                  into God's presence. Our worship is contemporary, energetic,
                  and deeply reverent.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Sound Teaching
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Receive practical, life-changing messages from God's Word that
                  equip you to live victoriously and fulfill your purpose.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                  Warm Community
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Connect with genuine, loving people who will welcome you as
                  family and support you on your spiritual journey.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Supernatural Atmosphere
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Witness the power of God at work through healing, miracles,
                  and life-transforming encounters with the Holy Spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-12 text-center">
              Our Core Values
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-[#F5F5F5] rounded-xl p-6">
                <div className="w-8 h-8 bg-[#6FAF2E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    Excellence
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    We pursue excellence in all we do, reflecting the excellence
                    of our God in our worship, service, and daily lives.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-[#F5F5F5] rounded-xl p-6">
                <div className="w-8 h-8 bg-[#6FAF2E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    Power
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    We believe in and demonstrate the power of the Holy Spirit
                    in our lives, ministry, and outreach.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-[#F5F5F5] rounded-xl p-6">
                <div className="w-8 h-8 bg-[#6FAF2E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    Victory
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    We live as victorious believers, overcoming every challenge
                    through Christ who strengthens us.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-[#F5F5F5] rounded-xl p-6">
                <div className="w-8 h-8 bg-[#6FAF2E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    Family
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    We are a spiritual family, loving and supporting one another
                    as we grow together in faith.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-[#F5F5F5] rounded-xl p-6">
                <div className="w-8 h-8 bg-[#6FAF2E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    Impact
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    We are committed to making a lasting impact in our community
                    and beyond through service and outreach.
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
              Join Our Family
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the love, power, and victory that comes from being part
              of Sharon House
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/visit" variant="accent" size="lg">
                Plan Your Visit
              </CTAButton>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Get in Touch
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
