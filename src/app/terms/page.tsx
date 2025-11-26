import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6 rounded-3xl border border-stone-200 bg-white/80 p-10 shadow-xl">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold tracking-widest text-amber-600">TERMS & CONDITIONS</p>
            <h1 className="text-4xl font-bold text-stone-900">Using Mittal Timbers Traders Digital Services</h1>
            <p className="text-stone-600">
              Last reviewed November 2025 · Please read carefully before engaging with our website or requesting services.
            </p>
          </div>

          <div className="space-y-4 text-stone-700">
            <h2 className="text-2xl font-semibold text-stone-900">Scope</h2>
            <p>
              These terms govern your access to the Mittal Timbers Traders website, marketing communication, and any
              digital tools we provide. By browsing our pages or sending us a message, you agree to the terms stated here.
            </p>
            <h2 className="text-2xl font-semibold text-amber-600">Service Estimations</h2>
            <p>
              All product pricing, availability, and service timelines provided online are estimates. Final quotations
              are confirmed in writing after we evaluate the project scope, material availability, and any logistical
              requirements.
            </p>
            <h2 className="text-2xl font-semibold text-stone-900">Intellectual Property</h2>
            <p>
              All text, imagery, graphics, and logos displayed on this site belong to Mittal Timbers Traders or its
              licensors. You may not reproduce, distribute, or modify these assets without written consent.
            </p>
            <h2 className="text-2xl font-semibold text-stone-900">Limitation of Liability</h2>
            <p>
              While we strive for accuracy, we are not liable for typographical errors or interruptions caused by
              third-party services. Your use of the website and any decisions made thereafter remain at your discretion.
            </p>
            <p>
              Questions? Visit our{' '}
              <Link href="/contact" className="font-semibold text-amber-600 hover:text-amber-500">
                contact page
              </Link>{' '}
              or reach us at +91 9318483152 / +91 9811424164.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


