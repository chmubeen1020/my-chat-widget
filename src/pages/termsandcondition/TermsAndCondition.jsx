import ContactDetails from "../pricingpolicy/ContactDetails";
import {
  FileText,
  Lock,
  PanelTop,
  Scale,
  Shield,
  UserCheckIcon,
} from "lucide-react";

export const dataWeCollects = [
  {
    step: 1,
    title: "Definitions",
    icon: FileText,
    sections: [
      {
        heading: "Techween / Establishment",
        description:
          "Refers to Techween Solutions Establishment, a commercial establishment registered in the Kingdom of Saudi Arabia. Owner and operator of the platform and all related Services.",
      },
      {
        heading: "User / Client",
        description:
          "Any natural or legal person who browses the Website, uses Services, or creates an account. Includes visitors, users, and store owners.",
      },
      {
        heading: "Asset & Documentation Data",
        description:
          "The interactive AI Chat Widget provided by Techween for e-commerce websites, plus any related digital services.",
      },
      {
        heading: "Subscription",
        description:
          "The process of registering and selecting a monthly or yearly plan to access the Service.",
      },
    ],
  },
  {
    step: 2,
    title: "Description of Services",
    icon: Shield,
    sections: [
      {
        heading: "",
        description:
          "Techween provides an advanced AI Chat Widget that integrates with e-commerce stores to enhance customer experience with intelligent, instant responses.",
      },
      {
        heading: "",
        description:
          "Services are offered on subscription basis (monthly/yearly) with a 7-day free trial. Through the dashboard, Clients can configure widgets, customize appearance, view analytics, and manage billing.",
      },
      {
        heading: "",
        description:
          "Techween aims for high-quality service but does not guarantee uninterrupted or error-free operation. The Establishment may develop, update, or discontinue features at any time.",
      },
    ],
  },
  {
    step: 3,
    title: "Eligibility",
    icon: UserCheckIcon,
    sections: [
      {
        heading: "",
        description:
          "Users must have full legal capacity under Saudi Arabian law. Individual users must be at least 18 years old.",
      },
      {
        heading: "",
        description:
          "Entity users must be authorized to bind their organization. All actions under an Account are binding on the entity.",
      },
      {
        heading: "",
        description:
          "Techween may request identity verification or documentation. Failure to provide proof may result in suspension or termination.",
      },
    ],
  },
  {
    step: 4,
    title: "Applicable Saudi Laws",
    icon: Scale,
    sections: [
      {
        heading: "",
        description:
          "Use of the Website and Services is subject to all applicable laws in the Kingdom of Saudi Arabia, including E-Commerce Law, Personal Data Protection Law, Electronic Transactions Law, and Anti-Cyber Crime Law.",
      },
      {
        heading: "",
        description:
          "Users must not use the Service for unlawful purposes or in ways that harm the Website or other Users. Violations may result in account suspension and reporting to authorities.",
      },
    ],
  },
  {
    step: 5,
    title: "Account Policy",
    icon: Lock,
    sections: [
      {
        heading: "",
        description:
          "Users must provide accurate information when creating an Account. Account credentials must be kept confidential and secure.",
      },
      {
        heading: "",
        description:
          "Accounts are for lawful use only. Misuse, fraud, or illegal activity is prohibited and may result in immediate termination.",
      },
      {
        heading: "",
        description:
          "Techween may suspend or terminate Accounts for violations, security concerns, or at the request of authorities. Users may cancel anytime via dashboard.",
      },
    ],
  },
  {
    step: 6,
    title: "Plans and Subscriptions",
    icon: PanelTop,
    sections: [
      {
        heading: "",
        description:
          "Clients may choose from available plans. A 7-day free trial is offered. Subscriptions renew automatically unless cancelled before renewal date.",
      },
      {
        heading: "",
        description:
          "All fees are final and non-refundable once paid, unless Techween authorizes an exception. Service may be suspended for maintenance, violations, or expired subscriptions.",
      },
      {
        heading: "",
        description:
          "Techween may update pricing or features at any time. Changes apply to new or renewing subscriptions after the effective date.",
      },
    ],
  },
  {
    step: 7,
    title: "Payment Policy",
    icon: PanelTop,
    sections: [
      {
        heading: "",
        description:
          "Fees are paid in advance via approved electronic methods (bank cards, Apple Pay). All amounts are in Saudi Riyal (SAR).",
      },
      {
        heading: "",
        description:
          "VAT is applied at the rate required by Saudi law. Electronic invoices are issued after payment and delivered to registered email.",
      },
      {
        heading: "",
        description:
          "Failed payments may result in service suspension. Payment processing is handled by licensed third-party providers.",
      },
    ],
  },
  {
    step: 8,
    title: "Content Policy & Intellectual Property",
    icon: Shield,
    sections: [
      {
        heading: "",
        description:
          "Clients are solely responsible for all content entered, uploaded, or generated via the Service. Content must be accurate, lawful, and not violate any rights.",
      },
      {
        heading: "",
        description:
          "All platform components—software, code, algorithms, designs, logos, and trademarks—are exclusive property of Techween and protected under Saudi law.",
      },
      {
        heading: "",
        description:
          "AI-generated outputs are provided as operational aid only, not professional advice. Clients must review outputs before use.",
      },
    ],
  },
];

