"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    isPrayerRequest: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        isPrayerRequest: false,
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#3E6F1E] to-[#6FAF2E] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp">
              Get in Touch
            </h1>
            <p
              className="text-xl md:text-2xl opacity-90 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              We'd love to hear from you. Reach out with questions, prayer
              requests, or just to say hello!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
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
                    <h3 className="font-bold text-[#1A1A1A] mb-1">Address</h3>
                    <p className="text-[#6B7280]">
                      4 Usiefrun Road
                      <br />
                      Opposite Alaba Waterside Junction
                      <br />
                      Orhuwhorun, Delta State
                      <br />
                      Nigeria
                    </p>
                    <p className="text-sm text-[#6FAF2E] mt-2 font-semibold">
                      Plus Code: GR6P+5RG
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">Email</h3>
                    <p className="text-[#6B7280]">
                      Use the contact form to reach us
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">
                      Office Hours
                    </h3>
                    <p className="text-[#6B7280]">
                      Monday - Friday: 9:00 AM - 4:00 PM
                      <br />
                      Saturday: By Appointment
                      <br />
                      Sunday: Service Times
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                  Connect on Social Media
                </h3>
                <p className="text-[#6B7280] mb-6">
                  Follow us for updates, inspiration, and community
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/sharonhouselive"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#6FAF2E] hover:bg-[#3E6F1E] rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6"
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
                    className="w-12 h-12 bg-[#6FAF2E] hover:bg-[#3E6F1E] rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-6 h-6"
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
                    className="w-12 h-12 bg-[#6FAF2E] hover:bg-[#3E6F1E] rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110"
                    aria-label="YouTube"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FAF2E] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FAF2E] focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FAF2E] focus:border-transparent outline-none transition-all"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FAF2E] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="visit">Planning a Visit</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="ministry">Ministry Involvement</option>
                    <option value="giving">Giving Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1A1A1A] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FAF2E] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {/* Prayer Request Checkbox */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="isPrayerRequest"
                    name="isPrayerRequest"
                    checked={formData.isPrayerRequest}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#6FAF2E] border-gray-300 rounded focus:ring-[#6FAF2E] mt-0.5"
                  />
                  <label
                    htmlFor="isPrayerRequest"
                    className="ml-3 text-sm text-[#6B7280]"
                  >
                    This is a prayer request. Please pray for me/us.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-[#6FAF2E] text-white font-semibold rounded-full hover:bg-[#5A9625] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Find Us
              </h2>
              <p className="text-lg text-[#6B7280]">
                We're located in Orhuwhorun, Delta State, Nigeria
              </p>
            </div>

            <div className="bg-white rounded-3xl p-4 shadow-xl">
              <div className="aspect-video bg-[#F5F5F5] rounded-2xl overflow-hidden">
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
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#6FAF2E] to-[#3E6F1E] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We'd Love to Meet You!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us this Sunday and experience the warmth of our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/visit"
                className="inline-block px-8 py-4 bg-[#C62828] text-white font-semibold rounded-full hover:bg-[#A52020] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Plan Your Visit
              </a>
              <a
                href="/media"
                className="inline-block px-8 py-4 bg-[#3E6F1E] text-white font-semibold rounded-full hover:bg-[#2F5516] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Watch Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
