import Head from "next/head";
import Link from "next/link";
import React from "react";

const Trunk = ({language,setLanguage}) => {
  return (
    <div>
      <Head>
        <title> {language?"可收缩后备箱":" Retractable Trunk"} </title>
        <meta property="og:title" content="Retractable Trunk" key="title" />
      </Head>
      <div className="my-10  ">
        <div className="head md:flex justify-between  w-5/6  mx-auto">
          <div className="text-black font-semibold text-3xl mb-2 sm:mb-0">
          {language?"可收缩后备箱":" Retractable Trunk"} 
          </div>
        </div>

        <div className="embodimentMain">
          <div className="">
            <div className="flex flex-col-reverse  ">
              <div className="vid w-5/6 md:flex gap-2 mx-auto">
                <div className="md:w-1/2">
                  <div className="text-3xl my-4 text-black  ">
                  {language?" 型號 1":" Embodiment 01"}  
                  </div>
                  <video
                    className="rounded-3xl w-full"
                    controls
                    autoPlay={false}
                    loop
                    src="/01.mov"
                  ></video>
                </div>

                <div className="vid md:w-1/2  ">
                  <div className="text-3xl my-4 text-black ">
                  {language?" 型號 2":" Embodiment 02"} 
                  </div>
                  <video
                    className="rounded-3xl w-full"
                    controls
                    autoPlay={false}
                    loop
                    src="/02.mov"
                  ></video>
                </div>
              </div>
              <div className="txt w-5/6  mx-auto  lg:mt-0 xl:mt-4">
                <div className="head flex  justify-between"></div>

                <div className="mt-4 text-gray-700  lg:mt-1 lg:leading-none xl:mt-4 xl:leading-normal ">
                  <div>
                    <div className="my-2 ">
                      Traditional vehicle trunks often go{" "}
                      <span className="">underutilized</span> leaving accupants
                      cramped for legroom.
                    </div>
                    This simple-to-implement pending patent{" "}
                    <span className=""> replaces </span> the traditional trunk
                    partially or completely or serves as a supplementary storage
                    solution.
                    <div className="flex mt-2 justify-between ">
                      <div>
                        <div className="my-2">
                          Replacing the trunk brings forth a host of advantages:
                        </div>
                        <span className="text-red-500 "> 1.</span>{" "}
                        Increased Legroom. <br />
                        <span className="text-red-500 ">
                          2.
                        </span>{" "}
                        <span className=""> Increased cargo capacity: </span> A
                        small hatchback, for example can, holds up to six large
                        suitcases. <br />
                        <span className="text-red-500 ">
                          {" "}
                          3.
                        </span>{" "}
                        Reduced production costs. <br />
                        <span className="text-red-500 ">
                          {" "}
                          4.
                        </span>{" "}
                        Improved performance and efficiency. <br />
                        <span className="text-red-500 ">
                          {" "}
                          5.
                        </span>{" "}
                        Possibility to add a third-row seat to mid-size
                        vehicles. <br />
                        <span className="text-red-500 ">
                          {" "}
                          6.
                        </span>{" "}
                        The foldable box is made of hard plastic and can be
                        deployed in less then 3 seconds.
                        <br />
                        <span className="text-red-500 ">
                          {" "}
                          7.
                        </span>{" "}
                        The wheeled detachable box enables indoor loading and unloading. Paradoxically, the vehicle can offer full-size interior and ample storage despite being compact in size, making it both fuel-efficient and cost-effective to build. Alternatively, the external trunk can serve as a supplementary storage solution. The retractable trunk isn’t an aftermarket product; rather, it should be seamlessly integrated into the vehicle’s design and built from the ground up. <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         

          <div className="sm:flex-row flex justify-between w-5/6 mx-auto flex-col mt-6">
         <a href={language?"/4.pdf":"/3.pdf"} target="_blank" download='Retractable.pdf' >   <button className="bg-red-600 text-white px-6 py-2 rounded-xl w-fit mx-2">
              View PDF
            </button></a>
            <Link
              href="embodiment"
              className="bg-red-600 text-white px-6 py-2 w-fit mt-4 sm:mt-0 rounded-xl"
            >
             {language?"其他型号":"Other Embodiments"}   
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trunk;
