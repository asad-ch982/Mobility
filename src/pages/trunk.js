import Head from "next/head";
import Link from "next/link";
import React from "react";
import { LuListVideo } from "react-icons/lu";
import { GoTriangleRight } from "react-icons/go";
const Trunk = ({ language, setLanguage }) => {
  return (
    <div>
      <Head>
        <title> {language ? "可收缩后备箱" : " Retractable Trunk"} </title>
        <meta property="og:title" content="Retractable Trunk" key="title" />
      </Head>
      <div className="my-10  ">
        <div className="head md:flex justify-between  w-5/6  mx-auto">
          <div className="text-white bg-red-700 items-center font-semibold text-3xl mb-2 sm:mb-0">
            {language ? "可收缩后备箱" : " Retractable Trunk"}
          </div>
        </div>

        <div className="embodimentMain">
          <div className="">
            <div className="flex flex-col-reverse  ">
              <div className="vid w-5/6 md:flex gap-2 mx-auto">
                <div className="md:w-1/2">
                  <div className="text-3xl my-4 text-black  ">
                    {language ? " 型號 1" : " Embodiment 01"}
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
                    {language ? " 型號 2" : " Embodiment 02"}
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
                      {language ? (
                        "传统车辆后备箱往往被低效利用，使乘员腿部 空间受限。"
                      ) : (
                        <>
                          The built-in retractable trunk offers extra storage
                          capacity and versatility and can be deployed in less
                          than three seconds. A small hatchback, for example,
                          can offer more than
                          <span className="bg-red-700 text-white px-1 mx-1   ">
                            750
                          </span>
                          liters of extra storage.
                        </>
                      )}
                    </div>
                    {language ? (
                      "这个待实施的专利提案，可以简单地部分或完全替代 传统后备箱，或作为一个辅助存储解决方案。"
                    ) : (
                      <>
                        Alternatively, this simple-to-implement patent can
                        <span className="bg-red-700 px-1 mx-1 text-white">
                          replace
                        </span>
                        the underutilized trunk either partially or completely.
                      </>
                    )}

                    <div className="flex mt-2 justify-between ">
                      <div>
                        <div className="my-2">
                          {language
                            ? "替代后备箱带来了一系列优势:"
                            : "The space gained by eliminating the traditional trunk can be utilized to:"}
                        </div>
                        <span className="text-red-500 "> 1.</span>{" "}
                        {language
                          ? "增加腿部空间"
                          : "Increase vehicle legroom."}{" "}
                        <br />
                        <span className="text-red-500 ">2.</span>{" "}
                        {language
                          ? "增加货物容量:例如，一辆小型掀背车可以容纳多达六个大型行李箱。"
                          : "Increase cargo capacity by more than 750 liters."}{" "}
                        <br />
                        <span className="text-red-500 "> 3.</span>{" "}
                        {language
                          ? "降低车辆生产成本。"
                          : " Reduce vehicle production costs."}{" "}
                        <br />
                        <span className="text-red-500 "> 4.</span>{" "}
                        {language
                          ? "提高表现和效率。"
                          : "  Enhance performance and efficiency thanks to the vehicle's reduced weight."}{" "}
                        <br />
                        <div className="text-gray-700 flex py-2">
                          <div className="mx-1">
                            <GoTriangleRight className="text-red-700  text-2xl" />
                          </div>
                          <div>
                            {language
                              ? "即使取消了后备箱，通过折叠后排座椅，货物仍然可以容纳在车辆中。在这种情况下，当后座被占用时，可以使用可伸缩后备箱。矛盾的是，尽管车辆尺寸紧凑，但它仍能提供全尺寸的内部空间和充足的存储空间，使其在建造时既省油又具有成本效益。"
                              : " 	Paradoxically, the vehicle can offer a full-size interior and ample storage despite being compact in size, making it both fuel-efficient and cost-effective to build."}{" "}
                            <br />
                          </div>
                        </div>
                        <div className="text-gray-700 flex py-2">
                          <div className="mx-1">
                            <GoTriangleRight className="text-red-700  text-2xl" />
                          </div>
                          {language
                            ? "轮式可折叠箱子可分离，可在室内装卸，使货物运输更容易。这种可折叠箱子由坚硬耐用的塑料或金属制成，不使用时占用的空间最小。"
                            : " 	If the trunk is eliminated, cargo can still be stored inside the vehicle by folding the back seats. In this scenario, the retractable trunk can be used when the back seats are occupied by passengers, adding to versatility and space utilization."}
                          <br />
                        </div>
                        <div className="text-gray-700 flex py-2">
                          <div className="mx-1">
                            <GoTriangleRight className="text-red-700  text-2xl" />
                          </div>
                          <p>
                            {language
                              ? "可伸缩式后备箱不是一款售后产品，相反，它应该从头开始建造，并且必须无缝地集成到车辆的设计中"
                              : "The detachable wheeled box enables indoor cargo loading and unloading, facilitating cargo handling."}
                          </p>
                          <br />
                        </div>
                        <div className="text-gray-700 flex py-2">
                          {language ? (
                            ""
                          ) : (
                            <div className="mx-1">
                              <GoTriangleRight className="text-red-700  text-2xl" />
                            </div>
                          )}
                          <div>
                            {language
                              ? ""
                              : "The foldable box, made of hard, durable plastic ormetal, occupies minimal space when not in use."}
                          </div>
                          <br />
                        </div>
                        <div className="text-gray-700 flex py-2">
                          {language ? (
                            ""
                          ) : (
                            <div className="mx-1">
                              <GoTriangleRight className="text-red-700  text-2xl" />
                            </div>
                          )}
                          <div>
                            {language
                              ? ""
                              : " The retractable trunk isn’t an aftermarket product;rather, it should be seamlessly integrated into thevehicle’s design and built from the ground up."}
                          </div>
                        </div>{" "}
                        {/* {language
                          ? "可折叠的箱子由坚固耐用的塑料或金属制成，可以在不到三秒的时间内展开。矛盾的是，纵然车辆体积小，却可以提供内部的全尺寸空间和充足的储物空间，使其燃油效率和成本效益上都具备优势。除此之外，它还可以提供补充性的存储解决方案。"
                          : " The wheeled detachable box enables indoor loading and unloading. Paradoxically, the vehicle can offer full-size interior and ample storage despite being compact in size, making it both fuel-efficient and cost-effective to build. Alternatively, the external trunk can serve as a supplementary storage solution. The retractable trunk isn’t an aftermarket product; rather, it should be seamlessly integrated into the vehicle’s design and built from the ground up."}
                        <br /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:flex-row flex justify-between w-5/6 mx-auto flex-col mt-6">
            <a
              href={language ? "/4.pdf" : "/3.pdf"}
              target="_blank"
              download="Retractable.pdf"
            >
              {" "}
              <button className="bg-red-600 text-white px-6 py-2 rounded-xl w-fit mx-2">
                View PDF
              </button>
            </a>
            <Link
              href="embodiment"
              className="bg-red-600 text-white px-6 py-2 w-fit mt-4 sm:mt-0 rounded-xl"
            >
              {language ? "其他型号" : "Other Embodiments"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trunk;
