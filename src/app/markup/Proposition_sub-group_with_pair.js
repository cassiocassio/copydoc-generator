import React from "react";

export default (
  <section class="p-strip--light">
    <div class="row">
      <div class="col-6">
        <h2>Storage</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h4>Inventory, testing and benchmarking</h4>
        <p>
          MAAS detects and inventories all the disks, in every server. You’ll
          have a single database of every model and serial number.
        </p>
        <p>
          MAAS tests disks either non-destructively or destructively, with short
          or long write cycle, and learns about their performance.
        </p>
      </div>
      <div class="col-6">
        <h4>RAID, LVM, Bcache, ZFS and more</h4>
        <p>
          Auto-tagging of SSD and rotary disk types makes it easy to know which
          disks to use for each application.
        </p>
        <p>
          Your users configure the storage of any server they control: RAID,
          LVM, Bcache and ZFS. Configure boot, applications and backup disks
          exactly where you want them — and get the installed machine, a few
          minutes later.
        </p>
      </div>
    </div>
  </section>
);
