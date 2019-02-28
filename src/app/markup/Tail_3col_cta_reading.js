import React from "react";

export default (
  <div class="p-strip p-contextual-footer">
    <div class="row">
      <div class="p-divider">
        <div class="col-4 p-divider__block">
          <h3 class="p-heading--four">Growing your cloud?</h3>
          <p>
            Ubuntu Advantage enterprise support agreements include Canonical
            OpenStack at no extra charge.
          </p>
          <p>
            <a
              class="p-button--positive"
              href="https://buy.ubuntu.com/"
              onclick="dataLayer.push({'event' : 'GAEvent', 'eventCategory' : 'Contextual footer link', 'eventAction' : 'cloud Ubuntu Advantage', 'eventLabel' : 'Buy now', 'eventValue' : undefined });"
            >
              Buy now
            </a>{" "}
            or{" "}
            <a class="js-invoke-modal" href="/support/contact-us">
              contact us&nbsp;›
            </a>
          </p>
        </div>

        <div class="col-4 p-divider__block">
          <h3 class="p-heading--four">Talk to us</h3>
          <p>
            Let our cloud experts help you get started in the right direction
            with OpenStack, with consulting, training or outsourced operations.
          </p>
          <p>
            <a
              class="p-button--neutral js-invoke-modal"
              href="/openstack/contact-us"
              onclick="dataLayer.push({'event' : 'GAEvent', 'eventCategory' : 'Contextual footer link', 'eventAction' : 'cloud contact-us', 'eventLabel' : 'Get in touch', 'eventValue' : undefined });"
            >
              Contact us
            </a>
          </p>
        </div>

        <div class="col-4 p-divider__block">
          <h3 class="p-heading--four">Further reading</h3>

          <ul class="p-list">
            <li class="p-list__item">
              <a href="https://blog.ubuntu.com/2019/02/07/financial-services-businesses-say-multi-cloud-is-central-to-their-plans-for-ai-containers-and-blockchain-451-research-reveals/">
                Financial services businesses say multi-cloud is central to
                their plans for AI, containers and blockchain, 451 Research
                reveals&nbsp;›
              </a>
            </li>

            <li class="p-list__item">
              <a href="https://blog.ubuntu.com/2019/01/28/taking-octavia-for-a-ride-with-kubernetes-on-openstack/">
                Taking Octavia for a ride with Kubernetes on OpenStack&nbsp;›
              </a>
            </li>

            <li class="p-list__item">
              <a href="https://blog.ubuntu.com/2018/12/11/canonical-support-kubernetes-1-13-ubuntu/">
                Canonical announces support for Kubernetes 1.13 on Ubuntu&nbsp;›
              </a>
            </li>

            <li class="p-list__item">
              <a href="https://blog.ubuntu.com/2018/12/10/using-gpgpus-with-kubernetes/">
                Using GPGPUs with Kubernetes&nbsp;›
              </a>
            </li>

            <li class="p-list__item">
              <a href="https://blog.ubuntu.com/2018/12/06/canonical-and-dell-emc-provide-certified-production-ready-kubernetes-solution/">
                Canonical and Dell EMC provide certified, production-ready
                Kubernetes solution&nbsp;›
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
