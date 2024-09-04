import React from "react";
import hash from "../../copyright.svg";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer text-black p-6 footer-center border-t-2">
      <div className="flex gap-2 ">
        {" "}
        <img src={hash} alt="" />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
