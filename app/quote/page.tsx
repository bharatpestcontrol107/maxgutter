'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type PropertyType = 'Terraced' | 'Semi-Detached' | 'Detached' | 'Other';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    postcode: '',
    address: '',
    propertyType: 'Terraced' as PropertyType,
    notes: '',
    date: '',
    time: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Thank you! We\'ll contact you shortly with your free quote.');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          postcode: '',
          address: '',
          propertyType: 'Terraced',
          notes: '',
          date: '',
          time: ''
        });
      } else {
        alert('Sorry, there was an error submitting your request. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const propertyTypes: PropertyType[] = ['Terraced', 'Semi-Detached', 'Detached', 'Other'];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-6">
                Get Your Free Quote
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-medium">
                Fill out the details below for a fast, free quote
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-8 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-6 lg:p-12">
              {/* Your Details */}
              <div className="mb-8 lg:mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Your Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="e.g. John Smith"
                      className="w-full px-4 py-3 lg:py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 lg:py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+44 7123 456 789"
                      className="w-full px-4 py-3 lg:py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Property Location */}
              <div className="mb-8 lg:mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Property Location
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label htmlFor="postcode" className="block text-sm font-semibold text-gray-900 mb-2">
                      Postcode
                    </label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        id="postcode"
                        value={formData.postcode}
                        onChange={(e) => handleInputChange('postcode', e.target.value)}
                        placeholder="SW1A 1AA"
                        className="flex-1 px-4 py-3 lg:py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition text-gray-900 placeholder-gray-400"
                        required
                      />
                      <button
                        type="button"
                        className="px-6 lg:px-8 py-3 lg:py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition"
                      >
                        Find
                      </button>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="e.g. 10 Downing Street"
                      className="w-full px-4 py-3 lg:py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition text-gray-900 placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <div className="mb-8 lg:mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Job Details
                </h3>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-4">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleInputChange('propertyType', type)}
                        className={`p-6 lg:p-8 rounded-2xl border-2 transition ${
                          formData.propertyType === type
                            ? 'border-cyan-500 bg-cyan-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            formData.propertyType === type ? 'bg-cyan-500' : 'bg-gray-200'
                          }`}>
                            {type === 'Terraced' && (
                              <svg className={`w-6 h-6 ${formData.propertyType === type ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                            )}
                            {type === 'Semi-Detached' && (
                              <svg className={`w-6 h-6 ${formData.propertyType === type ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                            )}
                            {type === 'Detached' && (
                              <svg className={`w-6 h-6 ${formData.propertyType === type ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                              </svg>
                            )}
                            {type === 'Other' && (
                              <svg className={`w-6 h-6 ${formData.propertyType === type ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-sm font-semibold ${
                            formData.propertyType === type ? 'text-cyan-600' : 'text-gray-700'
                          }`}>
                            {type}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-gray-900 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Any specific issues like blocked downpipes or conservatory gutter?"
                    rows={4}
                    className="w-full px-4 py-3 lg:py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="mb-8 lg:mb-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Preferred Date & Time
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="w-full px-4 py-3 lg:py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="w-full px-4 py-3 lg:py-4 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:outline-none transition text-gray-900"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 lg:py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Request
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Free no-obligation quote</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Rated 5 Stars</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Book with Max?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600">We'll contact you within 2 hours with your quote</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h3>
                <p className="text-gray-600">£5 million public liability insurance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5-Star Rated</h3>
                <p className="text-gray-600">Trusted by thousands of customers</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