export const additionalTerms = [
  {
    step: 1,
    heading: "Technical Support",
    desc: "Remote technical support provided during active subscription. Support channels and response times vary by plan. No guaranteed remediation time for issues.",
  },
  {
    step: 2,
    heading: "Service Updates",
    desc: "Techween may modify features, AI models, or interface at any time. Temporary downtime for maintenance is permitted without compensation.",
  },
  {
    step: 3,
    heading: "Limitation of Liability",
    desc: "Service provided 'as is' without warranties. Techween is not liable for indirect damages, data loss, or business interruptions except in cases of gross negligence.",
  },
  {
    step: 4,
    heading: "Termination",
    desc: "Either party may terminate as permitted by law. Upon termination, access is disabled immediately. Certain clauses survive termination including IP rights and liability",
  },
  {
    step: 5,
    heading: "Governing Law",
    desc: "This Agreement is governed by Saudi Arabian law. Disputes fall under exclusive jurisdiction of competent Saudi courts.",
  },
  {
    step: 6,
    heading: "Governing Law",
    desc: "This Agreement is governed by Saudi Arabian law. Disputes fall under exclusive jurisdiction of competent Saudi courts.",
  },
];

const TermsCondition = () => {
  return (
    <>
      <div className="relative overflow-hidden pt-24 bg-heroGradient">
        {/* HERO CONTENT */}
        <div className="relative max-w-3xl flex flex-col items-center mx-auto py-20 text-center">
          <h2 className="text-5xl font-semibold ">Terms & Conditions</h2>

          <div className="text-lg mt-7">
            <p className="text-xl max-w-2xl">
              Welcome to Techween. These Terms govern your use of our AI-powered
              Chat Widget and related services. By accessing or using our
              platform, you agree to be bound by these Terms.
            </p>
          </div>
          <div className="flex gap-2 items-center bg-[#6B69B21A] border border-[#B8C2CE] mt-10 p-2 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <p>Last updated: October 2025</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white via-herogradient/20 to-herogradient/60 flex flex-col items-center">
        <div className="w-full max-w-6xl  flex flex-col items-center py-10 space-y-10">
          <div className=" py-4 px-8">
            <div className="flex gap-2 items-center">
              <div className="p-1 w-10 h-10 rounded-full bg-[#6B69B2] text-center text-white flex justify-center items-center">
                <Shield size={22} />
              </div>
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <p className="mt-4 max-w-6xl text-gray-600">
              Welcome to{" "}
              <span className="text-black font-medium">Techween,</span> operated
              by Techween Solutions Establishment, a registered commercial
              establishment in the Kingdom of Saudi Arabia. Through this
              Website, we provide an interactive AI Chat Widget that can be
              integrated into e-commerce stores to enhance customer experience.
            </p>

            <p className="mt-4 max-w-5xl text-gray-600">
              These Terms and Conditions constitute a legally binding agreement
              between the Establishment and any person or entity that accesses
              or uses the Website.{" "}
              <span className="text-black font-medium">
                {" "}
                By using our Services, you expressly agree to all terms stated
                herein.
              </span>
            </p>

            <div className="bg-[#EF44441A] p-4 border-l-4 border-[#EF4444] text-[#EF4444] mt-4 rounded-r-xl">
              Important: If you do not agree to these terms, you must not use
              the Website or subscribe to any Services.
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-10 mt-10 ">
            {dataWeCollects.map((dataWeCollect, index) => {
              const Icon = dataWeCollect.icon;

              return (
                <div key={index} className="max-w-xl">
                  <div className="relative  p-6 h-full">
                    {/* HEADER */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* STEP CIRCLE */}
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white
                                flex items-center justify-center font-semibold text-lg"
                      >
                        {dataWeCollect.step}
                      </div>

                      {/* TITLE */}
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold text-neutral-900">
                          {dataWeCollect.title}
                        </h3>
                      </div>
                    </div>

                    {/* CONTENT SECTIONS */}
                    <div className="space-y-6 pl-16">
                      {dataWeCollect.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="relative pl-6">
                          {/* VERTICAL LINE */}
                          <span className="absolute left-0 top-0 h-full w-[2px] bg-primary/60" />

                          <h4 className="font-bold text-neutral-900 mb-1">
                            {section.heading}
                          </h4>
                          <p className=" text-neutral-600 leading-6">
                            {section.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center pt-6 ">
            <h2 className="font-bold text-3xl pb-1">Additional Terms</h2>
            <p className="text-neutral-600 text-lg">Important provisions you should know about</p>
          <div className="w-full grid grid-cols-3 gap-6 mt-14">
            {additionalTerms.map((term, index) => {
              return (
                <div key={index} className="max-w-xl border rounded-xl p-4">
                  <div className="space-y-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-2xl bg-primary text-white
                                flex items-center justify-center font-semibold text-lg"
                    >
                      {term.step}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {term.heading}
                    </h3>
                    <p className="text-neutral-600 leading-6">{term.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
          <ContactDetails />
        </div>
      </div>
    </>
  );
};

export default TermsCondition;
