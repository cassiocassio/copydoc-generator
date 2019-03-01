import React from "react";

export default (
  <div>
    <div className="row u-equal-height u-vertically-center">
      <div className="col-7">
        <h1>
          &lt;Headline in six words
          <br />
          broken nicely&gt;
        </h1>
        <p>
          Ubuntu is the reference platform for Kubernetes on all major public
          clouds, including official support in Google’s GKE, Microsoft’s AKS
          and Amazon’s EKS CAAS offerings. We deliver pure upstream Kubernetes
          tested across the widest range of clouds &mdash; from public clouds to
          private data centres, from bare metal to virtualized infrastructure.
        </p>
      </div>
      <div className="col-4 prefix-1 u-align--center u-hide--small">
        <img
          src="https://assets.ubuntu.com/v1/dba11aee-kubernetes.svg?w=275"
          alt=""
          width="275"
        />
      </div>
    </div>
  </div>
);
