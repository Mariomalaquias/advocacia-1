import {
  AtSignIcon,
  HeadsetIcon,
  Mail,
  MailIcon,
  MapPin,
  Phone,
} from "lucide-react";

import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ContactUs = () => {
  return (
    <div className="bg-gray-700">
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="flex flex-col items-center">
          {/* Entre em contato */}

          <div className="flex flex-col gap-4 mx-10 mt-6 lg:mx-28">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-100 rounded-full">
                <Phone className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Telefone</p>
                <p className="text-slate-600">+55 (11) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-100 rounded-full">
                <Mail className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Email</p>
                <p className="text-slate-600">contato@magalhaes.law</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-100 rounded-full">
                <MapPin className="h-6 w-6 text-slate-900" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Escritório</p>
                <p className="text-slate-600">
                  Av. Paulista, 1000 - 15º Andar
                  <br />
                  São Paulo - SP
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            {/* links do whatt instagram feceboock */}
          </div>
          <div className="mt-4">
            <Button variant={"link"} className="text-xl">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <Image
                  src="/icons-whatsapp.svg"
                  alt="logo do linkedin"
                  width={40}
                  height={40}
                />
              </a>
            </Button>

            <Button variant={"link"} className="text-xl">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <Image
                  src="/icon-instagram.png"
                  alt="logo do instagram"
                  width={40}
                  height={40}
                />
              </a>
            </Button>
            <Button variant={"link"} className="text-xl">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1"
              >
                <Image
                  src="/icon-facebook.png"
                  alt="logo do facebook"
                  width={40}
                  height={40}
                />
              </a>
            </Button>
          </div>
        </div>
        {/* google mapas */}

        <div className="p-6 w-full">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.9835133064553!2d-48.18009682508759!3d-21.78089908006339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f15e7ecdddc7%3A0xff79d40159ab0356!2sS%C3%A3o%20Paulo%20Tribunal%20de%20Justi%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1763671632719!5m2!1spt-BR!2sbr"
            width="450"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="mx-3 md:mx-48 p-6">
        <Card className="border-slate-200 shadow-lg">
          <CardHeader>
            <CardTitle>Envie sua mensagem</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome</label>
                  <Input placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefone</label>
                  <Input placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="area-interesse" className="text-sm font-medium">
                  Área de Interesse
                </label>
                <select
                  id="area-interesse"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>Selecione uma área</option>
                  <option>Direito Civil</option>
                  <option>Empresarial</option>
                  <option>Trabalhista</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Mensagem</label>
                <Textarea
                  placeholder="Descreva brevemente seu caso..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-lg">
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
