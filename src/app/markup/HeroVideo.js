import React from "react";

export default (
  <div>
    <div className="row">
      <div className="col-6">
        <h1>
          Very fast
          <br className="u-hide--small u-hide--medium" />
          server provisioning
        </h1>
        <p>
          Self-service, remote installation of Windows, CentOS and Ubuntu on
          real servers turns your data center into a bare metal cloud.
        </p>
        <p className="u-sv1">Welcome to metal-as-a-service.</p>
        <div>
          <a
            aria-label="Find out how to install MAAS"
            href="/install"
            className="p-button--positive"
          >
            Install MAAS
          </a>
          <a href="/how-it-works" className="p-button--neutral">
            See how it works
          </a>
        </div>
      </div>
      <div className="col-6 p-hero-video">
        <a
          href="#a"
          aria-label="Watch the MAAS video on YouTube"
          className="p-hero-video__link"
        >
          <img
            src="https://assets.ubuntu.com/v1/a7e4808f-MAAS-video-cover-cleaner.png"
            alt=""
            className="u-no-margin--top"
          />
        </a>
      </div>
    </div>
  </div>
);
