import type { Metadata } from "next";
import CTAButton from "./components/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Sharon House Family International Church Inc.",
  description:
    "Welcome to Sharon House Family International Church. Raising a people of excellence and power, living in victory every day. Join us for live worship and powerful sermons.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(62, 111, 30, 0.92) 0%, rgba(111, 175, 46, 0.88) 100%), url(\'data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h100v100H0z" fill="%233E6F1E"/%3E%3Cpath d="M50 0L100 50 50 100 0 50z" fill="%236FAF2E" opacity=".1"/%3E%3C/svg%3E\')',
          }}
        >
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp leading-tight">
            Welcome to <span className="text-[#FFD700]">Sharon House</span>
          </h1>
          <p
            className="text-xl md:text-2xl lg:text-3xl mb-4 animate-fadeInUp font-light"
            style={{ animationDelay: "0.2s" }}
          >
            Family International Church Inc.
          </p>
          <p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto animate-fadeInUp opacity-90"
            style={{ animationDelay: "0.4s" }}
          >
            Raising a people of excellence and power, living in victory every
            day
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <CTAButton href="/visit" variant="accent" size="lg">
              Plan Your Visit
            </CTAButton>
            <CTAButton
              target="_blank"
              href="https://www.youtube.com/@sharonhouseinternationalchurch/"
              variant="primary"
              size="lg"
            >
              Watch Live
            </CTAButton>
            <CTAButton href="/media" variant="secondary" size="lg">
              Latest Sermon
            </CTAButton>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Join Us This Week
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Experience powerful worship, inspiring messages, and genuine
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sunday Service */}
            <div className="bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Sunday Celebration</h3>
                <p className="text-lg mb-4 opacity-90">Every Sunday</p>
                <p className="text-3xl font-bold">8:00 AM</p>
                <p className="mt-4 text-sm opacity-80">Main Sanctuary</p>
              </div>
            </div>

            {/* Midweek Service */}
            <div className="bg-gradient-to-br from-[#3E6F1E] to-[#2F5516] rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Midweek Service</h3>
                <p className="text-lg mb-4 opacity-90">Every Wednesday</p>
                <p className="text-3xl font-bold">6:00 PM</p>
                <p className="mt-4 text-sm opacity-80">Prayer & Bible Study</p>
              </div>
            </div>

            {/* Youth Service */}
            <div className="bg-gradient-to-br from-[#C62828] to-[#A52020] rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Ignite (Youth)</h3>
                <p className="text-lg mb-4 opacity-90">Every Friday</p>
                <p className="text-3xl font-bold">5:00 PM</p>
                <p className="mt-4 text-sm opacity-80">Youth Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                A Place to Call <span className="text-[#6FAF2E]">Home</span>
              </h2>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                At Sharon House Family International Church, we believe in
                raising a people of excellence and power who live in victory
                every day. Whether you're seeking spiritual growth, community,
                or a fresh start, you'll find a welcoming family here.
              </p>
              <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                Under the leadership of Rev. Pastor Godfrey Ebuzor, we are
                committed to transforming lives through the power of God's Word,
                vibrant worship, and genuine fellowship.
              </p>
              <CTAButton href="/about" variant="primary" size="lg">
                Learn More About Us
              </CTAButton>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <svg
                      className="w-24 h-24 mx-auto mb-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">
                      Visit Our Church
                    </h3>
                    <p className="text-sm opacity-90">
                      4 Usiefrun Road, Orhuwhorun
                    </p>
                    <p className="text-sm opacity-90">Delta State, Nigeria</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C62828] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#6FAF2E] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermon / YouTube Embed */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Latest Message
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Catch up on our most recent sermon or join us live every Sunday
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-[#F5F5F5] rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed?listType=user_uploads&list=sharonhouselive"
                title="Sharon House Live - Latest Sermon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center mt-8">
              <CTAButton href="/media" variant="primary" size="lg">
                View All Sermons
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Join us for special services, conferences, and community
              gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#6FAF2E] font-semibold mb-2">
                  EVERY SUNDAY
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Sunday Celebration
                </h3>
                <p className="text-[#6B7280] mb-4">
                  Join us for powerful worship and life-transforming messages
                  every Sunday morning.
                </p>
                <div className="flex items-center text-sm text-[#6B7280]">
                  <svg
                    className="w-4 h-4 mr-2"
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
                  8:00 AM
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#C62828] to-[#A52020] flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#C62828] font-semibold mb-2">
                  EVERY FRIDAY
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Ignite Youth Service
                </h3>
                <p className="text-[#6B7280] mb-4">
                  Dynamic youth gathering with worship, teaching, and fellowship
                  for young people.
                </p>
                <div className="flex items-center text-sm text-[#6B7280]">
                  <svg
                    className="w-4 h-4 mr-2"
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
                  5:00 PM
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-[#3E6F1E] to-[#2F5516] flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#3E6F1E] font-semibold mb-2">
                  EVERY WEDNESDAY
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Midweek Service
                </h3>
                <p className="text-[#6B7280] mb-4">
                  Deepen your faith through prayer, Bible study, and spiritual
                  growth.
                </p>
                <div className="flex items-center text-sm text-[#6B7280]">
                  <svg
                    className="w-4 h-4 mr-2"
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
                  6:00 PM
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/events" variant="primary" size="lg">
              View All Events
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Ministries Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Our Ministries
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Find your place to serve, grow, and connect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/ministries#ignite" className="group">
              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center hover:bg-[#6FAF2E] transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-8 h-8 text-[#6FAF2E] group-hover:text-white transition-colors"
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
                <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white transition-colors">
                  Ignite Youth
                </h3>
              </div>
            </Link>

            <Link href="/ministries#women" className="group">
              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center hover:bg-[#C62828] transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-8 h-8 text-[#C62828] group-hover:text-white transition-colors"
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
                <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white transition-colors">
                  Women of Worth
                </h3>
              </div>
            </Link>

            <Link href="/ministries#children" className="group">
              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center hover:bg-[#3E6F1E] transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-8 h-8 text-[#3E6F1E] group-hover:text-white transition-colors"
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
                <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white transition-colors">
                  Children's Ministry
                </h3>
              </div>
            </Link>

            <Link href="/ministries#worship" className="group">
              <div className="bg-[#F5F5F5] rounded-xl p-6 text-center hover:bg-[#6FAF2E] transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                  <svg
                    className="w-8 h-8 text-[#6FAF2E] group-hover:text-white transition-colors"
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
                <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-white transition-colors">
                  Worship & Music
                </h3>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/ministries" variant="secondary" size="lg">
              Explore All Ministries
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Victory?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us this Sunday and discover what it means to live in
              excellence and power every day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/visit" variant="accent" size="lg">
                Plan Your Visit
              </CTAButton>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-[#6FAF2E] transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
