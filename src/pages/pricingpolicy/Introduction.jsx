import { Activity, Clock, Cookie, GlobeIcon, Share2, Shield, UserCheckIcon } from "lucide-react";
import { Database } from "lucide-react";

export const dataWeCollects = [
  {
    step: 1,
    title: "Data We Collect",
    icon: Database,
    sections: [
      {
        heading: "Personal Information",
        description:
          "Commercial name, store name, email address, phone number, website link, and password during registration to verify identity and manage accounts.",
      },
      {
        heading: "Account & Usage Data",
        description:
          "Information about how you use our AI Chat Widget, including interactions, customization settings, chat history, and usage logs for service improvement.",
      },
      {
        heading: "Asset & Documentation Data",
        description:
          "Payment information, billing records, transaction history, and financial data required to process payments and maintain subscription services.",
      },
    ],
  },
  {
    step: 2,
    title: "How We Use Your Information",
    icon: Activity,
    sections: [
      {
        heading: "Provide & Optimize Services",
        description:
          "We use your data to activate accounts, integrate AI widgets, customize your experience, and continuously improve service quality and performance.",
      },
      {
        heading: "Analytics & Insights",
        description:
          "Collected data helps us understand usage patterns, develop new features, and provide intelligent recommendations for better user experience.",
      },
      {
        heading: "Payment & Technical Data",
        description:
          "Process payments securely, issue invoices, handle refunds, and maintain financial records for accounting and regulatory compliance.",
      },
    ],
  },
  {
    step: 3,
    title: "How We Share Your Information",
    icon: Share2,
    sections: [
      {
        heading: "With Service Providers",
        description:
          "We share data with payment processors, analytics tools, and technical partners only when essential for service delivery under strict confidentiality.",
      },
      {
        heading: "For Legal Compliance",
        description:
          "We may disclose information to regulatory authorities, law enforcement, or courts when required by law or to protect legal rights.",
      },
      {
        heading: "Business Transfers",
        description:
          "In the event of a merger, acquisition, or sale, user data may be transferred as part of business assets with continued protection.",
      },
    ],
  },
  {
    step: 4,
    title: "Data Security",
    icon: Shield,
    sections: [
      {
        heading: "Placing & Technical Data",
        description:
          "We implement industry-standard encryption for data storage and transmission, ensuring all sensitive information is protected with advanced security protocols.",
      },
      {
        heading: "Payment Data",
        description:
          "Financial information and payment details are handled securely with restricted access, continuous monitoring, and compliance with payment industry standards.",
      },
    ],
  },
  {
    step: 5,
    title: "Data Retention",
    icon: Clock,
    sections: [
      {
        heading: "Active Data",
        description: "Account and subscription information is retained as long as your account is active and services are being used for operational purposes.",
      },
      {
        heading: "Legal Storage",
        description: "Financial records and transaction data are kept for the period required by Saudi law for accounting, auditing, and compliance purposes.",
      },
    ],
  },
  {
    step: 6,
    title: "International Users",
    icon: GlobeIcon,
    sections: [
      {
        heading: "Cross-Border Transfers",
        description: "We may process and store data on servers located outside Saudi Arabia while ensuring compliance with PDPL and international data protection standards.",
      },
      {
        heading: "Data Protection",
        description: "All international transfers are secured with appropriate safeguards, encryption, and contractual obligations to maintain data privacy and security.",
      },
    ],
  },
  {
    step: 7,
    title: "Your Rights",
    icon: UserCheckIcon,
    sections: [
      {
        heading: "Access and Portability",
        description: "You have the right to access your personal data, request a copy, and transfer your data to another service provider in a structured format.",
      },
      {
        heading: "Correction and Deletion",
        description: "You can request corrections to inaccurate data or deletion of your personal information within legal limits at any time.",
      },
      {
        heading: "Objection and Restriction",
        description: "You may object to data processing for marketing purposes and request restrictions on how we process your personal information.",
      },
    ],
  },
  {
    step: 8,
    title: "Cookies & Tracking",
    icon: Cookie,
    sections: [
      {
        heading: "Essential Cookies",
        description: "Session cookies maintain your login state and ensure smooth functionality. These are necessary for the service to work properly.",
      },
      {
        heading: "Analytics Cookies",
        description: "We use analytics cookies to understand how users interact with our platform, helping us improve features and user experience.",
      },
      {
        heading: "Marketing Cookies",
        description: "Marketing cookies help us deliver relevant content and offers based on your preferences and interactions with our services.",
      },
    ],
  },
  {
    step: 9,
    title: "Third-Party Links",
    icon: GlobeIcon,
    sections: [
      {
        heading: "External Services",
        description: "Our platform may contain links to third-party websites or services. We are not responsible for their privacy practices or content.",
      },
    ],
  },
  {
    step: 10,
    title: "Changes to This Policy",
    icon: Activity,
    sections: [
      {
        heading: "Updates",
        description: "We may update this policy periodically. Users will be notified of material changes via email or platform notifications, and continued use implies acceptance.",
      },
    ],
  },
];
const Introduction = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#7CEEFD]/10 to-[#9FC1FF]/10  w-full rounded-xl py-4 px-8">
        <div className="flex gap-2 items-center">
          <div className="p-1 w-10 h-10 rounded-full bg-[#5048E5] text-center text-white flex justify-center items-center">
            <Shield size={22} />
          </div>
          <h2 className="text-2xl font-bold">Introduction</h2>
        </div>
        <p className="mt-4 max-w-6xl text-gray-600">
          Techween | تكوين, owned by Techween Solutions Establishment, is
          committed to protecting the privacy and confidentiality of all users'
          information — including visitors, stores, clients, partners, and any
          other parties interacting with or benefiting from the website's
          services.
        </p>

        <p className="mt-4 max-w-5xl text-gray-600">
          This policy explains the principles that Techween follows when
          collecting, using, storing, processing, and protecting personal data
          in accordance with the{" "}
          <strong> Personal Data Protection Law (PDPL) </strong> of Saudi
          Arabia, its implementing regulations, and other relevant laws. This
          policy applies to all Techween digital platforms, including the
          official website, the dashboard, API integrations, and any other
          digital tools or applications provided by Techween.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-10 mt-10 ">
        {dataWeCollects.map((dataWeCollect, index) => {
          const Icon = dataWeCollect.icon;

          return (
            <div key={index} className="max-w-xl">
              <div className="relative rounded-3xl bg-gradient-to-r from-[#7CEEFD]/10 to-[#9FC1FF]/10  p-6 h-full">
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
    </>
  );
};

export default Introduction;
