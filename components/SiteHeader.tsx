const destinations = [
  'Holiday homes Austria',
  'Holiday homes Belgium',
  'Holiday homes Croatia',
  'Holiday homes Czech',
  'Holiday homes Denmark',
  'Holiday homes France',
  'Holiday homes Germany',
  'Holiday homes Hungary',
  'Holiday homes Italy',
  'Holiday homes Holland',
  'Holiday homes Norway',
];

const languages = [
  { flag: 'flag_deu.svg', label: 'Deutsch', alt: 'flag_deu' },
  { flag: 'flag_nld.svg', label: 'Nederlands', alt: 'flag_nld' },
  { flag: 'flag_pol.svg', label: 'Polski', alt: 'flag_pol' },
];

export default function SiteHeader() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/img/Logo_EC.svg" className="img-fluid" alt="Eurocottage" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto d-none d-md-flex">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Destinations
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="row mx-0">
                  {[0, 1].map((col) => (
                    <div key={col} className="col-sm-6 col-12">
                      {destinations.map((name) => (
                        <a key={name} className="dropdown-item" href="#">
                          {name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li className="nav-item dropdown language-dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="/img/flag_eng.svg" width={25} alt="flag_eng" />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {languages.map((lang) => (
                  <a key={lang.label} className="dropdown-item" href="#">
                    <img src={`/img/${lang.flag}`} width={25} alt={lang.alt} /> {lang.label}
                  </a>
                ))}
              </div>
            </li>
          </ul>

          <ul className="navbar-nav mr-auto d-block d-md-none">
            {destinations.map((name) => (
              <li key={name} className="nav-item">
                <a className="dropdown-item" href="#">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="navbar-nav mr-auto d-none d-md-block">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="/img/phone.svg" className="img-fluid phone-img" alt="" /> +31(0)337630877
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
