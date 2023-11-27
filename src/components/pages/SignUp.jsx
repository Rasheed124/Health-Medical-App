import React from "react";

import { FaApple, FaEye, FaGoogle } from "react-icons/fa";


const Signup = () => {
  const countries = [
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BR", label: "Brazil" },
    { value: "BN", label: "Brunei" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "CV", label: "Cape Verde" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CO", label: "Colombia" },
    { value: "KM", label: "Comoros" },
    { value: "CG", label: "Congo" },
    { value: "CR", label: "Costa Rica" },
    { value: "HR", label: "Croatia" },
    { value: "CU", label: "Cuba" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "TL", label: "East Timor" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "ET", label: "Ethiopia" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GR", label: "Greece" },
    { value: "GD", label: "Grenada" },
    { value: "GT", label: "Guatemala" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HN", label: "Honduras" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran" },
    { value: "IQ", label: "Iraq" },
    { value: "IE", label: "Ireland" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "CI", label: "Ivory Coast" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Laos" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MK", label: "North Macedonia" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia" },
    { value: "MD", label: "Moldova" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "ME", label: "Montenegro" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "KP", label: "North Korea" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PW", label: "Palau" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "QA", label: "Qatar" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russia" },
    { value: "RW", label: "Rwanda" },
    { value: "WS", label: "Samoa" },
    { value: "SM", label: "San Marino" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbia" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "KR", label: "South Korea" },
    { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SZ", label: "Swaziland" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syria" },
    { value: "TW", label: "Taiwan" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania" },
    { value: "TH", label: "Thailand" },
    { value: "TG", label: "Togo" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VA", label: "Vatican City" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Vietnam" },
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" },
  ];

  return (
    <div className="px-6">
      <div className="py-6  px-6 lg:px-10">
        <div className="max-w-3xl lg:max-w-6xl mx-auto">
          <h5 className="font-semibold text-[20px] text-[#0a7dcf]">
            Health<span className="text-[#53d2e3]">Connect</span>
          </h5>
        </div>
      </div>

      <div className="p-5 shadow-[5px_5px_20px_0_rgba(0,0,0,0.4)] max-w-2xl mx-auto rounded-[50px]  flex-col flex mb-[60px] bg-gradient-to-b from-white via-white via-90% to-[#53d2e3]">
        <h2 className="text-[2.5rem] mx-auto mt-[20px] mb-[35px] font-semibold tracking-[2px] leading-[1.1] text-[#101010]">
          Sign Up
        </h2>
        <div className="w-full max-w-[500px] mx-auto">
          <button className="w-full mx-auto text-sm bg-white border justify-center text-[#101010] border-[#949494]  flex items-center rounded-full p-4 mb-4">
            <FaApple className="text-[20px]" />
            <div className="ml-[5px]">Continue with Apple</div>
          </button>
          <button className="w-full mx-auto text-sm bg-[#0a7dcf] hover:bg-blue-500 flex items-center rounded-full p-2 text-white mb-2">
            <div className="flex p-2 items-center jusitfy-center rounded-full bg-white">
              <FaGoogle className="text-red-900 text-center text-xl  " />
            </div>
            <div className="mx-auto">Continue with Google</div>
          </button>

          <div className="relative flex items-center my-4">
            <div class="flex-grow border-t border-[#101010]"></div>
            <span class="flex-shrink mx-4 font-bold text-[#101010] text-xs">
              Or
            </span>
            <div class="flex-grow border-t border-[#101010]"></div>
          </div>

          <div className="w-full">
            <form>
              <div className="grid grid-cols-2 mb-4">
                <input
                  name="text"
                  type="text"
                  placeholder="First Name"
                  className="w-[95%] px-2 pl-3 py-2 border border-[#949494] outline-none rounded-full  placeholder-grey-350  "
                ></input>
                <input
                  name="text"
                  type="text"
                  placeholder="Last Name"
                  className="w-[95%] pl-3 place-self-end px-2 py-2 border border-[#949494] outline-none rounded-full  placeholder-grey-350  "
                ></input>
              </div>
              <input
                name="text"
                type="email"
                placeholder="Email address"
                className="w-full px-2 pl-3 py-2 border border-[#949494] outline-none rounded-full  placeholder-grey-350 mb-4 "
              ></input>
              <div className="relative">
                <input
                  name="password"
                  type="password"
                  placeholder="Password ( 8 or more characters )"
                  className="w-full px-2 pl-3 py-2 border  border-[#949494] outline-none rounded-full  placeholder-grey-350 mb-4 "
                ></input>{" "}
                <FaEye className=" absolute right-[20px] cursor-pointer top-[12px]" />
              </div>
              <select
                id="country"
                className="text-[#949494] w-full px-2 py-2 border border-[#949494] outline-none pr-3 rounded-full  placeholder-grey-350 mb-4"
              >
                {countries.map((country) => (
                  <option
                    className="rounded-full"
                    key={country.value}
                    value={country.value}
                  >
                    {country.label}
                  </option>
                ))}
              </select>
              <input type="checkbox"></input>{" "}
              <span>
                send me emails with tips on how to find doctor that fits my
                needs.
              </span>
              <br />
              <input type="checkbox"></input>{" "}
              <span>
                Yes, I understand and agree to the{" "}
                <a className="underline" href="#">
                  Terms of Service
                </a>{" "}
                including the{" "}
                <a className="underline" href="#">
                  User Agreement
                </a>{" "}
                and{" "}
                <a className="underline" href="#">
                  Privacy Policy
                </a>
                .
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
