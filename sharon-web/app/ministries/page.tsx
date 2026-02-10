import type { Metadata } from "next";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Ministries | Sharon House Family International Church Inc.",
  description:
    "Discover ministries at Sharon House: Ignite Youth, Women of Worth, Children's Ministry, and Worship & Music. Find your place to serve and grow.",
};

export default function MinistriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#3E6F1E] via-[#6FAF2E] to-[#e3781a] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Our Ministries
            </h1>
            <p
              className="text-xl md:text-2xl opacity-90 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Find your place to serve, grow, and make an impact
            </p>
          </div>
        </div>
      </section>

      {/* Ignite Youth */}
      <section id="ignite" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-[#e3781a]/10 text-[#e3781a] rounded-full font-semibold mb-4">
                Youth Ministry
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Ignite Youth
              </h2>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                Ignite is our dynamic youth ministry designed for teenagers and
                young adults who are passionate about God and ready to make a
                difference in their generation. We believe that young people are
                not just the church of tomorrow—they are the church of today.
              </p>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                Through powerful worship, relevant teaching, and authentic
                community, we equip young people to discover their identity in
                Christ, develop their gifts, and impact their world.
              </p>

              <div className="bg-[#F5F5F5] rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                  What We Offer
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#e3781a] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Weekly Friday night services with worship and teaching
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#e3781a] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Leadership development and mentorship programs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#e3781a] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Fun activities, outings, and community service projects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#e3781a] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Annual youth conferences and retreats
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center space-x-4 text-[#6B7280] mb-6">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#e3781a] mr-2"
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
                  <span>Every Friday</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#e3781a] mr-2"
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
                  <span>5:00 PM</span>
                </div>
              </div>

              <CTAButton href="/contact" variant="accent" size="lg">
                Join Ignite Youth
              </CTAButton>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#e3781a] to-[#c55d0f] rounded-3xl shadow-2xl overflow-hidden">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <h3 className="text-3xl font-bold">Ignite Youth</h3>
                      <p className="text-lg opacity-90 mt-2">On Fire for God</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#6FAF2E] rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#e3781a] rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women of Worth */}
      <section id="women" className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <h3 className="text-3xl font-bold">Women of Worth</h3>
                      <p className="text-lg opacity-90 mt-2">
                        Valued & Empowered
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#e3781a] rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#6FAF2E] rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-[#6FAF2E]/10 text-[#6FAF2E] rounded-full font-semibold mb-4">
                Women's Ministry
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Women of Worth
              </h2>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                Women of Worth is a ministry dedicated to empowering women to
                discover their identity, purpose, and worth in Christ. We create
                a safe space where women can connect, grow, and support one
                another on their spiritual journey.
              </p>
              <p className="text-lg text-[#6B7280] mb-6 leading-relaxed">
                Through Bible studies, prayer meetings, and fellowship events,
                we help women develop deep relationships with God and with each
                other, while equipping them to fulfill their God-given destiny.
              </p>

              <div className="bg-white rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                  What We Offer
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Monthly women's meetings with inspiring messages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Bible study groups and prayer circles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Mentorship and discipleship opportunities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Annual women's conferences and retreats
                    </span>
                  </li>
                </ul>
              </div>

              <CTAButton href="/contact" variant="primary" size="lg">
                Join Women of Worth
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Ministry */}
      <section id="children" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#3E6F1E]/10 text-[#3E6F1E] rounded-full font-semibold mb-4">
                Children's Ministry
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Children's Ministry
              </h2>
              <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                We believe that children are a precious gift from God and a
                vital part of our church family. Our children's ministry
                provides a safe, fun, and engaging environment where kids can
                learn about Jesus and grow in their faith.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#F5F5F5] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#3E6F1E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#3E6F1E]"
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
                  Bible Teaching
                </h3>
                <p className="text-[#6B7280]">
                  Age-appropriate lessons that make God's Word come alive
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#3E6F1E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#3E6F1E]"
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
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Fun Activities
                </h3>
                <p className="text-[#6B7280]">
                  Games, crafts, and activities that reinforce biblical truths
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#3E6F1E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[#3E6F1E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Safe Environment
                </h3>
                <p className="text-[#6B7280]">
                  Trained volunteers and secure check-in procedures
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3E6F1E] to-[#6FAF2E] rounded-3xl p-10 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Age Groups
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-lg font-semibold mb-1">Nursery</p>
                  <p className="text-sm opacity-90">0-2 years</p>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-1">Preschool</p>
                  <p className="text-sm opacity-90">3-5 years</p>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-1">Elementary</p>
                  <p className="text-sm opacity-90">6-12 years</p>
                </div>
              </div>
              <CTAButton href="/contact" variant="accent" size="lg">
                Register Your Child
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Worship & Music */}
      <section id="worship" className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#6FAF2E]/10 text-[#6FAF2E] rounded-full font-semibold mb-4">
                Worship Ministry
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                Worship & Music
              </h2>
              <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
                Our worship ministry is passionate about creating an atmosphere
                where God's presence is tangible and hearts are transformed. We
                believe worship is more than music—it's a lifestyle of honoring
                God in everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  Join the Team
                </h3>
                <p className="text-[#6B7280] mb-6">
                  Whether you're a vocalist, instrumentalist, or have a heart
                  for technical production, there's a place for you on our
                  worship team.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">Vocalists & Choir</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Instrumentalists (Keys, Guitar, Bass, Drums)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Sound & Technical Team
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">Media & Production</span>
                  </li>
                </ul>
                <CTAButton
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Join Worship Team
                </CTAButton>
              </div>

              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                  What We Believe
                </h3>
                <p className="text-[#6B7280] mb-6">
                  Worship is the heartbeat of our church. We create space for
                  authentic encounters with God through:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Spirit-led worship that honors God
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Excellence in musical presentation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Contemporary and traditional expressions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-[#6FAF2E] mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#6B7280]">
                      Creating atmosphere for God's presence
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] rounded-3xl p-10 text-white text-center">
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
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Rehearsals
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Join us for weekly rehearsals where we prepare our hearts and
                skills to lead God's people in worship
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  <span>Thursdays</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  <span>6:00 PM</span>
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
              Find Your Place
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every member is a minister. Discover where you can serve and make
              an impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="accent" size="lg">
                Get Involved
              </CTAButton>
              <CTAButton href="/visit" variant="secondary" size="lg">
                Visit Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
