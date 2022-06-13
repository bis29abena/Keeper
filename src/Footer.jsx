import React from "react";
import Year from "./date.js";

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {Year()}</p>
    </footer>
  );
}

export default Footer;
