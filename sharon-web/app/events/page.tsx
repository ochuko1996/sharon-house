import type { Metadata } from "next";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Events | Sharon House Family International Church Inc.",
  description:
    "Upcoming events, conferences, and special services at Sharon House Family International Church in Orhuwhorun, Delta State.",
};

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Sunday Celebration Service",
      date: "Every Sunday",
      time: "8:00 AM",
      location: "Main Sanctuary",
      description:
        "Join us for powerful worship, inspiring messages, and life-transforming encounters with God.",
      category: "Weekly Service",
      color: "from-[#6FAF2E] to-[#3E6F1E]",
    },
    {
      title: "Midweek Bible Study & Prayer",
      date: "Every Wednesday",
      time: "6:00 PM",
      location: "Main Sanctuary",
      description:
        "Deepen your understanding of God's Word and grow in prayer through our midweek service.",
      category: "Weekly Service",
      color: "from-[#3E6F1E] to-[#2F5516]",
    },
    {
      title: "Ignite Youth Service",
      date: "Every Friday",
      time: "5:00 PM",
      location: "Youth Center",
      description:
        "Dynamic youth gathering with worship, teaching, and fellowship for young people.",
      category: "Youth",
      color: "from-[#C62828] to-[#A52020]",
    },
    {
      title: "Women of Worth Meeting",
      date: "Monthly",
      time: "TBA",
      location: "Fellowship Hall",
      description:
        "Empowering women to discover their worth, purpose, and destiny in Christ.",
      category: "Ministry",
      color: "from-[#6FAF2E] to-[#3E6F1E]",
    },
    {
      title: "Family Fun Day",
      date: "Quarterly",
      time: "TBA",
      location: "Church Grounds",
      description:
        "A day of fun, games, food, and fellowship for the whole family.",
      category: "Special Event",
      color: "from-[#C62828] to-[#6FAF2E]",
    },
    {
      title: "Annual Harvest Celebration",
      date: "Coming Soon",
      time: "TBA",
      location: "Main Sanctuary",
      description:
        "Celebrate God's faithfulness and abundance with thanksgiving, worship, and testimonies.",
      category: "Annual Event",
      color: "from-[#6FAF2E] to-[#C62828]",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#6FAF2E] via-[#3E6F1E] to-[#C62828] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Upcoming Events
            </h1>
            <p
              className="text-xl md:text-2xl opacity-90 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Join us for life-changing gatherings, special services, and
              community celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${event.color} flex items-center justify-center p-6`}
                >
                  <div className="text-center text-white">
                    <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-3">
                      {event.category}
                    </div>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-[#6B7280]">
                      <svg
                        className="w-5 h-5 text-[#6FAF2E] mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-[#6B7280]">
                      <svg
                        className="w-5 h-5 text-[#6FAF2E] mr-3 flex-shrink-0"
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
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-[#6B7280]">
                      <svg
                        className="w-5 h-5 text-[#6FAF2E] mr-3 flex-shrink-0"
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
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-[#6B7280] leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <button className="text-[#6FAF2E] hover:text-[#3E6F1E] font-semibold inline-flex items-center">
                    Learn More
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Info */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#6FAF2E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-[#6FAF2E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Don't miss out on any of our upcoming events, conferences, and
                special services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F5F5F5] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Follow Us on Social Media
                </h3>
                <p className="text-[#6B7280] mb-4">
                  Get real-time updates on events, service changes, and special
                  announcements
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://www.facebook.com/sharonhouselive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#6FAF2E] hover:bg-[#3E6F1E] rounded-full flex items-center justify-center text-white transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/sharonhouselive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#6FAF2E] hover:bg-[#3E6F1E] rounded-full flex items-center justify-center text-white transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@sharonhouselive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#6FAF2E] hover:bg-[#3E6F1E] rounded-full flex items-center justify-center text-white transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-[#F5F5F5] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Contact Us
                </h3>
                <p className="text-[#6B7280] mb-4">
                  Have questions about an event? Reach out to us directly
                </p>
                <CTAButton
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Get in Touch
                </CTAButton>
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
              Join Us This Sunday
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the power of God and the warmth of our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/visit" variant="accent" size="lg">
                Plan Your Visit
              </CTAButton>
              <CTAButton href="/media" variant="secondary" size="lg">
                Watch Online
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
