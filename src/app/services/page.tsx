import Link from 'next/link'

export default function Services() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Comprehensive timber solutions tailored to your needs.
          </p>
        </div>

        {/* Main Services */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Custom Milling
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Our state-of-the-art milling facility allows us to create custom timber products according to your
                  specifications. We handle everything from basic cutting to complex shaping and finishing.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Timber Importing
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  We source premium timber from around the world, ensuring the highest quality materials for your
                  projects. Our global network of suppliers allows us to offer a wide variety of wood species.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Project Supply
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  We provide comprehensive timber supply solutions for construction and furniture projects of any
                  scale. Our team ensures timely delivery and quality control throughout the process.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Additional Services */}
        <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-56 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Additional Services</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Consultation</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Our experts provide professional guidance on timber selection, project planning, and technical
                specifications to ensure the best results for your project.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Quality Control</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                We maintain strict quality control measures throughout our supply chain, ensuring that every product
                meets our high standards and your requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Technical Support</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Our technical team provides ongoing support and assistance for all your timber-related needs,
                from installation to maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-56 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Process</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">1. Consultation</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                We begin by understanding your requirements and project specifications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">2. Planning</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Our team develops a detailed plan and timeline for your project.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">3. Execution</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                We implement the plan with precision and attention to detail.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">4. Quality Check</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Every project undergoes thorough quality control before delivery.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto mt-32 max-w-2xl text-center sm:mt-40 lg:mt-56">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Ready to Get Started?</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Contact us today to discuss your project requirements and how we can help.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Contact Us
            </Link>
            <Link href="/products" className="text-sm font-semibold leading-6 text-gray-900">
              View Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 