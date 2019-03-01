import React from "react";

export default (
  <div>
    <div className="row">
      <div className="col-6">
        <h2>
          Headline about support options
          <br className="u-hide--small" />
          for MAAS
        </h2>
      </div>
      <div className="col-6">
        <p>
          MAAS is freely available, open source software from Canonical. For
          large volume and public clouds with dynamic scale, we offer per-region
          pricing with flexible node ranges.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-12" style={{ overflowX: "auto" }}>
        <table style={{ minWidth: "380px", width: "100%" }}>
          <thead>
            <tr>
              <td className="u-align--center" style={{ width: "40%" }}>
                &nbsp;
              </td>
              <th className="u-align--center" style={{ width: "20%" }}>
                Free
              </th>
              <th className="u-align--center" style={{ width: "20%" }}>
                Standard
              </th>
              <th className="u-align--center" style={{ width: "20%" }}>
                Advanced
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price per machine enlisted in a MAAS plan</td>
              <td className="u-align--center">$0</td>
              <td className="u-align--center">$5 per month</td>
              <td className="u-align--center">$10 per month</td>
            </tr>
            <tr>
              <td>Price per region, per year (unlimited machines)</td>
              <td className="u-align--center">-</td>
              <td className="u-align--center">-</td>
              <td className="u-align--center">Unlimited machines $75,000</td>
            </tr>
            <tr>
              <td>Phone and ticket support</td>
              <td className="u-align--center">None</td>
              <td className="u-align--center">8am - 6pm on weekdays</td>
              <td className="u-align--center">24 hours a day, everyday</td>
            </tr>
            <tr>
              <td>Ubuntu and CentOS deployment</td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
            </tr>
            <tr>
              <td>
                Landscape Management
                <br />
                (for the MAAS servers)
              </td>
              <td>&nbsp;</td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
            </tr>
            <tr>
              <td>
                Livepatch
                <br />
                (for the MAAS servers)
              </td>
              <td>&nbsp;</td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
            </tr>
            <tr>
              <td>Knowledge Base</td>
              <td>&nbsp;</td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
            </tr>
            <tr>
              <td>
                Windows, RHEL, and custom image
                <br />
                creation and deployment
              </td>
              <td>&nbsp;</td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
            </tr>
            <tr>
              <td>High availability (HA) support</td>
              <td>&nbsp;</td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
              <td className="u-align--center">
                <img
                  src="https://assets.ubuntu.com/v1/aeec264b-green-tick.svg"
                  width="16"
                  alt="Yes"
                />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>&nbsp;</td>
              <td className="u-align--center">
                <a href="/install">Install MAAS&nbsp;›</a>
              </td>
              <td className="u-align--center">
                <a href="/contact-us">Contact us&nbsp;›</a>
              </td>
              <td className="u-align--center">
                <a href="/contact-us">Contact us&nbsp;›</a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
);
