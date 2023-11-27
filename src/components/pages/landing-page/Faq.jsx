import React, { useState } from 'react'

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    // useState
  
    return (
      <div className="border rounded shadow-sm">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-gray-600 transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };


export default function Faq() {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div class="flex flex-col mb-16 sm:text-center">
            <a href="/" class="mb-6 sm:mx-auto">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100">
                <svg
                    class="w-10 h-10 text-[#0A7DCF]"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                >
                    <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                </svg>
                </div>
            </a>
            <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span class="relative inline-block">
                    <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[#0A7DCF] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                    <defs>
                        <pattern
                        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                        >
                        <circle cx="1" cy="1" r=".7" />
                        </pattern>
                    </defs>
                    <rect
                        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                        width="52"
                        height="24"
                    />
                    </svg>
                    <span class="relative">Your</span>
                </span>{' '}
                 Questions Answered: HealthConnect FAQs
                </h2>
                <p class="text-base text-gray-700 md:text-lg">
                Got questions about HealthConnect? We've compiled a list of frequently asked questions to help you better understand our platform, its features, and how it can transform your healthcare experience. Browse through our FAQs for quick and clear answers to your queries."
                </p>
            </div>
            </div>
            <div class="space-y-4">
            <Item title="What is HealthConnect?">
                HealthConnect is a digital platform designed to simplify communication and management between patients, doctors, and pharmacies, streamlining the healthcare process
            </Item>
            <Item title="How does HealthConnect protect my privacy?">
                We prioritize your privacy with top-notch security measures, ensuring all personal health information shared on our platform is encrypted and accessible only to authorized individuals.
            </Item>
            <Item title="Can I schedule appointments with my doctor through HealthConnect?">
               Yes, HealthConnect allows you to easily schedule and manage appointments with your healthcare provider directly through the platform.
            </Item>
            <Item title="How does the medication reminder feature work?">
               Our medication reminder feature sends you notifications for your medication times based on the schedule set by you or your doctor, ensuring you never miss a dose.
            </Item>
             <Item title="Is HealthConnect integrated with local pharmacies?">
               Yes, HealthConnect is integrated with a network of pharmacies, allowing for seamless prescription transfers and refills
            </Item>
             <Item title="Is there a cost to use HealthConnect?">
              - HealthConnect offers various subscription plans. There's a basic free version, and premium features are available through paid plans. Details can be found on our pricing page
            </Item>
            </div>
        </div>
        </div>
    );
}
