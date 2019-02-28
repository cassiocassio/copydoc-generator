import React from "react";

export default (
  <div>
    <div className="row">
      <h2>Single node Kubernetes done right</h2>
    </div>
    <div className="row">
      <div className="col-6">
        <h4>Zero-ops k8s on just about any Linux box.</h4>
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
            dear microk8s team: you are awesome. Microk8s has tangibly improved
            my life and my CI pipelines as a developer of k8s controllers
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
