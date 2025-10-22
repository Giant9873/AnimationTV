import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-atv-principal border-t text-white">
      <Container>
        
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <Logo />
            <p className="pb-3">
              Descubre lo mejor de la animación japonesa, china y occidental en un solo lugar, en su idioma oficial y 
              con subtitulos de gran calidad.
            </p>
            <SocialMedia
              className="place-content-center"
              iconClassName="border-white hover:border-atv-tercero hover:text-atv-tercero"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>

          <div className=" text-center">
            <h2 className="text-2xl">Animes Populares!</h2>
            <ul className="space-y-3 mt-4">
              <li><Link href={"/animes/gachiakuta"} className="hover:font-bold hover:text-atv-tercero hoverEffect">Gachiakuta</Link></li>
              <li><Link href={"/animes/dan-da-dan-s2"} className="hover:font-bold hover:text-atv-tercero hoverEffect">DAN DA DAN S2</Link></li>
              <li><Link href={"/animes/one-punch-man-s3"} className="hover:font-bold hover:text-atv-tercero hoverEffect">One Punch Man S3</Link></li>
              <li>Link 2</li>
            </ul>
          </div>
          
          <div className="space-y-4 text-center">
            <h1 className="text-2xl " >Suscríbete ! </h1>
            <p>
              Suscríbete y recibe las nuevas actualizaciones a tu correo, de fans para fans.
            </p>
            <form className="space-y-3">
              <Input placeholder="Ingresa tu email" type="email" required />
              <Button className="w-full">Suscríbete</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;