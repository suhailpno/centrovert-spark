import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6588992295?text=Hi%20Centrovert%2C%20I%27m%20interested%20in%20your%20AI%20and%20Automation%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full" />
    </a>
  );
};

export default WhatsAppButton;
