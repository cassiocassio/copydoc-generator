import React from "react";

export default (

<section class="p-strip is-shallow is-bordered">
      <div class="row">
        <div class="col-8 u-sv3">
          <h2>Useful tips</h2>
          <h4>Start and stop kubernetes</h4>
          <p>Bring k8s up and take it down as needed to preserve battery life when you don’t need it running:</p>
          <div class="p-code-snippet">
            <input class="p-code-snippet__input" aria-label="sudo microk8s.stop" value="sudo microk8s.stop" readonly="readonly">
          </div>
          <div class="p-code-snippet">
            <input class="p-code-snippet__input" aria-label="sudo microk8s.start" value="sudo microk8s.start" readonly="readonly">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <hr>
          <h4>Turn on standard services</h4>
          <div class="p-code-snippet">
            <input class="p-code-snippet__input" aria-label="microk8s.enable dashboard registry istio [...]" value="microk8s.enable dashboard registry istio [...]" readonly="readonly">
          </div>
          <p>Enable and disable particular standard add-on services using the <code>microk8s.enable</code> and <code>microk8s.disable</code> commands. See the <code>--help</code> for details.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <hr>
          <h4>Try a different version, or a beta, or a daily build</h4>
          <p>Snaps are published in <a href="https://docs.snapcraft.io/channels/551">channels</a> which are made up
            of a track (or major version), and an expected level of stability. Try <code>snap info microk8s</code> to
            see what versions are currently published. For example:</p>
          <div class="p-code-pre">
            <pre><code>channels:
  stable:         v1.13.0  (340) 204MB classic
  candidate:      v1.13.1  (354) 229MB classic
  beta:           v1.13.1  (354) 229MB classic
  edge:           v1.13.1  (354) 229MB classic
  1.13/stable:    v1.13.0  (340) 204MB classic
  1.13/candidate: v1.13.1  (356) 229MB classic
  1.13/beta:      v1.13.1  (356) 229MB classic
  1.13/edge:      v1.13.1  (356) 229MB classic
  1.12/stable:    v1.12.3  (336) 226MB classic
  1.12/candidate: v1.12.4  (362) 251MB classic
  1.12/beta:      v1.12.4  (362) 251MB classic
  1.12/edge:      v1.12.4  (362) 251MB classic
  1.11/stable:    v1.11.5  (322) 219MB classic
  1.11/candidate: v1.11.6  (361) 245MB classic
  1.11/beta:      v1.11.6  (361) 245MB classic
  1.11/edge:      v1.11.6  (361) 245MB classic
  1.10/stable:    v1.10.11 (321) 175MB classic
  1.10/candidate: v1.10.11 (321) 175MB classic
  1.10/beta:      v1.10.11 (321) 175MB classic
  1.10/edge:      v1.10.12 (364) 200MB classic</code></pre>
          </div>
          <p>You can <code>snap refresh --channel=latest/beta microk8s</code> or <code>snap refresh --channel=1.11/stable microk8s</code> and get the expected result.</p>
        </div>
      </div>
    </section> 
);