import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';
import hero from "../public/images/hero.webp"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section (like screenshot) */}
        <section className="relative h-[60vh] min-h-150">
          <Image src={hero} alt="Gutter cleaning hero" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide leading-tight">
                  YOUR LOCAL GUTTER CLEANING & REPAIR SERVICE
                </h1>
                <p className="mt-4 text-blue-100 text-lg md:text-xl font-medium">
                  A local, Independently owned and operated franchise
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blue Feature Strip */}
        <section className="bg-blue-600 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Affordable Pricing */}
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <div>
                  <div className="text-lg font-bold">Competitive Pricing</div>
                  <div className="text-sm text-blue-100">Premium service at unbeatable rates</div>
                </div>
              </div>

              {/* 5-Star Rated */}
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 shrink-0 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div>
                  <div className="text-lg font-bold">5-Star Rated</div>
                  <div className="text-sm text-blue-100">Trusted by thousands of customers</div>
                </div>
              </div>

              {/* Award Winning */}
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div>
                  <div className="text-lg font-bold">Award Winning</div>
                  <div className="text-sm text-blue-100">Best Gutter Service 2020-2022</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Range Of Gutter Services */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            {/* Heading with side lines */}
            <div className="flex items-center gap-6 mb-10">
              <span className="hidden sm:block h-px bg-gray-300 flex-1" />
              <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-wide uppercase text-gray-900">
                Our Range Of Gutter Services
              </h2>
              <span className="hidden sm:block h-px bg-gray-300 flex-1" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Top row */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Gutter Cleaning</h3>
                <div className="relative aspect-4/3 rounded-md overflow-hidden shadow">
                  <Image src="/images/service_gutter_cleaning.png" alt="Gutter Cleaning" fill className="object-cover" />
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  Gutter Cleaning using the <span className="font-semibold">best, most powerful</span> gutter cleaning equipment available. Guaranteed results that no other gutter cleaning machine can keep up with. Lightweight carbon fibre poles allow us to clean gutter up-to 4 stories high, difficult gutter over conservatories.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Roof Cleaning & Moss Removal</h3>
                <div className="relative aspect-4/3 rounded-md overflow-hidden shadow">
                  <Image src="/images/service_roof_cleaning.png" alt="Roof Cleaning & Moss Removal" fill className="object-cover" />
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  <span className="font-semibold">Restore your roof</span> with expert roof cleaning and moss removal services. We clean moss off your roof safely using biocide treatment and low‑pressure methods. <span className="font-semibold">Eliminate moss</span>, protect your tiles, and <span className="font-semibold">improve kerb appeal</span>. Safe, effective, and no walking on your roof!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Exterior uPVC Cleaning</h3>
                <div className="relative aspect-4/3 rounded-md overflow-hidden shadow">
                  <Image src="/images/service_upvc_cleaning.png" alt="Exterior uPVC Cleaning" fill className="object-cover" />
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  Bring your property back to life with our <span className="font-semibold">AMAZING</span> exterior uPVC cleaning services. We can scrub up your gutter, soffits, fascias, conservatory roof, windows, doors, frames and sills using our onboard HOT, PURIFIED water to remove more dirt!
                </p>
              </div>
            </div>

            {/* Bottom row */}
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Free Gutter Inspection</h3>
                <div className="relative aspect-4/3 rounded-md overflow-hidden shadow">
                  <Image src="/images/service_gutter_inspection.png" alt="Free Gutter Inspection" fill className="object-cover" />
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  Get your roof and gutter checked by an expert with a <span className="font-semibold">FREE gutter inspection</span> by Max Gutter Cleaning. This popular gutter service ensures a thorough check of your roof and gutter which can help you identify any potential problems, and we can advise you how to put them right.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Gutter Repairs</h3>
                <div className="relative aspect-4/3 rounded-md overflow-hidden shadow">
                  <Image src="/images/service_gutter_repair.png" alt="Gutter Repairs" fill className="object-cover" />
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  Max Gutter Cleaning has a reputation for fixing leaking and damaged gutter quickly. Our gutter repair service is always in <span className="font-semibold">high demand</span> as we are one of the few companies that provide you with <span className="font-semibold">12 months guarantee</span> for any gutter repair.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Gutter Installation</h3>
                <div className="relative aspect-4/3 rounded-md overflow-hidden shadow">
                  <Image src="/images/service_gutter_installation.png" alt="Gutter Installation" fill className="object-cover" />
                </div>
                <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                  A new rainwater guttering system installed to <span className="font-semibold">perfection</span>. Max Gutter Cleaning are registered installers of FreeFoam Plastics allowing us to supply and install quality uPVC gutter and down-pipes to the highest standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Intro */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-wide uppercase text-gray-900">
              Professional Gutter Services
            </h2>
            <div className="mt-6 max-w-4xl mx-auto text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Welcome to Max Gutter Cleaning your <span className="font-semibold">local</span> gutter cleaning and repair service. We are a hugely popular gutter maintenance company,
                known for our <span className="font-semibold">extremely high standard</span> of work at <span className="font-semibold">surprisingly low prices</span>, that beat many of our competitors. We are <span className="font-semibold">highly trained</span>
                and <span className="font-semibold">fully equipped</span>, and take pride in what we do. Due to high demand we continue to extend our <span className="font-semibold">Award Winning</span> gutter services across
                the United Kingdom. Furthermore, our franchise <span className="font-semibold">teams are local</span>, independently owned and operated.
              </p>
              <div className="flex justify-center">
                <Link href="/quote" className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-md shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 0c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z" />
                  </svg>
                  Find Your Local Team
                </Link>
              </div>
            </div>
          </div>

          {/* Notch Divider */}
          <div className="relative h-0">
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-0 h-0 border-l-16 border-r-16 border-t-16 border-l-transparent border-r-transparent border-t-white" />
          </div>
        </section>

        {/* Help Cards */}
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14">
            <h3 className="text-center text-2xl md:text-3xl font-bold text-white">How Can We Help You?</h3>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Inspect */}
              <div className="bg-white text-gray-900 rounded-md p-8 shadow">
                <div className="mx-auto w-24 h-24 mb-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-center">Inspect</h4>
                <p className="mt-3 text-center text-sm text-gray-600">Informative roof, gutter and drain inspections to see what’s happening.</p>
              </div>

              {/* Unblock */}
              <div className="bg-white text-gray-900 rounded-md p-8 shadow">
                <div className="mx-auto w-24 h-24 mb-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-center">Unblock</h4>
                <p className="mt-3 text-center text-sm text-gray-600">PROFESSIONAL gutter cleaning using powerful equipment.</p>
              </div>

              {/* Repair */}
              <div className="bg-white text-gray-900 rounded-md p-8 shadow">
                <div className="mx-auto w-24 h-24 mb-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-center">Repair</h4>
                <p className="mt-3 text-center text-sm text-gray-600">GUARANTEED gutter repairs completed by trained experts.</p>
              </div>

              {/* Clean */}
              <div className="bg-white text-gray-900 rounded-md p-8 shadow">
                <div className="mx-auto w-24 h-24 mb-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h4l2 3h7a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-center">Clean</h4>
                <p className="mt-3 text-center text-sm text-gray-600">Incredible exterior cleaning using HOT, PURIFIED water.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Work */}
        <section className="py-16 lg:py-24 bg-linear-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Recent Work
                </h2>
                <p className="text-lg text-gray-600">
                  See the Max difference
                </p>
              </div>
              {/* <Link href="/work" className="hidden lg:inline-flex items-center gap-2 text-cyan-600 font-semibold text-lg hover:gap-3 transition-all">
                See All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link> */}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group cursor-pointer">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src="/images/recent_work_manchester.png"
                    alt="Full Clearance - Manchester"
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Full Gutter Clearance</h3>
                <p className="text-gray-600 text-center">Birmingham • 2 days ago</p>
              </div>

              <div className="group cursor-pointer">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src="/images/recent_work_bristol.png"
                    alt="Commercial Cleaning - Bristol"
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Commercial Building Clean</h3>
                <p className="text-gray-600 text-center">Birmingham • 3 days ago</p>
              </div>

              <div className="group cursor-pointer">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src="/images/recent_work_liverpool.png"
                    alt="Leak Repair - Liverpool"
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Gutter Leak Repair</h3>
                <p className="text-gray-600 text-center">Birmingham • 5 days ago</p>
              </div>

              <div className="group cursor-pointer">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src="/images/recent_work_leeds.png"
                    alt="Roof Cleaning & Moss Removal"
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Roof Cleaning & Moss Removal</h3>
                <p className="text-gray-600 text-center">Birmingham • 1 week ago</p>
              </div>

              <div className="group cursor-pointer">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src="/images/recent_work_birmingham.png"
                    alt="Gutter Guard Installation"
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Gutter Guard Installation</h3>
                <p className="text-gray-600 text-center">Birmingham • 1 week ago</p>
              </div>

              <div className="group cursor-pointer">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image
                    src="/images/recent_work_sheffield.png"
                    alt="New Gutter System Installation"
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Complete Gutter System</h3>
                <p className="text-gray-600 text-center">Birmingham • 10 days ago</p>
              </div>
            </div>
            <div className="mt-8 text-center lg:hidden">
              <Link href="/work" className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-lg hover:gap-3 transition-all">
                See All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Max?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to delivering exceptional gutter cleaning services with professionalism and reliability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Fully Insured */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.062v6.006a3.066 3.066 0 01-3.062 3.062H4.033a3.066 3.066 0 01-3.063-3.062V6.517a3.066 3.066 0 012.812-3.062zM9 11a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Fully Insured</h4>
                <p className="text-gray-600">Peace of mind with comprehensive public liability insurance covering all our work.</p>
              </div>

              {/* Local Experts */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Local Experts</h4>
                <p className="text-gray-600">Proudly serving our local community with prompt, reliable service and deep local knowledge.</p>
              </div>

              {/* Satisfaction Guarantee */}
              <div className="text-center">
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
        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Brilliant job, looks brand new! The team was super professional and quick."</p>
                <p className="text-gray-600 font-semibold">- Sarah, Birmingham</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Excellent service! Fixed our leak problem and cleaned everything perfectly."</p>
                <p className="text-gray-600 font-semibold">- John, Birmingham</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"Best gutter cleaning service we've used. Highly recommend for commercial properties."</p>
                <p className="text-gray-600 font-semibold">- Emma, Birmingham</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

