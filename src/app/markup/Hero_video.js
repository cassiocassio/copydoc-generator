import React from "react";

export default (

<section class="u-image-position p-strip--image is-dark is-deep" style="overflow: hidden; background-color: #111; background-image:url('https://assets.ubuntu.com/v1/d7047b19-maas+hero-background--no-left-edge.png'); background-size: 1440px 1440px; background-position: 50% 0; background-repeat: no-repeat;">
  <div class="row">
    <div class="col-6">
      <h1>Very fast <br class="u-hide--small u-hide--medium">server provisioning</h1>
      <p>Self-service, remote installation of Windows, CentOS and Ubuntu on real servers turns your data center into a bare metal cloud.</p>
      <p class="u-sv1">Welcome to metal-as-a-service.</p>
      <div>
        <a aria-label="Find out how to install MAAS" href="/install" class="p-button--positive" itemprop="url">Install MAAS</a>
        <a href="/how-it-works" class="p-button--neutral">See how it works</a>
      </div>
    </div>
    <div class="col-6 p-hero-video">
      <a href="#" aria-label="Watch the MAAS video on YouTube" class="p-hero-video__link" onclick="dataLayer.push({'event' : 'GAEvent', 'eventCategory' : 'Video', 'eventAction' : 'Play', 'eventLabel' : 'Watch the MAAS video' });">
        <img src="https://assets.ubuntu.com/v1/45146a8e-play-icon--white-on-black.svg" alt="" class="p-hero-video__play">
        <img src="https://assets.ubuntu.com/v1/a7e4808f-MAAS-video-cover-cleaner.png" alt="" class="u-no-margin--top">
      </a>
      <div class="p-hero-video__video-container u-embedded-media">
        <iframe class="p-hero-video__video u-embedded-media__element" width="640" height="480" src="https://www.youtube.com/embed/eHfaiKlUYsM" frameborder="0" allowfullscreen=""></iframe>
      </div>
    </div>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        var videoLink = document.querySelector('.p-hero-video__link');
        var video = document.querySelector('.p-hero-video__video');
        videoLink.addEventListener('click', function(e) {
          e.preventDefault();
          this.classList.add('is-playing');
          video.src += '?autoplay=1';
        });
      });
    </script>
  </div>
</section>

);
