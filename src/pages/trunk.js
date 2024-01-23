import Head from "next/head";
import Link from "next/link";
import React from "react";

const Trunk = () => {
  return (
    <div>
      <Head>
        <title>Retractable Trunk</title>
        <meta property="og:title" content="Retractable Trunk" key="title" />
      </Head>
      <div className="my-20  ">
        <div className="head md:flex justify-between  w-5/6  mx-auto">
          <div className="text-black font-semibold text-3xl mb-2 sm:mb-0">
            The Retractable Trunk
          </div>
        </div>

        <div className="embodimentMain">
          <div className="">
            <div className="flex flex-col-reverse  ">
              <div className="vid w-5/6 md:flex gap-2 mx-auto">
                <div className="md:w-1/2">
                  <div className="text-3xl my-4 text-black font-extrabold ">
                    Embodiment 01
                  </div>
                  <video
                    className="rounded-3xl w-full"
                    controls
                    autoPlay={true}
                    loop
                    src="/01.mov"
                  ></video>
                </div>

                <div className="vid md:w-1/2  ">
                  <div className="text-3xl my-4 text-black font-extrabold">
                    Embodiment 02
                  </div>
                  <video
                    className="rounded-3xl w-full"
                    controls
                    autoPlay={true}
                    loop
                    src="/02.mov"
                  ></video>
                </div>
              </div>
              <div className="txt w-5/6  mx-auto  lg:mt-0 xl:mt-4">
                <div className="head flex  justify-between"></div>

                <div className="mt-4 text-gray-700 font-bold lg:mt-1 lg:leading-none xl:mt-4 xl:leading-normal ">
                  <div>
                    <div className="my-2 font-bold">
                      Traditional vehicle trunks often go{" "}
                      <span className="">underutilized</span> leaving accupants
                      cramped for legroom.
                    </div>
                    This simple-to-implement pending patent{" "}
                    <span className=""> replaces </span> the traditional trunk
                    partially or completely or serves as a supplementary storage
                    solution.
                    <div className="flex mt-2 justify-between font-bold">
                      <div>
                        <div className="my-2">
                          Replacing the trunk brings forth a host of advantages:
                        </div>
                        <span className="text-red-500 font-extrabold"> 1.</span>{" "}
                        Increased Legroom. <br />
                        <span className="text-red-500 font-extrabold">
                          2.
                        </span>{" "}
                        <span className=""> Increased cargo capacity: </span> A
                        small hatchback, for example holds up to six large
                        suitcases. <br />
                        <span className="text-red-500 font-extrabold">
                          {" "}
                          3.
                        </span>{" "}
                        Reduced production costs. <br />
                        <span className="text-red-500 font-extrabold">
                          {" "}
                          4.
                        </span>{" "}
                        Improved performance and efficiency. <br />
                        <span className="text-red-500 font-extrabold">
                          {" "}
                          5.
                        </span>{" "}
                        Possibility to add a third-row seat to mid-size
                        vehicles. <br />
                        <span className="text-red-500 font-extrabold">
                          {" "}
                          6.
                        </span>{" "}
                        The foldable box is made of hard plastic and can be
                        deployed in less then 3 seconds.
                        <br />
                        <span className="text-red-500 font-extrabold">
                          {" "}
                          7.
                        </span>{" "}
                        In essence, the vehicle can offer ample legroom and storage despite being compact in size, making it both fuel-efficient and cost-effective to build. <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         

          <div className="sm:flex-row flex justify-between w-5/6 mx-auto flex-col mt-6">
            <button className="bg-red-600 text-white px-6 py-2 rounded-xl w-fit mx-2">
              View PDF
            </button>
            <Link
              href="embodiment"
              className="bg-red-600 text-white px-6 py-2 w-fit mt-4 sm:mt-0 rounded-xl"
            >
              Other Embodiments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trunk;
