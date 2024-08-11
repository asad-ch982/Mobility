import Head from "next/head";
import React from "react";

const Embodiments = ({ language, setLanguage }) => {
  return (
    <div>
      <Head>
        <title>{language ? "可收缩后备箱" : "Retractable Trunk"} </title>
        <meta property="og:title" content="Other Embodements" key="title" />
      </Head>
      <div className="my-20  w-5/6 mx-auto">
        <div className="head flex justify-between my-2  mx-auto">
          <div className="text-black font-semibold text-3xl">
            {language ? "可收缩后备箱" : "The Retractable Trunk"}
          </div>
        </div>

        <div className="embodimentMain">
          <div className="">
            <div className="flex flex-col-reverse  my-2">
              <div className="txt  mx-auto mt-4 lg:mt-0 xl:mt-4">
                <div className="head flex  justify-between"></div>

                {/* <div className="mt-4 text-gray-700 font-medium lg:mt-1 lg:leading-none xl:mt-4 xl:leading-normal  my-6">
                  <div className=" mb-2 font-bold text-xl text-red-500">
                    Enhancing Comfort and Utility:
                  </div>
                  <div>
                    Traditional vehicle trunks often go underutilized, leaving
                    occupants cramped for legroom. The retractable trunk
                    presents a solution to this issue by either replacing the
                    trunk entirely, reducing its size, or merely increasing the
                    vehicle’s storage capacity. <br />
                    This pending patent not only tackles discomfort but also
                    brings forth a multitude of benefits.With the retractable
                    trunk, the vehicle can paradoxically be compact in size,
                    efficient, environmentally friendly, cheap to build, and yet
                    offer ample storage and spacious legroom.
                  </div>
                  <div className=" mb-2 font-bold text-xl text-red-500 mt-2">
                    Compact Design :
                  </div>
                  <div>
                    The retractable trunk showcases a design that is compact,
                    efficient in utilizing space, and integrates seamlessly into
                    the vehicle's rear when not deployed.
                  </div>
                  <div className=" mb-2 font-bold text-xl text-red-500">
                    Enhanced Functionality :
                  </div>
                  <div>
                    The retractable trunk can be optionally equipped with a
                    simple lifting mechanism, allowing the platform to move
                    vertically and making it easier to handle and transport
                    cargo.
                  </div>
                  <div className=" mb-2 font-bold mt-2 text-xl text-red-500">
                    Instant Accessibility:
                  </div>
                  <div>
                    With a deployment time of less than three seconds, the
                    retractable trunk ensures effortless and rapid access to
                    extra storage space.
                  </div>
                  <div className=" mb-2 font-bold mt-2 text-xl text-red-500">
                    Improving Efficiency and Performance:
                  </div>
                  <div>
                    Substituting or reducing the conventional trunk's size leads
                    to a significant reduction in the vehicle's weight,
                    enhancing vehicle efficiency and performance.
                  </div>
                  <div className=" mb-2 font-bold text-xl text-red-500">
                    Decreased Production Cost :
                  </div>
                  <div>
                  Streamlining production through partial or complete trunk substitution and, in some cases, trunk lid elimination.
                  </div>
                  <div className=" mb-2 font-bold mt-2 text-xl text-red-500">
                    Increased Cargo Capacity:
                  </div>
                  <div>
                    Even compact vehicles like hatchbacks gain remarkable cargo
                    capacity, accommodating up to six large suitcases
                    volumetrically.
                  </div>
                  <div className=" mb-2 font-bold mt-2 text-xl text-red-500">
                    Expanded Legroom:
                  </div>
                  <div>
                    By substituting or reducing the trunk's size, valuable space
                    is freed up, which can be utilized to increase the vehicle's
                    legroom.
                  </div>
                  <div className=" mb-2 font-bold text-xl text-red-500">
                    Third Row seating:
                  </div>
                  <div className="font-medium">
                    Furthermore, the available trunk space could be utilized for
                    incorporating a foldable third-row seat in mid-size vehicles
                    or accommodating a comfortable full-size third-row seat in
                    7-seater vehicles.
                  </div>
                  <div className=" mb-2 font-bold mt-4 text-xl text-red-500">
                    Implementation and Standardization :
                  </div>
                  <div className="font-medium">
                    A small selection of product size versions is adequate for
                    use across diverse vehicle types and models. In addition,
                    the first embodiment comprises a drawer-like mechanism,
                    while the second embodiment features a foldable platform
                    with hinges. Both embodiments exhibit a certain level of
                    simplicity; therefore, integrating this concept into the
                    design process leads to straightforward and cost-effective
                    standardization and implementation.
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="md:flex  gap-2 my-8">
              <div className="vid md:w-1/2  mx-auto">
                <div className="text-3xl text-black font-extrabold my-4">
                  {language ? " 型號 3" : " Embodiment 03"}
                </div>
                <video
                  className="rounded-3xl w-full"
                  controls
                  autoPlay={false}
                  loop
                  src="/03.mov"
                ></video>
              </div>
              <div className="vid md:w-1/2  mx-auto">
                <div className="text-3xl text-black font-extrabold my-4">
                  {language ? " 型號 4" : " Embodiment 04"}
                </div>
                <video
                  className="rounded-3xl w-full"
                  controls
                  autoPlay={false}
                  loop
                  src="/04.mov"
                ></video>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="  my-8">
              <div className="vid md:w-1/2  ">
                <div className="text-3xl text-black font-extrabold my-4">
                  {language ? " 型號 5" : " Embodiment 05"}
                </div>
                <video
                  className="rounded-3xl w-full"
                  controls
                  autoPlay={false}
                  loop
                  src="/05.mov"
                ></video>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-700 w-5/6  mx-auto"></div>
      </div>
    </div>
  );
};

export default Embodiments;
