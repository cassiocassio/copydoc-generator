import React from "react";

export default (
  <div>
    <div className="row">
      <h2 className="p-muted-heading">Features</h2>
    </div>
    <div className="row u-equal-height">
      <div className="col-3">
        <ul className="p-list--divided">
          <li className="p-list__item is-ticked">Istio</li>
          <li className="p-list__item is-ticked">GPGPU bindings</li>
          <li className="p-list__item is-ticked">Daily builds</li>
        </ul>
      </div>
      <div className="col-3">
        <ul className="p-list--divided">
          <li className="p-list__item is-ticked">Local storage</li>
          <li className="p-list__item is-ticked">Local registry</li>
          <li className="p-list__item is-ticked">Updates</li>
        </ul>
      </div>
      <div className="col-3">
        <ul className="p-list--divided">
          <li className="p-list__item is-ticked">Dashboard</li>
          <li className="p-list__item is-ticked">Metrics</li>
          <li className="p-list__item is-ticked">Upgrades</li>
        </ul>
      </div>
      <div className="col-3">
        <ul className="p-list--divided">
          <li className="p-list__item is-ticked">Ingress</li>
          <li className="p-list__item is-ticked">DNS</li>
          <li className="p-list__item is-ticked">Conformant</li>
        </ul>
      </div>
    </div>
  </div>
);
