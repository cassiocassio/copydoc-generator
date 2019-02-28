import React from "react";

export default (
  <div>
    <div className="row">
      <h2>Reliable, fast, small, upstream. Tasty!</h2>
    </div>
    <div className="row">
      <ul className="p-matrix u-clearfix">
        <li className="p-matrix__item">
          <div className="p-matrix__content">
            <h3 className="p-matrix__title">Fast install</h3>
            <div className="p-matrix__desc">
              <p>Get a full Kubernetes system running in under 60 seconds.</p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <div className="p-matrix__content">
            <h3 className="p-matrix__title">Secure</h3>
            <div className="p-matrix__desc">
              <p>Runs safely on your laptop with state of the art isolation.</p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <div className="p-matrix__content">
            <h3 className="p-matrix__title">Upstream</h3>
            <div className="p-matrix__desc">
              <p>
                CNCF binaries delivered to your laptop, with updates and
                upgrades.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <div className="p-matrix__content">
            <h3 className="p-matrix__title">Complete</h3>
            <div className="p-matrix__desc">
              <p>
                Includes a docker registry so you can make containers, push
                them, and deploy them all on your laptop.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <div className="p-matrix__content">
            <h3 className="p-matrix__title">Featureful</h3>
            <div className="p-matrix__desc">
              <p>
                Cool things you probably want to try on a small, standard K8s
                are all built-in. Just enable them and go.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <div className="p-matrix__content">
            <h3 className="p-matrix__title">Updates</h3>
            <div className="p-matrix__desc">
              <p>
                Get the daily build if you want it, or betas and milestones, or
                just stable point releases.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <div className="p-matrix__content">
            <h3 className="p-matrix__title">Upgrades</h3>
            <div className="p-matrix__desc">
              <p>
                When a new major version comes out, upgrade with a single
                command (or automatically).
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <div className="p-matrix__content">
            <h3 className="p-matrix__title">GPGPU Passthrough</h3>
            <div className="p-matrix__desc">
              <p>
                Give MicroK8s a GPGPU and your docker containers can get all
                nice and CUDA.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item u-hide--x-small">
          <div className="p-matrix__content">
            <h3 className="p-matrix__title">Small</h3>
            <div className="p-matrix__desc">
              <p>
                Use MicroK8s in your CI/CD pipelines and get on with your day
                without headaches.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
