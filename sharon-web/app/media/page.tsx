import type { Metadata } from "next";
import CTAButton from "../components/CTAButton";
import { YOUTUBE_LINK } from "@/constants/variable";

export const metadata: Metadata = {
  title: "Live & Media | Sharon House Family International Church Inc.",
  description:
    "Watch live services, recent sermons, and media from Sharon House Family International Church. Subscribe to Sharon House Live on YouTube.",
};

export default function MediaPage() {
  const recentSermons = [
    {
      title: "Living in Victory",
      date: "Recent Sunday",
      category: "Sunday Service",
    },
    {
      title: "The Power of Excellence",
      date: "Recent Sunday",
      category: "Sunday Service",
    },
    {
      title: "Walking in Purpose",
      date: "Recent Wednesday",
      category: "Midweek Service",
    },
    {
      title: "Faith That Moves Mountains",
      date: "Recent Sunday",
      category: "Sunday Service",
    },
    {
      title: "Ignite Your Passion",
      date: "Recent Friday",
      category: "Youth Service",
    },
    {
      title: "Supernatural Breakthrough",
      date: "Recent Sunday",
      category: "Sunday Service",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#e3781a] to-[#6FAF2E] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Live & Media
            </h1>
            <p
              className="text-xl md:text-2xl opacity-90 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Watch live services and catch up on recent messages
            </p>
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#e3781a] text-white rounded-full font-semibold mb-4 animate-pulse">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span>LIVE NOW</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Join Us Live
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Experience the presence of God from anywhere in the world
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-[#F5F5F5] rounded-3xl shadow-2xl overflow-hidden mb-8">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/live_stream?channel=UCsharonhouselive"
                title="Sharon House Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Sunday</h3>
                  <p className="text-lg opacity-90">8:00 AM WAT</p>
                  <p className="text-sm opacity-75 mt-1">Celebration Service</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Wednesday</h3>
                  <p className="text-lg opacity-90">6:00 PM WAT</p>
                  <p className="text-sm opacity-75 mt-1">
                    Bible Study & Prayer
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Friday</h3>
                  <p className="text-lg opacity-90">5:00 PM WAT</p>
                  <p className="text-sm opacity-75 mt-1">
                    Ignite Youth Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Recent Sermons
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Catch up on powerful messages from our recent services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentSermons.map((sermon, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-video bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-white opacity-80"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#6FAF2E] font-semibold mb-2">
                    {sermon.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-4">{sermon.date}</p>
                  <button className="text-[#6FAF2E] hover:text-[#3E6F1E] font-semibold inline-flex items-center">
                    Watch Now
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

          <div className="text-center mt-12">
            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#e3781a] text-white font-semibold rounded-full hover:bg-[#c55d0f] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Sermons on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] rounded-3xl p-12 text-white text-center shadow-2xl">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never Miss a Message
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to Sharon House Live on YouTube and get notified when we
              go live or upload new content
            </p>
            <a
              href={`${YOUTUBE_LINK}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-[#e3781a] text-white font-semibold rounded-full hover:bg-[#c55d0f] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Subscribe on YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Follow us on social media for daily inspiration, updates, and
              community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href="https://www.facebook.com/sharonhouselive"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-[#1877F2]/10 group-hover:bg-[#1877F2] rounded-full flex items-center justify-center mx-auto mb-4 transition-all">
                <svg
                  className="w-8 h-8 text-[#1877F2] group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                Facebook
              </h3>
              <p className="text-[#6B7280]">Sharon House Live</p>
            </a>

            <a
              href="https://www.instagram.com/sharonhouselive"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] opacity-10 group-hover:opacity-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all">
                <svg
                  className="w-8 h-8 text-[#E4405F] group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                Instagram
              </h3>
              <p className="text-[#6B7280]">@sharonhouselive</p>
            </a>

            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-[#FF0000]/10 group-hover:bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4 transition-all">
                <svg
                  className="w-8 h-8 text-[#FF0000] group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">YouTube</h3>
              <p className="text-[#6B7280]">Sharon House Live</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience It Live
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nothing compares to being there in person. Join us this Sunday!
            </p>
            <CTAButton href="/visit" variant="accent" size="lg">
              Plan Your Visit
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
