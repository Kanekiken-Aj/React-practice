import React from "react";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  let footerStyle = {
    backgroundColor: props.mode === 'dark'?'black':'white',
    color: props.mode === 'dark'?'white':'black',
    padding: "10px",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    marginTop: "20px",
  };

  return (
    <footer style={footerStyle} className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-box">
              <p>&copy; {currentYear} Text-Util. All rights reserved by Achintya.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
