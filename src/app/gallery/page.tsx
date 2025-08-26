"use client";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Gallery images array with custom dimensions
const galleryImages = [
  {
    id: "gallery-3",
    src: "/assets/images/gallery/3.jpg",
    alt: "Timber product showcase",
    caption: "Premium timber quality showcase"
  },
  {
    id: "gallery-4",
    src: "/assets/images/gallery/4.jpg",
    alt: "Timber craftsmanship",
    caption: "Expert craftsmanship in timber"
  },
  {
    id: "gallery-5",
    src: "/assets/images/gallery/5.jpg",
    alt: "Timber finishing",
    caption: "Professional timber finishing"
  },
  {
    id: "gallery-6",
    src: "/assets/images/gallery/6.jpg",
    alt: "Timber texture detail",
    caption: "Natural timber texture detail"
  },
  {
    id: "gallery-7",
    src: "/assets/images/gallery/7.jpg",
    alt: "Timber grain pattern",
    caption: "Beautiful timber grain pattern"
  },
  {
    id: "gallery-8",
    src: "/assets/images/gallery/8.jpg",
    alt: "Timber product display",
    caption: "Timber product display"
  },
  {
    id: "gallery-9",
    src: "/assets/images/gallery/9.jpg",
    alt: "Timber workshop",
    caption: "Timber workshop environment"
  },
  {
    id: "gallery-11",
    src: "/assets/images/gallery/11.jpg",
    alt: "Timber selection",
    caption: "Wide timber selection"
  },
  {
    id: "gallery-12",
    src: "/assets/images/gallery/12.jpg",
    alt: "Timber quality",
    caption: "Premium timber quality"
  },
  {
    id: "gallery-17",
    src: "/assets/images/gallery/17.jpg",
    alt: "Timber processing",
    caption: "Timber processing facility"
  },
  {
    id: "gallery-18",
    src: "/assets/images/gallery/18.jpg",
    alt: "Timber storage",
    caption: "Organized timber storage"
  },
  {
    id: "gallery-19",
    src: "/assets/images/gallery/19.png",
    alt: "Timber showcase",
    caption: "Timber product showcase"
  },
  {
    id: "gallery-20",
    src: "/assets/images/gallery/20.png",
    alt: "Timber display",
    caption: "Elegant timber display"
  },
  {
    id: "gallery-21",
    src: "/assets/images/gallery/21.png",
    alt: "Timber collection",
    caption: "Timber collection overview"
  }
];

export default function GalleryPage() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-600/10"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="woodGrain" patternUnits="userSpaceOnUse" width="120" height="60"><path d="M0,30 Q30,10 60,30 T120,30" stroke="%23A0522D" stroke-width="0.5" fill="none" opacity="0.3"/></pattern></defs><rect fill="url(%23woodGrain)" width="1920" height="1080"/></svg>')`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-8">
              <span className="text-amber-400 font-bold text-sm tracking-wider">
                SHOWCASE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              OUR{" "}
              <span className="text-gradient bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                GALLERY
              </span>
            </h1>
            <p className="text-md md:text-xl text-stone-200 max-w-4xl mx-auto leading-relaxed">
              Explore our collection of premium timber products and successful
              projects - where craftsmanship meets excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {galleryImages.map((image) => (
                <a
                  key={image.id}
                  href={image.src}
                  className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 col-span-1 row-span-1`}
                  data-src={image.src}
                  data-alt={image.alt}
                  data-sub-html={image.caption}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 aspect-square"
                    loading="lazy"
                  />
                  {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.caption}
                      </p>
                    </div>
                  </div> */}
                </a>
              ))}
            </div>
          </LightGallery>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-transparent to-amber-600/10"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23D2691E" fill-opacity="0.3"><circle cx="60" cy="60" r="30" stroke="%23D2691E" stroke-width="1" fill="none"/></g></svg>')`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fade-in-up">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Interested in Our{" "}
              <span className="text-gradient bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Products?
              </span>
            </h3>
            <p className="text-xl text-stone-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us to learn more about our products and discover how they
              can elevate your next project to new heights of quality and
              beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-amber-700 hover:via-amber-800 hover:to-amber-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Contact Us</span>
              </Link>
              <Link
                href="/products"
                className="border-2 border-white/80 text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-stone-800 backdrop-blur-sm transition-all duration-300 hover:border-amber-400"
              >
                View Products <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
