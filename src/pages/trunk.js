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
          <div className="text-white  w-full text-center items-center font-semibold  text-2xl mb-2 sm:mb-0">
            {language ? (
              <>
                <span className="bg-red-600 text-white">可收缩后备箱</span>
              </>
            ) : (
              <>
                <span className="text-black"> Retractable Trunk</span>
              </>
            )}
          </div>
        </div>

        <div className="embodimentMain">
          <div className="">
            <div className="flex flex-col-reverse  ">
              <div className="vid w-5/6 md:flex gap-2 mx-auto">
                <div className="md:w-1/2">
                  <div className="text-3xl my-4 text-black  ">
                    {language ? " 无障碍汽车后备箱" : " Accessible trunk"}
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
              <div className="vid w-5/6 md:flex gap-2 mx-auto">
                <div className="md:w-1/2">
                  <div className="text-3xl my-4 text-black  ">
                    {language ? " 垂直模型" : "Horizontal model "}
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
                    {language ? " 水平模型" : "Vertical model"}
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

                <div className="mt-4 text-gray-700  lg:mt-1  xl:mt-4  ">
                  <div>
                    <div className="my-2 ">
                      {language ? (
                        <>
                          内置式可伸缩汽车后备箱能提供额外的储存空间与多种用途并能在3秒内完成布置。比方说一个小的掀背式设计，可以提供超过
                          <span className="bg-red-600 text-white px-1 mx-1   ">
                            750
                          </span>
                          升的额外空间。
                        </>
                      ) : (
                        <>
                          The built-in retractable trunk offers extra storage
                          capacity and versatility and can be deployed in less
                          than three seconds. A small hatchback, for example,
                          can offer more than
                          <span className="bg-red-600 text-white px-1 mx-1   ">
                            750
                          </span>
                          liters of extra storage.
                        </>
                      )}
                    </div>
                    {language ? (
                      <>
                        另外，这个简单易用的专利能
                        <span className="bg-red-600 px-1 mx-1 text-white">
                          部分或者全
                        </span>
                        部取代原有的未充分利用空间的后备箱设计。
                      </>
                    ) : (
                      <>
                        Alternatively, this simple-to-implement patent can
                        <span className="bg-red-600 px-1 mx-1 text-white">
                          replace
                        </span>
                        the underutilized trunk either partially or completely.
                      </>
                    )}

                    <div className="flex mt-2 justify-between ">
                      <div>
                        <div className="my-2">
                          {language
                            ? "取代传统后备箱设计后获得的空间可用于："
                            : "The space gained by eliminating the traditional trunk can be utilized to:"}
                        </div>
                        <span className="text-red-600 "> 1.</span>{" "}
                        {language
                          ? "增加乘客腿部空间。"
                          : "Increase vehicle legroom."}{" "}
                        <br />
                        <div className="flex">
                          <div className="text-red-600 mr-1 ">2. </div>{" "}
                          {language
                            ? "增加行李空间约750升。"
                            : " Increase cargo capacity by more than 750 liters."}{" "}
                          <br />
                        </div>
                        <span className="text-red-600 "> 3.</span>{" "}
                        {language
                          ? "降低车辆生产成本。"
                          : " Reduce vehicle production costs."}{" "}
                        <br />
                        <div className="flex">
                          <span className="text-red-600 mr-1"> 4.</span>{" "}
                          {language
                            ? "由于减轻了车辆的重量，它提高了车辆的性能和效率。"
                            : "  Enhance performance and efficiency thanks to the vehicle's reduced weight."}{" "}
                          <br />
                        </div>
                        <div className="flex">
                          <span className="text-red-600 mr-1">
                            {" "}
                            {language ? "5." : "5."}
                          </span>{" "}
                          {language
                            ? "增加了中型车辆安装第三排座椅或大型车辆安装完全尺寸的第三排座椅的可能性。"
                            : "Enhance the possibility of installing a third-row seat in mid-size vehicles or a full-size third-row seat in larger vehicles."}{" "}
                          <br />
                        </div>
                        <div className="text-gray-700 flex py-2">
                          <div className="">
                            <GoTriangleRight className="text-red-600  text-2xl" />
                          </div>
                          <div>
                            {language
                              ? "让人震惊的是，尽管车辆尺寸紧凑，但它却可以提供全尺寸的内部空间和充足的存储空间，并使其既省油又具有成本效益。"
                              : " 	Paradoxically, the vehicle can offer a full-size interior and ample storage despite being compact in size, making it both fuel-efficient and cost-effective to build."}{" "}
                            <br />
                          </div>
                        </div>
                        <div className="text-gray-700 flex py-2">
                          <div className="">
                            <GoTriangleRight className="text-red-600  text-2xl" />
                          </div>
                          {language
                            ? "如果后备箱被取代，货物仍可以通过折叠后排座位储存于车内。"
                            : " 	If the trunk is eliminated, cargo can still be stored inside the vehicle by folding the back seats. In this scenario, the retractable trunk can be used when the back seats are occupied by passengers, adding to versatility and space utilization."}
                          <br />
                        </div>
                        <div className="text-gray-700 flex py-2">
                          <div className="">
                            <GoTriangleRight className="text-red-600  text-2xl" />
                          </div>
                          <p>
                            {language
                              ? "在该种情况下，就算后排座位被乘客占用，您依然能够使用可伸缩后备箱。同时，可拆卸的带轮箱可用作购物车，实现室内货物到车辆的无缝装卸。"
                              : "The detachable wheeled box serves as a shopping trolley, enabling seamless indoor cargo loading and unloading."}
                          </p>
                          <br />
                        </div>
                        <div className="text-gray-700 flex py-2">
                          {language ? (
                            <div className="">
                              <GoTriangleRight className="text-red-600  text-2xl" />
                            </div>
                          ) : (
                            <div className="">
                              <GoTriangleRight className="text-red-600  text-2xl" />
                            </div>
                          )}
                          <div>
                            {language
                              ? "该可伸缩后备箱由耐用的塑料或金属制成，所以在不使用时候占用的空间非常少。"
                              : "The foldable box, made of hard, durable plastic or metal, occupies minimal space when not in use."}
                          </div>
                          <br />
                        </div>
                        <div className="text-gray-700 flex py-2">
                          {language ? (
                            <div className="">
                              <GoTriangleRight className="text-red-600  text-2xl" />
                            </div>
                          ) : (
                            <div className="">
                              <GoTriangleRight className="text-red-600  text-2xl" />
                            </div>
                          )}
                          <div>
                            {language
                              ? "该可伸缩后备箱并不是一种售后改装配件，它很容易作为一种额外的存储解决方案整合实施。然而，用来取代传统的后备箱虽然可行，但需要在一开始的时候就融入到车辆的设计过程当中。"
                              : " The retractable trunk is not an aftermarket product, and incorporating it as an extra storage solution is easy to implement. However, replacing the traditional trunk with it, while feasible, requires integration into the design process from the very beginning."}
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
