"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  Users,
  Gavel,
  Menu,
  X,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import ContactUs from "@/components/contactUs";

// --- CONFIGURAÇÃO DE DADOS (Simulando um CMS) ---
const SITE_DATA = {
  name: "Magalhães & Associados",
  heroTitle: "Justiça e Excelência na Defesa dos Seus Direitos",
  heroSub:
    "Mais de 20 anos de experiência em direito civil e empresarial. Estratégias jurídicas personalizadas para garantir o seu patrimônio e liberdade.",
  stats: [
    { label: "Anos de Experiência", value: "20+" },
    { label: "Casos Vencidos", value: "1.5k+" },
    { label: "Milhões Recuperados", value: "R$ 50mi" },
  ],
  services: [
    {
      title: "Direito Empresarial",
      desc: "Consultoria preventiva e contenciosa para empresas de todos os portes.",
      icon: <Scale className="h-8 w-8 text-primary" />,
    },
    {
      title: "Direito Civil",
      desc: "Resolução de conflitos, contratos e responsabilidade civil.",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    },
    {
      title: "Direito Trabalhista",
      desc: "Defesa dos interesses patronais e gestão de passivo trabalhista.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Direito Tributário",
      desc: "Planejamento tributário e recuperação de créditos fiscais.",
      icon: <Gavel className="h-8 w-8 text-primary" />,
    },
  ],
};

export default function LawFirmWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para mudar a navbar
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- NAVBAR --- */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-500 shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-slate-900" />
            <span className="text-xl font-bold tracking-tight uppercase text-slate-900">
              Magalhães<span className="text-white">Law</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-medium text-sm text-slate-300">
            {["Início", "Áreas de Atuação", "Sobre Nós", "Contato"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-slate-900 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:flex">
            <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {["Início", "Áreas de Atuação", "Sobre Nós", "Contato"].map(
                    (item) => (
                      <a key={item} href="#" className="text-lg font-medium">
                        {item}
                      </a>
                    )
                  )}
                  <Button className="w-full bg-slate-900 mt-4">
                    Agendar Consulta
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* --- INITIAL SECTION --- */}
      <section
        id="início"
        className="relative h-[90vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-[url(https://i.postimg.cc/FRmh7sYQ/tribunal1.png)] bg-cover bg-center h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 pt-20 text-center max-w-4xl">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              Disponível para novos casos
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-serif leading-tight">
              {SITE_DATA.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {SITE_DATA.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full bg-slate-700 hover:bg-slate-400 text-base px-8"
              >
                Fale com um Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- AREAS OF EXPERTISE --- */}
      <section id="áreas-de-atuação" className="py-24 bg-slate-300">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">
              Áreas de Atuação
            </h2>
            <p className="text-slate-700">
              Atuamos com rigor técnico e visão estratégica nas principais áreas
              do direito, oferecendo soluções completas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_DATA.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-600 h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-slate-300 w-fit rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 leading-relaxed ">
                      {service.desc}
                    </CardDescription>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-slate-900 hover:text-blue-700 transition-colors group"
                    >
                      Saiba mais{" "}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS & AUTHORITY --- */}
      {/* <section
        id="sobre-nós"
        className="py-12 bg-slate-500  border-b border-slate-900"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {SITE_DATA.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4"
              >
                <p className="text-4xl font-bold text-slate-900 font-serif">
                  {stat.value}
                </p>
                <p className="text-slate-500 uppercase tracking-wider text-sm mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* --- WHY US (Modern Grid) --- */}
      <section id="sobre-nós" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Por que escolher a Magalhães & Associados?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Não somos apenas advogados; somos parceiros estratégicos do seu
              negócio e da sua vida. Nossa abordagem combina tradição jurídica
              com tecnologia moderna.
            </p>

            <ul className="space-y-4">
              {[
                "Atendimento 24/7 para casos urgentes",
                "Equipe multidisciplinar e especializada",
                "Relatórios de andamento em tempo real via app",
                "Transparência total nos honorários",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 h-6 w-6" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px] bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
            <Image
              src="https://i.postimg.cc/tRfp6Hvk/advogados-em-pose.png"
              width="450"
              height="450"
              alt="Reunião Estratégica"
              className="w-full h-full object-cover opacity-80"
            />
            {/* Badge Flutuante */}
            <div className="absolute bottom-8 left-8 bg-white text-slate-900 p-6 max-w-xs shadow-xl">
              <p className="font-serif text-xl italic">
                A excelência não é um ato, mas um hábito.
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-wider text-slate-500">
                - Aristóteles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}

      <ContactUs />

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-6 w-6 text-white" />
                <span className="text-xl font-bold text-white">
                  Magalhães<span className="text-slate-500">Law</span>
                </span>
              </div>
              <p className="max-w-sm">
                Comprometidos com a ética, a justiça e a defesa incansável dos
                direitos de nossos clientes há mais de duas décadas.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Áreas de Atuação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog Jurídico
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    OAB/SP 00.000
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 text-center text-sm">
            © 2025 Magalhães & Associados. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
