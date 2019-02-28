import React from "react";

export default (
  <div>
    <div className="row">
      <div className="col-12">
        <h2 className="p-link--external p-muted-heading">
          <a
            className="p-link--strong"
            aria-label="External link to find more MAAS news from the Ubuntu blog"
            href="https://blog.ubuntu.com/tag/maas"
          >
            The latest MAAS news
          </a>
        </h2>
      </div>
    </div>
    <div className="row">
      <div id="insights-cloud-feed" className="p-divider">
        <article className="col-4 p-divider__block">
          <h3 className="p-heading--four">
            <a href="https://insights.ubuntu.com/2019/02/20/design-and-web-team-summary-20-february-2019/">
              Design and Web team summary – 20 February 2019
            </a>
          </h3>
          <footer>
            <time pubdate="" dateTime="Wed, 20 Feb 2019 14:14:23 +0000">
              20 February 2019
            </time>
          </footer>
        </article>

        <article className="col-4 p-divider__block">
          <h3 className="p-heading--four">
            <a href="https://insights.ubuntu.com/2019/02/04/design-and-web-team-summary-04-february-2019/">
              Design and Web team summary – 04 February 2019
            </a>
          </h3>
          <footer>
            <time pubdate="" dateTime="Mon, 04 Feb 2019 15:42:55 +0000">
              4 February 2019
            </time>
          </footer>
        </article>

        <article className="col-4 p-divider__block">
          <h3 className="p-heading--four">
            <a href="https://insights.ubuntu.com/2019/01/16/maas-2-5-growing-the-ecosystem-and-support-for-kvm-micro-clouds/">
              MAAS 2.5 : Growing the ecosystem and support for KVM micro-clouds
            </a>
          </h3>
          <footer>
            <time pubdate="" dateTime="Wed, 16 Jan 2019 10:48:57 +0000">
              16 January 2019
            </time>
          </footer>
        </article>
      </div>
    </div>
  </div>
);
