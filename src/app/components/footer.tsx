import Image from 'next/image';
import React from 'react';
import payment from "../iamges/img.png"
import Link from 'next/link';

const Footer = () => {
  return (
    <><footer className="bg-gray-100 py-8 font-sans bg-[#FFCFB3]" data-aos="fade-up"
    data-aos-duration="3000">
          <div className="container mx-auto px-4">
              {/* Top Section */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Customer Care */}
                  <div>
                      <h4 className="text-lg font-bold mb-4">Customer Care</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                          <li>Help Center</li>
                          <li>How to Buy</li>
                          <li>Corporate & Bulk Purchasing</li>
                          <li>Returns & Refunds</li>
                          <li>Trendify Shop</li>
                          <li>Contact Us</li>
                          <li>Purchase Protection</li>
                          <li>Trendify Pick up Points</li>
                      </ul>
                  </div>

                  {/* Trendify */}
                  <div>
                      <h4 className="text-lg font-bold mb-4">Trendify</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                          <li>About Us</li>
                          <li>Digital Payments</li>
                          <li>Trendify Donates</li>
                          <li>Trendify Blog</li>
                          <li>Terms & Conditions</li>
                          <li>Privacy Policy</li>
                          <li>Online Shopping App</li>
                          <li>Trendify Exclusive</li>
                          <li>Sell on Trendify</li>
                          <li>Join Trendify Affiliate Program</li>
                      </ul>
                  </div>

                  {/* Download App */}
                  <div className="col-span-1 md:col-span-2">
                      <h4 className="text-lg font-bold mb-4">Happy Shopping</h4>
                      <p className="text-sm text-gray-600 mb-4">Download App</p>
                      <div className="flex space-x-4">
                          <Image
                              src="https://img.lazcdn.com/us/domino/2db6633b-c83c-48b7-9f7d-1262ee87cc80_PK-126-42.png"
                              alt="App Store"
                              width={200}
                              height={200}
                              className="w-32" />
                          <Image
                              src="https://img.lazcdn.com/us/domino/4812f06f-072d-45be-a930-640edf4caeee_PK-126-42.png"
                              alt="Google Play"
                              height={200}
                              width={200}
                              className="w-32" />
                          <Image
                              src="https://img.lazcdn.com/us/domino/7d216fe8-1bac-4ac9-81d3-072a9fbf32fc_PK-126-42.png"
                              alt="App Gallery"
                              height={200}
                              width={200}
                              className="w-32" />
                      </div>
                  </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 my-6"></div>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                  {/* Payment Methods */}
                  <div className="flex space-x-6">
                      <Image
                          src={payment}
                          alt="Payment Methods"
                          className="h-16" />
                  </div>

                  {/* Verified By */}
                  <div className="mt-4 md:mt-0">
                      <h4 className="text-sm text-gray-600 font-medium">Verified by</h4>
                      <Image
                          src="https://img.drz.lazcdn.com/g/tps/imgextra/i4/O1CN01ZaMORP1I3qlBom0V2_!!6000000000838-2-tps-73-41.png"
                          alt="Verified by PCI DSS"
                          height={200}
                          width={200}
                          className="h-16" />
                  </div>
              </div>
          </div>
      </footer>
      <footer className="text-gray-600 body-font font-sans bg-[#FFCFB3]">
              <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                  <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                      <span className="ml-3 text-xl font-bold">Tredify</span>
                  </a>
                  <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                      © 2024 Trendify —
                      <a
                          href="https://twitter.com/knyttneve"
                          className="text-gray-600 ml-1"
                          rel="noopener noreferrer"
                          target="_blank"
                      >
                          meoahsan01@gmail.com
                      </a>
                  </p>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <Link href="https://www.linkedin.com/in/ahsan-adil-48522b290/" className="ml-3 text-gray-500">
                  <svg
                              fill="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                          >
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                      </Link>
                      <Link href="https://www.linkedin.com/in/ahsan-adil-48522b290/" className="ml-3 text-gray-500">
                          <svg
                              fill="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                          >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                      </Link>
                      <Link href="https://www.linkedin.com/in/ahsan-adil-48522b290/" className="ml-3 text-gray-500">
                          <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                          >
                              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                          </svg>
                      </Link>
                      <Link href="https://www.linkedin.com/in/ahsan-adil-48522b290/" className="ml-3 text-gray-500">
                          <svg
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={0}
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                          >
                              <path
                                  stroke="none"
                                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                              <circle cx={4} cy={4} r={2} stroke="none" />
                          </svg>
                      </Link>
                  </span>
              </div>
          </footer></>
  
  );
};


export default Footer;
