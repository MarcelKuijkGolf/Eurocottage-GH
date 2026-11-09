/**
 * Zoekbalk op de homepage. Nog zonder datepicker en gastenkeuze;
 * die komen als client-component zodra we de nieuwe datepicker bouwen.
 */
export default function SearchBar() {
  return (
    <div className="bg-trans ca">
      <ul className="list-unstyled search-list mb-0">
        <li className="arrow">
          <input
            type="text"
            className="form-control map-icon"
            placeholder="Country,Region,Place,HouseCode..."
            name=""
          />
        </li>
        <li>
          <input
            id="textRangeFrom"
            type="text"
            className="md-leaving-date form-control"
            placeholder="Arrival"
            readOnly
          />
          <input
            id="textRangeTo"
            type="text"
            className="md-return-date form-control"
            placeholder="Departure"
            readOnly
          />
        </li>
        <li className="arrow">
          <div className="paddlr border_all">
            <div className="input-group">
              <div className="form-group">
                <div className="dropdown1">
                  <a className="number_count">Guests</a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="border-0">
          <button className="btn btn-primary">
            Search <i className="fa fa-arrow-right"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}
