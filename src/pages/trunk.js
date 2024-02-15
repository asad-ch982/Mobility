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
                    {language?"传统车辆后备箱往往被低效利用，使乘员腿部 空间受限。":" Traditional vehicle trunks often go underutilized leaving accupants cramped for legroom."}
                     
                    </div>
                    {language?"这个待实施的专利提案，可以简单地部分或完全替代 传统后备箱，或作为一个辅助存储解决方案。":"This simple-to-implement pending patentreplaces the traditional trunk partially or completely or serves as a supplementary storage solution."}
                    
                    <div className="flex mt-2 justify-between ">
                      <div>
                        <div className="my-2">
                        {language?"替代后备箱带来了一系列优势:":"Replacing the trunk brings forth a host of advantages:"}
                          
                        </div>
                        <span className="text-red-500 "> 1.</span>{" "}
                        {language?"增加腿部空间":"Increased Legroom."}  <br />
                        <span className="text-red-500 ">
                          2.
                        </span>{" "}
                        {language?"增加货物容量:例如，一辆小型掀背车可以容纳多达六个大型行李箱。":"Increased cargo capacity: A small hatchback, for example can, holds up to six large suitcases."}  <br />
                        <span className="text-red-500 ">
                          {" "}
                          3.
                        </span>{" "}
                        {language?"降低车辆生产成本。":" Reduced production costs."}   <br />
                        <span className="text-red-500 ">
                          {" "}
                          4.
                        </span>{" "}
                        {language?"提高表现和效率。":"  Improved performance and efficiency."}  <br />
                        <span className="text-red-500 ">
                          {" "}
                          5.
                        </span>{" "}
                        {language?"可以在中型车辆上增加第三排座椅。":" Possibility to add a third-row seat to mid-size vehicles."}   <br />
                        <span className="text-red-500 ">
                          {" "}
                          6.
                        </span>{" "}
                        {language?"带有轮子的可拆卸箱子可在室装货物品或卸货物品。":" The foldable box is made of hard plastic and can be deployed in less then 3 seconds."}  
                        <br />
                        <span className="text-red-500 ">
                          {" "}
                          7.
                        </span>{" "}
                        {language?"可折叠的箱子由坚固耐用的塑料或金属制成，可以在不到三秒的时间内展开。矛盾的是，纵然车辆体积小，却可以提供内部的全尺寸空间和充足的储物空间，使其燃油效率和成本效益上都具备优势。除此之外，它还可以提供补充性的存储解决方案。":" The wheeled detachable box enables indoor loading and unloading. Paradoxically, the vehicle can offer full-size interior and ample storage despite being compact in size, making it both fuel-efficient and cost-effective to build. Alternatively, the external trunk can serve as a supplementary storage solution. The retractable trunk isn’t an aftermarket product; rather, it should be seamlessly integrated into the vehicle’s design and built from the ground up."}
                         <br />
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
