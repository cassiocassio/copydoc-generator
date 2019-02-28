import React from "react";

export default (
  <div className="row">
    <div className="col-4">
      <h3 className="p-footer__title p-heading--four">MAAS</h3>
      <ul className="p-footer__list p-list">
        <li className="p-list__item">
          <a className="p-link--strong" href="/">
            Home
          </a>
        </li>
        <li className="p-list__item">
          <a className="p-link--strong" href="/install">
            Install MAAS
          </a>
        </li>
        <li className="p-list__item">
          <a className="p-link--strong" href="/how-it-works">
            How it works
          </a>
        </li>
        <li className="p-list__item">
          <a
            className="p-link--external p-link--strong"
            href="https://docs.maas.io"
          >
            Docs
          </a>
        </li>
        <li className="p-list__item">
          <a className="p-link--strong" href="/tour">
            Tour
          </a>
        </li>
      </ul>
    </div>

    <div className="col-4">
      <h3 className="p-footer__title p-heading--four">Need help?</h3>
      <ul className="p-footer__list p-list">
        <li className="p-list__item">
          <a
            className="p-link--external p-link--strong"
            href="https://askubuntu.com/questions/tagged/maas"
          >
            Ask Ubuntu
          </a>
        </li>
        <li className="p-list__item">
          <a
            className="p-link--external p-link--strong"
            href="http://webchat.freenode.net/?channels=maas"
          >
            Chat with MAAS on freenode
          </a>
        </li>
        <li className="p-list__item">
          <a
            className="p-link--external p-link--strong"
            href="https://lists.ubuntu.com/mailman/listinfo/maas-devel"
          >
            Join the mailing list
          </a>
        </li>
        <li className="p-list__item">
          <a className="p-link--strong" href="/contact-us">
            Commercial support
          </a>
        </li>
      </ul>
    </div>

    <div className="col-4">
      <h3 className="p-footer__title p-heading--four">Contribute</h3>
      <ul className="p-footer__list p-list">
        <li className="p-list__item">
          <a
            className="p-link--external p-link--strong"
            href="https://launchpad.net/maas"
          >
            Launchpad
          </a>
        </li>
        <li className="p-list__item">
          <a
            className="p-link--external p-link--strong"
            href="https://docs.maas.io/en/contributing-writing"
          >
            Contribute to documentation
          </a>
        </li>
      </ul>
    </div>
  </div>
);
