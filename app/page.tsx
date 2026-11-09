import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import SearchBar from '@/components/SearchBar';

const destinationLinks = [
  'Austria',
  'Czech Republic',
  'Great Britain',
  'Ireland',
  'Poland',
  'Sweden',
  'Belgium',
  'Denmark',
  'Greece',
  'Italy',
  'Portugal',
  'Switzerland',
  'Bulgaria',
  'Finnland',
  'Holland',
  'Luxembourg',
  'Slovakia',
  'Turkey',
  'Croatia',
  'France',
];

const hiddenOnMobile = [
  'Hungary',
  'Malta',
  'Slovenia',
  'Cyprus',
  'Germany',
  'Iceland',
  'Norway',
  'Spain',
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <section className="banner">
        <div className="b_caption">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center">
                  Discover more than 70.000 holiday
                  <br className="d-none d-md-block" /> cottages in the most romantic places
                </h1>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-12">
                  <SearchBar />
                </div>
              </div>
            </div>
          </div>

          <section className="tagline-section">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <h4>Almost 20 years experience.</h4>
                </div>
                <div className="col-md-4">
                  <div className="space5 d-md-none"></div>
                  <h4>More than 130.000 happy customers.</h4>
                </div>
                <div className="col-md-4">
                  <div className="space5 d-md-none"></div>
                  <h4>Book safely with Thuiswinkel Waarborg.</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="holiday_destinations">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">Holiday destinations</h2>
              <ul className="list-unstyled">
                {destinationLinks.map((name) => (
                  <li key={name}>
                    <a href="#">{name}</a>
                  </li>
                ))}
                {hiddenOnMobile.map((name) => (
                  <li key={name} className="li_none">
                    <a href="#">{name}</a>
                  </li>
                ))}
                <li className="d-block d-md-none">
                  <a href="#/" className="view_destination">
                    View all destinations
                  </a>
                </li>
              </ul>

              <div className="space40 d-none d-lg-block"></div>

              <h2 className="text-center space30">EuroCottage Holiday Cottages</h2>
              <div className="row space10">
                <div className="col-12">
                  <div className="t-grid">
                    <p id="t-grid">
                      <span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="green_border"></section>

      <SiteFooter />
    </>
  );
}
