import React from "react";

export default (
  <div class="row">
    <div class="col-4">
      <h3 class="p-footer__title p-heading--four">MAAS</h3>
      <ul class="p-footer__list p-list">
        <li class="p-list__item">
          <a class="p-link--strong" href="/">
            Home
          </a>
        </li>
        <li class="p-list__item">
          <a class="p-link--strong" href="/install">
            Install MAAS
          </a>
        </li>
        <li class="p-list__item">
          <a class="p-link--strong" href="/how-it-works">
            How it works
          </a>
        </li>
        <li class="p-list__item">
          <a
            class="p-link--external p-link--strong"
            href="https://docs.maas.io"
          >
            Docs
          </a>
        </li>
        <li class="p-list__item">
          <a class="p-link--strong" href="/tour">
            Tour
          </a>
        </li>
      </ul>
    </div>

    <div class="col-4">
      <h3 class="p-footer__title p-heading--four">Need help?</h3>
      <ul class="p-footer__list p-list">
        <li class="p-list__item">
          <a
            class="p-link--external p-link--strong"
            href="https://askubuntu.com/questions/tagged/maas"
          >
            Ask Ubuntu
          </a>
        </li>
        <li class="p-list__item">
          <a
            class="p-link--external p-link--strong"
            href="http://webchat.freenode.net/?channels=maas"
          >
            Chat with MAAS on freenode
          </a>
        </li>
        <li class="p-list__item">
          <a
            class="p-link--external p-link--strong"
            href="https://lists.ubuntu.com/mailman/listinfo/maas-devel"
          >
            Join the mailing list
          </a>
        </li>
        <li class="p-list__item">
          <a class="p-link--strong" href="/contact-us">
            Commercial support
          </a>
        </li>
      </ul>
    </div>

    <div class="col-4">
      <h3 class="p-footer__title p-heading--four">Contribute</h3>
      <ul class="p-footer__list p-list">
        <li class="p-list__item">
          <a
            class="p-link--external p-link--strong"
            href="https://launchpad.net/maas"
          >
            Launchpad
          </a>
        </li>
        <li class="p-list__item">
          <a
            class="p-link--external p-link--strong"
            href="https://docs.maas.io/en/contributing-writing"
          >
            Contribute to documentation
          </a>
        </li>
      </ul>
    </div>
  </div>
);
