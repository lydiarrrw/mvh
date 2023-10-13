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
              <td>£80.00</td>
            </tr>
            <tr>
              <td>Whole day (3 sessions)</td>
              <td>£50.00</td>
              <td>£85.00</td>
              <td>£115.00</td>
            </tr>
          </table>
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
              If you wish to hold a bar there is an additional £15.00 charge to
              cover the licence, likewise showing a film or for use of the TV
              licence there is an additional £10.00 charge.
            </li>
            <li>
              Assuming no bookings clash, use of the kitchen is included at no
              extra cost.
            </li>
          </ul>

          <div>
            <h2>Discounts</h2>
            <p>
              Discounts are available for residents of Milburn Parish. Please
              contact Deb for more information.
            </p>
          </div>
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
