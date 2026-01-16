import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-6">
                About Max Gutter Cleaning
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-medium">
                Your trusted local experts in gutter maintenance and exterior cleaning
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Welcome to <span className="font-semibold">Max Gutter Cleaning</span>, your local gutter cleaning and repair service. 
                    We are a hugely popular gutter maintenance company, known for our <span className="font-semibold">extremely high standard</span> of 
                    work at <span className="font-semibold">surprisingly low prices</span> that beat many of our competitors.
                  </p>
                  <p>
                    We are <span className="font-semibold">highly trained</span> and <span className="font-semibold">fully equipped</span>, 
                    and take pride in what we do. Due to high demand we continue to extend our <span className="font-semibold">Award Winning</span> gutter 
                    services across the United Kingdom.
                  </p>
                  <p>
                    Our franchise <span className="font-semibold">teams are local</span>, independently owned and operated, ensuring you receive 
                    personalized service from people who truly care about their community and reputation.
                  </p>
                </div>
              </div>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/service_gutter_cleaning.png" alt="Max team at work" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Award Winning Service
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Recognized for excellence in the gutter cleaning industry
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
              <svg className="w-20 h-20 mx-auto mb-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                SME Best Gutter Cleaning & Repair Company
              </h3>
              <p className="text-xl text-gray-600">2020, 2021 & 2022</p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence drives everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Low Prices</h4>
                <p className="text-gray-600">Industry-leading prices without compromising on quality or service.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h4>
                <p className="text-gray-600">12-month guarantee on repairs and 100% satisfaction on all services.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Professional Equipment</h4>
                <p className="text-gray-600">The most powerful gutter cleaning equipment available in the industry.</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Trained Experts</h4>
                <p className="text-gray-600">Highly trained professionals with years of experience and expertise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Serving Communities Across the UK
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Our local franchises provide expert gutter services throughout the United Kingdom
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-blue-100 text-lg">Cities Served</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-blue-100 text-lg">Happy Customers</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-blue-100 text-lg">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Max?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to delivering exceptional gutter cleaning services with professionalism and reliability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Fully Insured */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.006a3.066 3.066 0 01-3.062 3.062H4.033a3.066 3.066 0 01-3.063-3.062V6.517a3.066 3.066 0 012.812-3.062zM9 11a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h4>
                <p className="text-gray-600">Peace of mind with comprehensive public liability insurance covering all our work.</p>
              </div>

              {/* Local Experts */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Local Experts</h4>
                <p className="text-gray-600">Proudly serving our local community with prompt, reliable service and deep local knowledge.</p>
              </div>

              {/* Satisfaction Guarantee */}
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guarantee</h4>
                <p className="text-gray-600">We don't leave until you're 100% happy with our work. Your satisfaction is guaranteed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience the Max Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free quote today and discover why thousands of customers trust Max for their gutter needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-md shadow-lg text-lg transition">
                Get Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-8 py-4 rounded-md shadow text-lg transition">
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
