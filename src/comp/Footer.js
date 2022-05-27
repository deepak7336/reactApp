import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-1" style={footerStyle}>
      <p className="text-center">Copyright &copy;todolist.com</p>
    </footer>
  );
};

export default Footer;
