import Image from "next/image";

export function FloatingWhatsAppButton() {
  // 🚨 ATENÇÃO: Substitua este número pelo número de telefone do escritório, incluindo código do país (55) e DDD.
  const phoneNumber = "5511999999999";

  // Mensagem pré-definida para otimizar o atendimento
  const predefinedMessage =
    "Olá! Vi o site de vocês e gostaria de agendar uma consulta jurídica.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    predefinedMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco agora pelo WhatsApp"
      className="fixed bottom-8 right-8 z-[100] p-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110"
      // Estilo personalizado para o verde do WhatsApp
      style={{ backgroundColor: "#25D366", color: "white" }}
    >
      <Image
        src="/icons-whatsapp.svg"
        width={32}
        height={32}
        alt="icons do whatsapp"
      />
    </a>
  );
}
