function Footer() {
  return (
    <div>
      <div className="conteiner-fluid">
        <div className="row" id="footer">
          <div className="col-4">
            <div className="row">
              <img
                src="assets/Thales-Logo.jpg"
                id="img-footer"
                alt="Thales-Logo"
              />
            </div>
            <div className="row">
              <div className="col-4 redes">
              <a href="https://wa.me/573016977651">
              <img
                  src="assets/WhatsApp.png"
                  id="whatsapp"
                  alt="WhatsApp Logo"
                />
              </a> 
              </div>
              <div className="col-4 redes">
              <a href="https://www.linkedin.com/in/juan-david-cardona-p%C3%A1ez-817511210/">
              <img
                  src="assets/LinkedIn.png"
                  id="linkedin"
                  alt="LinkedIn Logo"
                />
              </a> 
              </div>
              <div className="col-4 redes">

              <a href="https://github.com/jdcardonap2019">
              <img
                  src="assets/Github.png"
                  id="github"
                  alt="GitHub Logo"
                />
              </a> 
              </div>
            </div>
          </div>
          <div className="col-4">
            <h4 className="titulos_footer">
            </h4>
            <div className="info_footer">
              <p>System and Computing Engineer</p>
              <p>University of Los Andes, Bogotá D.C.</p>
              <p>+57 301 6977651</p>
              <p>jcardonapaez@gmail.com</p>
            </div>
          </div>
          <div className="col-4">
            <h4 className="titulos_footer">Legal:</h4>
            <div className="info_footer">
              <p>
              This website is owned and operated by Juan David Cardona. 
              These Terms set out the terms and conditions under which you may use our website and services offered by us. 
              This web page offers Thales visitors the development of their technical test.              </p>
              <p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Footer;