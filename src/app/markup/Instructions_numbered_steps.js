import React from "react";

export default (
<section class="p-strip is-deep is-bordered">
        <div class="row">
          <div class="col-12">
            <ol class="p-stepped-list--detailed">
              <li class="p-list-step__item ">
                <h3 class="p-list-step__title">
                  <span class="p-list-step__bullet">1</span>
                  Setup your hardware
                </h3>
                <p class="p-list-step__content">You need one small server for MAAS and at least one server which can be managed with a <abbr title="Baseboard Management Controller">BMC</abbr>. It is recommended to have the MAAS server provide <abbr title="Dynamic Host Configuration Protocol">DHCP</abbr> and <abbr title="Domain Name Service">DNS</abbr> on a network the managed machines are connected to.</p>
              </li>
              <li class="p-list-step__item">
                <h3 class="p-list-step__title">
                  <span class="p-list-step__bullet">2</span>
                  Install Ubuntu Server
                </h3>
                <p class="p-list-step__content"><a aria-label="External link to download Ubuntu Server 16.04 LTS" href="http://www.ubuntu.com/download/server" onclick="dataLayer.push({'event' : 'GAEvent', 'eventCategory' : 'Download Ubuntu Server', 'eventAction' : 'Click', 'eventLabel' : 'Download Ubuntu Server 16.04 LTS' });" class="p-link--external">Download Ubuntu Server 18.04 LTS</a> and follow the step-by-step installation instructions on your MAAS server.</p>
              </li>
              <li class="p-list-step__item">
                <h3 class="p-list-step__title">
                  <span class="p-list-step__bullet">3</span>
                  Install MAAS
                </h3>
                <div class="p-list-step__content">
                  <div class="p-code-snippet">
                      <input class="p-code-snippet__input" value="sudo apt update" readonly="readonly">
                      <button class="p-code-snippet__action">Copy to clipboard</button>
                  </div>
                  <div class="p-code-snippet">
                      <input class="p-code-snippet__input" value="sudo apt install maas" readonly="readonly">
                      <button class="p-code-snippet__action">Copy to clipboard</button>
                  </div>
                </div>
              </li>
              <li class="p-list-step__item">
                <h3 class="p-list-step__title">
                  <span class="p-list-step__bullet">4</span>
                  Create admin user
                </h3>
                <div class="p-list-step__content">
                  <p>Create your admin credentials by typing.</p>
                  <div class="p-code-snippet">
                      <input class="p-code-snippet__input" value="sudo maas init" readonly="readonly">
                      <button class="p-code-snippet__action" onclick="dataLayer.push({'event' : 'GAEvent', 'eventCategory' : 'Completion', 'eventAction' : 'Click', 'eventLabel' : 'Install' });">Copy to clipboard</button>
                  </div>
                  <p>Login to the MAAS <abbr title="User interface">UI</abbr> at http://&lt;your.maas.ip&gt;:5240/MAAS/</p>
                </div>
              </li>
              <li class="p-list-step__item">
                <h3 class="p-list-step__title">
                  <span class="p-list-step__bullet">5</span>
                  Complete the first user configuration journey
                </h3>
                <div class="p-list-step__content">
                  <p>Follow the instructions on screen to complete the first installation of MAAS. We recommend using the default values unless your installation has different requirements.</p>
                  <p>By the end of the journey you should have the following configured;</p>
                  <ul>
                      <li>Region name (MAAS name)</li>
                      <li>Ubuntu archive, Ubuntu extra architectures</li>
                      <li>Ubuntu images</li>
                      <li><abbr title="Secure shell">SSH</abbr> keys (for currently logged in user)</li>
                  </ul>
                  <p><a href="https://assets.ubuntu.com/v1/0d7788a1-Complete+the+first+user+configuration+journey.png" class="venobox venobox--expand vbox-item" data-gall="installGallery" title="Initial screen of the first use journey">
                    <img class="p-image--bordered" src="https://assets.ubuntu.com/v1/0d7788a1-Complete+the+first+user+configuration+journey.png?w=552" alt="First user journey screenshot"></a></p>
                </div>
              </li>
              <li class="p-list-step__item">
                <h3 class="p-list-step__title">
                  <span class="p-list-step__bullet">6</span>
                  Turn on DHCP
                </h3>
                <div class="p-list-step__content">
                  <p>Go to the “Subnets” tab, and select the <abbr title="Virtual Local Area Network">VLAN</abbr> for which you want to enable DHCP. From the “Take action” button select “Provide DHCP”.</p>
                  <ol>
                      <li>Set the Rack controller that will manage DHCP.</li>
                      <li>Select the subnet where to create the DHCP Dynamic range on.</li>
                      <li>Fill in the details for the dynamic range.</li>
                  </ol>
                  <p><a href="https://assets.ubuntu.com/v1/57bf7d7e-Turn+on+DHCP.png" class="venobox venobox--expand vbox-item" data-gall="installGallery" title="VLAN details page in an active MAAS">
                      <img class="p-image--bordered" src="https://assets.ubuntu.com/v1/57bf7d7e-Turn+on+DHCP.png?w=552" alt="VLAN details">
                  </a></p>
                </div>
              </li>
              <li class="p-list-step__item">
                <h3 class="p-list-step__title">
                  <span class="p-list-step__bullet">7</span>
                  Enlist and commission servers
                </h3>
                <div class="p-list-step__content">
                  <p>Now MAAS is ready to enlist and commission machines.</p>
                  <ol>
                      <li>Set all the servers to <abbr title="Preboot Execution Environment">PXE</abbr> boot</li>
                      <li>Boot each machine once. You should see these machines appear in MAAS</li>
                      <li>If your machines do not have a <abbr title="Intelligent Platform Management Interface">IPMI</abbr> based BMC, proceed to edit them and enter their BMC details</li>
                      <li>Select all the machines and “Commission” them using the “Take action” button</li>
                      <li>When machines have a “Ready” status you can start deploying</li>
                  </ol>
                  <p><a href="https://assets.ubuntu.com/v1/18191366-Enlist+and+commission+servers.png" class="venobox venobox--expand vbox-item" data-gall="installGallery" title="The node listing page in MAAS">
                      <img src="https://assets.ubuntu.com/v1/18191366-Enlist+and+commission+servers.png?w=552" class="p-image--bordered" alt="MAAS node listing">
                  </a></p>
                  <p><a class="p-link--external" href="https://docs.maas.io/en/">Refer to the user manual to get a more detailed guide in how to get up and running with MAAS</a></p>
                </div>
              </li>
            </ol>
          </div>
        </div>
    </section>
    );