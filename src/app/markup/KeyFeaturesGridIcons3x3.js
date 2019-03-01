import React from "react";

/* eslint-disable */
export default (
  <div>
    <div className="row">
      <h2> &lt;Key features of the product with theme icons</h2>
    </div>
    <div className="row">
      <ul className="p-matrix">
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/93830fc8-MAAS_icon_Automation.svg"
            alt="Automation cog icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <a
                className="p-link--strong p-heading--five"
                aria-label="Learn more about automatic discovery and registration of every device on the network"
                href="/tour#automation"
              >
                Automation&nbsp;›
              </a>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Automatic discovery and registration of every network device.{" "}
                <abbr title="Baseboard Management Controller">BMC</abbr> ops
                with{" "}
                <abbr title="Intelligent Platform Management Interface">
                  IPMI
                </abbr>
                , <abbr title="Active Management Techonology">AMT</abbr> and
                other protocols.
              </p>
              <p>
                <abbr title="Preboot Execution Environment">PXE</abbr> over{" "}
                <abbr title="Internet Protocol version 4">IPv4</abbr> and{" "}
                <abbr title="Internet Protocol version 6">IPv6</abbr> networks.
                APIs for DNS, DHCP, IPAM, server configuration and provisioning.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/e0e09ca6-MAAS_icon_Speed.svg"
            alt="Speed icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <a
                className="p-link--strong p-heading--five"
                href="/tour#fast-deployment"
              >
                Speed&nbsp;›
              </a>
            </h4>
            <div className="p-matrix__desc">
              <p>Zero-touch deployment of Ubuntu, CentOS, Windows and RHEL.</p>
              <p>
                Full deployment time is approximately two boot cycles plus two
                minutes for disk imaging.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/8d9ac370-MAAS_icon_Inventory.svg"
            alt="Inventory icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <a
                className="p-link--strong p-heading--five"
                href="/how-it-works#node-lifecycle"
              >
                Inventory&nbsp;›
              </a>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Discover every PCI and USB device in every server. Inventory
                disk models and serial numbers. Provision machines based on
                specific inventory details.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/0ab10d32-MAAS_icon_Storage.svg"
            alt="Storage layouts icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <a
                className="p-link--strong p-heading--five"
                href="/tour#configure-servers"
              >
                Storage layouts&nbsp;›
              </a>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Create advanced filesystem layouts with{" "}
                <abbr title="Redundant array of independent disks">RAID</abbr>,{" "}
                <abbr title="Block Cache">bcache</abbr>,{" "}
                <abbr title="Logical Volume Management">LVM</abbr>, ZFS and
                more. Automate storage configuration through APIs. Allocate
                servers based on storage.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/086349be-MAAS_icon_IPAM.svg"
            alt="IPAM icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <a
                className="p-link--strong p-heading--five"
                href="/tour#configure-servers"
              >
                IPAM, DHCP, DNS&nbsp;›
              </a>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Configure server network interfaces with bridges,{" "}
                <abbr title="Virtual Local Area Network">VLAN</abbr>s, bonds and
                addresses.
              </p>
              <p>
                Integrated, best of breed, highly available, open source DHCP,
                and DNS.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/d3d238c8-MAAS_icon_Hardware+Testing.svg"
            alt="Hardware testing icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <a
                className="p-link--strong p-heading--five"
                href="/tour#hardware-testing"
              >
                Hardware testing&nbsp;›
              </a>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Run tests to get up to date information about hardware health.
              </p>
              <p>Benchmark disk, RAM, CPU and network performance.</p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/77288bc2-MAAS_icon_DevOps+Integration.svg"
            alt="DevOps icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <span className="p-heading--five">DevOps on bare metal</span>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Integration with Chef, Puppet, SALT, Ansible, Conjure-up, and{" "}
                <a className="p-link--external" href="https://jujucharms.com/">
                  Juju
                </a>
                .
              </p>
              <p>
                REST API, CLI and Python bindings enable full lifecycle and
                project automation.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/454f5853-MAAS_icon_network_monitoring.svg"
            alt="Network monitoring icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <a
                className="p-link--strong p-heading--five"
                href="/tour#manage-network"
              >
                Network monitoring&nbsp;›
              </a>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Continuously observes network traffic and catalogs every active
                IP address of unknown origin.
              </p>
              <p>
                Discovers rogue devices, IPs and MAC addresses. Drives active
                scanning of network ranges.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/b78dd440-MAAS_icon_authenticate.svg"
            alt="Authentication icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <span className="p-heading--five">
                Authentication and Identity
              </span>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Integrate with LDAP, Active Directory or SAML for central
                identity management and single-sign-on across multiple MAAS
                regions.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/9358a090-MAAS_icon_Composible+Systems.svg"
            alt="Composable systems icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <span className="p-heading--five">Composable systems</span>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Drive Cisco UCS, Intel RSD, HP Moonshot, and more. Supports
                dynamic hardware composition with Intel RSD.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/cb1205a5-MAAS_icon_Cloud+Metadata.svg"
            alt="Cloud metadata icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <span className="p-heading--five">Cloud metadata</span>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Reuse standard cloud operations with cloud-init and metadata
                services. Hybrid multicloud operations now include bare metal,
                with no change in applications.
              </p>
            </div>
          </div>
        </li>
        <li className="p-matrix__item">
          <img
            className="p-matrix__img"
            src="https://assets.ubuntu.com/v1/bbaafa51-MAAS_icon_KVM+Multi-Cloud.svg"
            alt="KVM Micro-cloud icon"
          />
          <div className="p-matrix__content">
            <h4 className="p-matrix__title">
              <span className="p-heading--five">KVM micro-cloud</span>
            </h4>
            <div className="p-matrix__desc">
              <p>
                Designate servers to host KVM virtual machines to be dynamically
                provisioned alongside physical servers.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
