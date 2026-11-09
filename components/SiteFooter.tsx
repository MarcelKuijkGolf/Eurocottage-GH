const aboutLinks = [
  'About Us',
  'Help & FAQ',
  'Destinations',
  'Terms & Conditions',
  'Privacy Notice',
  'My Eurocottage',
];

const inspirationLinks = [
  'Holiday home with pool',
  'Holiday with dog',
  'Seaside holiday',
  'Family friendly holiday',
  'Holiday villages',
  'Last minutes',
];

const guaranteeLinks = ['Thuiswinkel Waarborg', 'Ecommerce Europe', 'Comodo EV SSL'];

export default function SiteFooter() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row" id="footer_accordion">
            <div className="col-md-3">
              <h3>About us</h3>
              <div className="collapse-div">
                <ul className="list-unstyled mb-0">
                  {aboutLinks.map((label) => (
                    <li key={label}>
                      <a href="#">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Inspiration</h3>
              <div className="collapse-div">
                <ul className="list-unstyled mb-0">
                  {inspirationLinks.map((label) => (
                    <li key={label}>
                      <a href="#">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Guarantees</h3>
              <div className="collapse-div">
                <ul className="list-unstyled mb-0">
                  {guaranteeLinks.map((label) => (
                    <li key={label}>
                      <a href="#">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Contact us</h3>
              <div className="collapse-div">
                <p className="mb-0 contact-num">
                  <span className="ring">
                    <img src="/img/old-handphone.svg" className="img-fluid" alt="" />
                  </span>{' '}
                  +31(0)337630877
                </p>
                <p className="mb-0 space10">Rent your home</p>
                <p className="mb-0">Contact</p>
                <ul className="list-inline space10 mb-0">
                  <li className="list-inline-item">
                    <a href="#">
                      <img src="/img/pinterest.svg" width={39} className="img-fluid" alt="Pinterest" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src="/img/twitter.svg" width={39} className="img-fluid" alt="Twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src="/img/facebook.svg" width={39} className="img-fluid" alt="Facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="bottom_logo">
        <div className="container-fluid">
          <hr className="green-line" />
          <div className="row">
            <div className="col-12 text-center">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">
                    <img src="/img/thuiswinkel.svg" className="img-fluid" alt="Thuiswinkel Waarborg" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img src="/img/ecommerce.svg" className="img-fluid" alt="Ecommerce Europe" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img src="/img/comodo.png" className="img-fluid" alt="Comodo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
