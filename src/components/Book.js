import React from "react";
import { HashLink } from "react-router-hash-link";
import eventimage from "../images/celebration-hall-small.png";
import financePolicyPdf from "../../public/finance-policy-2020.pdf";
import heatingInstructions from "../../public/heating-instructions.pdf";
import infoForUsers from "../../public/Milburn_VH_Info_for_Users.pdf";
import bookingFormAgreement from "../../public/Milburn_VH_Booking_Form_Agreement.pdf";
import complaintsPolicy from "../../public/mvh-complaints-policy-2019.pdf";
import vhDataProtectionPolicy from "../../public/vh_dataProtectionPolicy.pdf";
import safeguardingStatement from "../../public/safeguardingstatment.pdf";
import pdfIcon from "../images/pdf-svgrepo-com.svg";

const Book = () => {
  return (
    <main id="top-content">
      <div className="about-header">
        <img
          className="about-header_img"
          src={eventimage}
          height="50px"
          alt="party in hall"
        />
      </div>
      <div className="content-container">
        <div>
          <h1>How to book</h1>
          <p>
            The hall can be booked by session or for the whole day. Sessions are
            as follows:
          </p>
          <ul>
            <li>Morning (9.00am to 12.30pm)</li>
            <li>Afternoon (1.00pm to 5.30pm)</li>
            <li>Evening (6.00pm to 11.00pm)</li>
          </ul>
          <h2 id="book_hire-charges">Hire charges</h2>
          <h3>Rates for non Milburn residents</h3>
          <table>
            <th colSpan="4" className="table-header">
              Hire charges
            </th>
            <tr>
              <th></th>
              <th>Small Room</th>
              <th>Large Room</th>
              <th>Whole Hall</th>
            </tr>
            <tr>
              <td>1 session</td>
              <td>£20.00</td>
              <td>£40.00</td>
              <td>£50.00</td>
            </tr>
            <tr>
              <td>2 sessions</td>
              <td>£30.00</td>
              <td>£60.00</td>
              <td>£75.00</td>
            </tr>
            <tr>
              <td>Whole day (3 sessions)</td>
              <td>£50.00</td>
              <td>£100.00</td>
              <td>£125.00</td>
            </tr>
          </table>
          <h3>Rates for Milburn residents*</h3>
          <table>
            <th colSpan="4" className="table-header">
              Hire charges
            </th>
            <tr>
              <th></th>
              <th>Small Room</th>
              <th>Large Room</th>
              <th>Whole Hall</th>
            </tr>
            <tr>
              <td>1 session</td>
              <td>£10.00</td>
              <td>£20.00</td>
              <td>£25.00</td>
            </tr>
            <tr>
              <td>2 sessions</td>
              <td>£15.00</td>
              <td>£30.00</td>
              <td>£37.50</td>
            </tr>
            <tr>
              <td>Whole day (3 sessions)</td>
              <td>£25.00</td>
              <td>£50.00</td>
              <td>£62.50</td>
            </tr>
          </table>
          <p>* Reduced prices for residents of Milburn Parish for their own personal events, Milburn Church, Milburn Parish Council, 
            Milburn School (non PE events) Parishioner organised charity events and Parishioner family funerals.</p>
          <p>Hourly hire may be available, please enquire.</p>
        </div>
        <div>
          <ul>
            <li>
              A deposit may be required, please ask when booking. Viewings
              available, please contact&nbsp;
              <HashLink to="/book#book_how-to-book">Deb</HashLink>.
            </li>
            <li>
              If you wish to hold a bar, which sells drinks, there is an additional £15.00 charge to
              cover the licence, likewise showing a film or for use of the TV
              licence there is an additional £10.00 charge.
            </li>
            <li>
              Assuming no bookings clash, use of the kitchen is included at no
              extra cost.
            </li>
            <li>
              If you require set up time and clearing up time outside your booked 
              session there may be an extra charge. Please ask when making a booking.
            </li>
            <li>
              The following regular village activity groups are each charged £12.50 per session 
              - Badminton, Handicraft, Playgroup, First Responders, Table Tennis, Milburn School P.E.and Shoebox packing.
            </li>
            <li>
              Milburn Village Show - £30.00 annual fee.
            </li>
          </ul>
          <h2 id="book_how-to-book">How to book</h2>
          <p>
            To book, please contact:
            <br />
            Deb Payton
            <br />
            <b>Phone:</b> 07811580922
            <br />
            <b>Email:</b> deb.payton@talk21.com
          </p>
          <h2 id="book_important-documents">Important Documents</h2>
          <div className="book_important-documents">
            <h3>Booking documents</h3>
            <ul>
              <li>
                <a href={bookingFormAgreement} download>
                  <img
                    src={pdfIcon}
                    alt="pdf icon"
                    className="book_important-documents_pdf-icon"
                  />
                  Booking form
                </a>
              </li>
              <li>
                <a href={infoForUsers} download>
                  <img
                    src={pdfIcon}
                    alt="pdf icon"
                    className="book_important-documents_pdf-icon"
                  />
                  Booking information
                </a>
              </li>
            </ul>
            <h3>Policies</h3>
            <ul>
              <li>
                <a href={vhDataProtectionPolicy} download>
                  <img
                    src={pdfIcon}
                    alt="pdf icon"
                    className="book_important-documents_pdf-icon"
                  />
                  Data Protection Policy
                </a>
              </li>
              <li>
                <a href={complaintsPolicy} download>
                  <img
                    src={pdfIcon}
                    alt="pdf icon"
                    className="book_important-documents_pdf-icon"
                  />
                  Complaints Policy
                </a>
              </li>
              <li>
                <a href={safeguardingStatement} download>
                  <img
                    src={pdfIcon}
                    alt="pdf icon"
                    className="book_important-documents_pdf-icon"
                  />
                  Safeguarding Statment
                </a>
              </li>
              <li>
                <a href={financePolicyPdf} download>
                  <img
                    src={pdfIcon}
                    alt="pdf icon"
                    className="book_important-documents_pdf-icon"
                  />
                  Finance Policy
                </a>
              </li>
            </ul>
            <h3>Hall instructions</h3>
            <ul>
              <li>
                <a href={heatingInstructions} download>
                  <img
                    src={pdfIcon}
                    alt="pdf icon"
                    className="book_important-documents_pdf-icon"
                  />
                  Heating instructions
                </a>
              </li>
              <li>
                <a href="/src/assets/vh_dataprotectionpolicy.pdf" download>
                  <img
                    src={pdfIcon}
                    alt="pdf icon"
                    className="book_important-documents_pdf-icon"
                  />
                  Kitchen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Book;
