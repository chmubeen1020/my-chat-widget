import React from "react";
import { ArrowLeft, SaudiRiyal } from "lucide-react";
import { CreditCard, images } from "../../assets"; // expects images.AuthDashboard (right image). If different, replace.
import { useNavigate } from "react-router-dom";

export default function StripeCheckout() {
     const navigate = useNavigate();
    const PayNow = () => {
    navigate("/auth/payment-success");
  };
  return (
    <section className="relative min-h-screen lg:h-[100vh] overflow-hidden">
      {/* Soft blobs (subtle) */}
      {/* <div className="pointer-events-none absolute right-[-180px] top-[120px] h-[520px] w-[520px] rounded-full bg-indigo-200/35 blur-[100px]" /> */}

      <div className="relative flex h-full justify-between">
        <div className="pointer-events-none absolute left-64 top-[100px] h-[300px] w-[1200px] rounded-full bg-[#6B69B2]/10 blur-[90px] z-10 " />

        <div className="grid w-full grid-cols-1 lg:grid-cols-2 ">
          {/* RIGHT: Feature text + dashboard */}
          <div className="relative h-full w-full overflow-hidden flex flex-col items-center justify-center bg-[#6B69B2]  ">
            <div className="pointer-events-none absolute left-5 top-60 h-[300px] w-[1000px] rounded-full bg-[#DBF2FF]/30 blur-[80px] z-10 -rotate-45" />
            <div className=" w-full max-w-lg text-white">
              <div className="w-full flex gap-2 items-start  py-2">
                <div>
                  <ArrowLeft size={22} />
                </div>
                <div className="w-full space-y-2">
                  <img src={images.WhiteLogo} alt="" className="w-32" />
                  <h2>Subscription fee</h2>
                  <div className="flex items-end gap-1">
                    <span className="flex items-end text-5xl font-bold gap-1">
                      <SaudiRiyal size={36} />
                      19
                    </span>
                    <div>
                      <p className="text-sm">
                        Per <br />
                        month
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center py-4 border-b">
                    <div>
                      <p>Basic Plan</p>
                      Billed monthly
                    </div>
                    <div>
                      <span className="flex items-center text-sm font-bold gap-1">
                        <SaudiRiyal size={14} /> 300.00
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col py-6 border-b">
                    <div className="w-full flex justify-between items-center">
                      <div>
                        <p>Subtotal</p>
                      </div>
                      <div>
                        <span className="flex items-center text-sm font-bold gap-1">
                          <SaudiRiyal size={14} /> 300.00
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <div>
                        <p>Tax</p>
                      </div>
                      <div>
                        <span className="flex items-end text-sm font-bold">
                          00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center py-4">
                    <div>
                      <p>Total due today</p>
                    </div>
                    <div>
                      <span className="flex items-center text-sm font-bold">
                        <SaudiRiyal size={14} /> 300.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LEFT: Sign up card */}
          <div className="relative flex items-center justify-center ">
            <div className="w-full max-w-sm rounded-2xl border border-neutral-300 bg-white/20 p-6 shadow-sm z-10">
              {/* CONTACT INFO */}
              <div className="mb-2">
                <h3 className="mb-2 text-sm font-medium text-neutral-700">
                  Contact information
                </h3>

                <p
                  className="py-2 w-full rounded-md
              border border-neutral-200
              bg-neutral-50
              px-3 text-sm text-neutral-700
            "
                >
                  <strong className="pr-4">Email</strong> 00Chukwudani@gmail.com
                </p>
              </div>

              {/* PAYMENT METHOD */}
              <div className="mb-2">
                <h3 className="mb-1 text-sm font-medium text-neutral-700">
                  Payment method
                </h3>

                <div className="space-y-2">
                  {/* CARD NUMBER */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Card information"
                      className="
      h-9 w-full rounded-md
      border border-neutral-200
      px-3 pr-24   /* 👈 space for icons */
      text-sm
      outline-none
    "
                    />

                    {/* CARD ICONS */}
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center gap-1.5">
                      <img
                        src={CreditCard.Visa}
                        alt="Visa"
                        className="h-4 w-auto"
                      />
                      <img
                        src={CreditCard.Master}
                        alt="Mastercard"
                        className="h-4 w-auto"
                      />
                      <img
                        src={CreditCard.Amex}
                        alt="Amex"
                        className="h-4 w-auto"
                      />
                      <img
                        src={CreditCard.Shufleless}
                        alt="Discover"
                        className="h-4 w-auto"
                      />
                    </div>
                  </div>

                  {/* EXPIRY + CVC */}
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="h-9 w-1/2 rounded-md border border-neutral-200 px-3 text-sm outline-none "
                    />
                    <div className="relative border rounded-md">
                      <input
                        type="text"
                        placeholder="CVC"
                        className="h-9 w-1/2 text-sm px-3 pr-2  border-l rounded-md outline-none"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center gap-1.5">
                        <img
                          src={CreditCard.Cvc}
                          alt="Visa"
                          className="h-4 w-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARDHOLDER NAME */}
              <div className="mb-2">
                <label className="mb-1 block text-sm font-medium text-neutral-700">
                  Cardholder name
                </label>
                <input
                  type="text"
                  placeholder="Full name on card"
                  className="h-9 w-full rounded-md border border-neutral-200 px-3 text-sm outline-none"
                />
              </div>

              {/* BILLING ADDRESS */}
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-neutral-700">
                  Country or region
                </label>
                <div className="border py-1 rounded-md">
                  <select className="h-9 w-full border-b border-neutral-200 px-3 text-sm outline-none ">
                    <option>Saudi Arabia</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Address line 1"
                    className="h-9 w-full border-b border-neutral-200 px-3 text-sm outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Address line 2"
                    className="h-9 w-full border-b border-neutral-200 px-3 text-sm outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Suburb"
                    className="h-9 w-full border-b border-neutral-200 px-3 text-sm outline-none"
                  />

                  <div className="flex border-b border-neutral-200">
                    <input
                      type="text"
                      placeholder="City"
                      className="h-9 w-1/2  px-3 text-sm outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Postal code"
                      className="h-9 w-1/2 border-l border-neutral-200 px-3 text-sm outline-none"
                    />
                  </div>

                  <select className="h-9 w-full px-3 text-sm outline-none">
                    <option>State</option>
                    <option>State</option>
                    <option>State</option>
                  </select>
                </div>
              </div>

              {/* PAY BUTTON */}
              <button
                type="button"
                className="
            h-11 w-full rounded-lg
            bg-primary
            text-sm font-semibold text-white
            shadow-sm
            transition hover:bg-primary/90
          "
           onClick={PayNow}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
