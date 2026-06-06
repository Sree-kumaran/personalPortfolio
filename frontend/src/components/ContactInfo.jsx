import React from "react";

const ContactInfo = ({ portfolio }) => {
  const contactItems = [
    {
      label: "Email",
      value: portfolio?.email,
      icon: "📧",
      link: portfolio?.email ? `mailto:${portfolio.email}` : null,
    },
    {
      label: "GitHub",
      value: portfolio?.github,
      icon: "🔗",
      link: portfolio?.github,
    },
    {
      label: "LinkedIn",
      value: portfolio?.linkedin,
      icon: "💼",
      link: portfolio?.linkedin,
    },
    {
      label: "Phone",
      value: portfolio?.phone,
      icon: "📱",
      link: portfolio?.phone ? `tel:${portfolio.phone}` : null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Contact Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-6 border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-gray-400 text-sm font-semibold mb-2">
                {item.label}
              </h3>
              {item.value && item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-500">{item.value || "Not Provided"}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
