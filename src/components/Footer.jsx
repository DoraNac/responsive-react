import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-neutral-800 footer p-10 text-white">
      <aside>
        <br />
        <p className="text-xl text-red-600 font-bold -mt-4">Lorem Ipsum</p>
        <br /> <br />
        <p className="">Street XYZ, xxxx</p>
        <a href="">Designed by DoraNac</a>
    
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Marketing</a>

      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover" onClick={() => navigate("/about")}>
          About us
        </a>
        <a className="link link-hover">Contact</a>
    
  
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
      </nav>
    </footer>
  );
};

export default Footer;
