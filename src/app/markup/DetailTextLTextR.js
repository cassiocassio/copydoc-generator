import React from "react";

export default (
  <div>
    <div className="row p-divider">
      <div className="col-6 p-divider__block">
        <h2>Enterprise peace of mind</h2>
        <p>
          Canonical works with OEMs to deliver Ubuntu certified Edge Gateways.
          You can be sure Ubuntu Core will run out of the box with all the tools
          you require to manage and deploy software across all your devices.
        </p>
        <p>
          <a
            href="/internet-of-things/contact-us?product=gateways"
            className="p-button--positive js-invoke-modal"
          >
            Contact us to find out&nbsp;more
          </a>
        </p>
      </div>
      <div className="col-6 p-divider__block">
        <h2>Simple development and distribution for ISVs and SIs</h2>
        <p>
          Independent software vendors and system integrators develop with the
          familiar environment and use the wealth of libraries available in
          Ubuntu. With Ubuntu Core you can easily manage the software you
          distribute. Use the Ubuntu Store to reach new customers.
        </p>
        <p>
          <a className="p-link--external" href="http://snapcraft.io/">
            Find out more about&nbsp;snaps
          </a>
        </p>
      </div>
    </div>
  </div>
);
