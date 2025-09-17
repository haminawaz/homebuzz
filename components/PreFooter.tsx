const Footer = () => {
  const footerLinks = [
    ["Bath & Faucets", "Decor & Furniture", "Paint & building materials"],
    ["Doors & Windows", "Electrical", "Flooring"],
    ["Hardware", "Heating & Cooling", "Lawn & Garden"],
    ["Ceiling Fans", "Plumbing", "Seasonal & Outdoor living"],
    ["Kitchenware", "Appliances", "Storage"],
  ];

  return (
    <footer className="bg-[#CFD7DC]-900 text-white">
      <div className="max-w-7xl mx-auto p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([_, links], idx) => (
            <div key={idx}>
              <ul className="space-y-2">
                {links.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 transition-colors text-sm underline font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
