import React, { Fragment } from "react";

const strips = [
  {
    type: "normal",
    name: "Normal strip",
    jsx: (
      <div className="row">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          dolore tempore vero cumque quibusdam nobis vel mollitia repellendus
          expedita sit, deserunt explicabo aspernatur ipsa at est sed
          perferendis fugiat porro officia? Libero consectetur incidunt ad
          inventore, ut exercitationem, reprehenderit cupiditate laboriosam
          veritatis, laudantium minus velit unde perferendis ipsam earum quis!
        </p>
      </div>
    )
  },
  {
    type: "image",
    name: "Image strip",
    jsx: (
      <Fragment>
        <div className="row">
          <h1>Lorem ipsum</h1>
        </div>
        <div className="row">
          <div className="col-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="col-6">
            <img
              src="http://suplugins.com/podium/images/placeholder-05.jpg"
              alt=""
            />
          </div>
        </div>
      </Fragment>
    )
  }
];

export default strips;
