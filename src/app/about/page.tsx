export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Mittal Timbers</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Your trusted partner in premium timber solutions since 1995.
          </p>
        </div>

        {/* Company Overview */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Story</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded in 1995, Mittal Timbers has grown from a small family business to one of the leading timber
                suppliers in the region. Our commitment to quality and customer satisfaction has been the cornerstone
                of our success.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Over the years, we have expanded our product range and services while maintaining the highest standards
                of quality and reliability. Today, we serve customers across the country with a comprehensive range of
                timber products and solutions.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Mission</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                To provide our customers with the highest quality timber products while maintaining sustainable
                practices and contributing positively to the environment and society.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-56 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                Quality
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  We are committed to providing only the highest quality timber products, sourced from sustainable
                  forests and processed with precision.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                Sustainability
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Our commitment to environmental responsibility drives us to source timber from sustainable forests
                  and implement eco-friendly practices throughout our operations.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                Customer Focus
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  We prioritize our customers' needs, providing expert guidance and support to help them find the
                  perfect timber solutions for their projects.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Team */}
        <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-56 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Leadership Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our experienced team of professionals brings decades of combined expertise in the timber industry.
            We work together to ensure that every customer receives the best possible service and products.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {/* Add team members here */}
          </div>
        </div>

        {/* Certifications */}
        <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-56 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Certifications & Standards</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We maintain the highest standards of quality and safety in our operations, as evidenced by our
            certifications and compliance with industry standards.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {/* Add certifications here */}
          </div>
        </div>
      </div>
    </div>
  )
} 