import logo from "../assets/logo_eventX_transparent.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-blue-400 text-white">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div>
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        <div className="flex space-x-6 text-sm">
          <a
            href="/impressum"
            className="hover:text-blue-400 transition-colors"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="hover:text-blue-400 transition-colors"
          >
            Datenschutzerklärung
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
