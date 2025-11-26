import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-6 rounded-3xl border border-stone-200 bg-white/80 p-10 shadow-xl">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold tracking-widest text-amber-600">PRIVACY POLICY</p>
            <h1 className="text-4xl font-bold text-stone-900">How Mittal Timbers Traders Protects Your Data</h1>
            <p className="text-stone-600">
              Updated November 2025 · Committed to transparency and responsible data handling.
            </p>
          </div>

          <div className="space-y-4 text-stone-700">
            <p>
              Mittal Timbers Traders collects only the information necessary to answer your inquiries, book services,
              and improve your experience across our digital presence. We respect your choices and make every effort to
              keep the details you share with us secure.
            </p>
            <h2 className="text-2xl font-semibold text-stone-900">Information We Collect</h2>
            <p>
              We receive your name, email, phone number, and project brief when you contact us through a form,
              WhatsApp link, or phone call. Web analytics only captures anonymized usage data such as device type,
              referral page, and interaction timestamps.
            </p>
            <h2 className="text-2xl font-semibold text-stone-900">How We Use It</h2>
            <p>
              Your information is used to respond to requests, coordinate quotes, or schedule site visits. It helps us
              stay in touch with you about updates to our product catalogue, events, and promotions that support your
              requirements.
            </p>
            <h2 className="text-2xl font-semibold text-stone-900">Third-Party Services</h2>
            <p>
              We rely on secure third-party providers for email, hosting, and analytics. These providers are contractually
              bound to safeguard personal data and may only use it to deliver the services we ask them to perform.
            </p>
            <h2 className="text-2xl font-semibold text-stone-900">Your Rights</h2>
            <p>
              You can request a copy of the data we hold about you, ask for corrections, or request that we stop using
              your contact details for marketing. Reach out to us at{' '}
              <Link href="/contact" className="font-semibold text-amber-600 hover:text-amber-500">
                Contact Us
              </Link>{' '}
              to discuss your preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


