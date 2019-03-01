import React from "react";

export default (
  <div>
    <div className="row">
      <h2> &lt;Major statement about product&gt;</h2>
    </div>
    <div className="row">
      <div className="col-6">
        <h4> &lt;Second sentence to detail this claim&gt;.</h4>
        <p>
          It’s not elastic, but it is on rails. Use it for offline development,
          prototyping, testing, or use it on a VM as a small, cheap, reliable
          k8s for CI/CD. Makes a great k8s for appliances - develop your IoT
          apps for k8s and deploy them to MicroK8s on your boxes.
        </p>
        <p>
          <a className="p-button--positive" href="#quick-start">
            Get started with MicroK8s
          </a>
        </p>
      </div>
      <div className="col-6">
        <blockquote className="p-pull-quote">
          <p>
            &lt;Quote from a credible source that backs up our claim in a
            concrete and emotional manner. Two sentences will be enough&gt;
          </p>
          <cite className="p-pull-quote__citation">
            Posted in&nbsp;
            <a
              href="https://kubernetes.slack.com/messages/microk8s/"
              className=" p-link--external"
            >
              #microk8s
            </a>
          </cite>
        </blockquote>
      </div>
    </div>
  </div>
);
