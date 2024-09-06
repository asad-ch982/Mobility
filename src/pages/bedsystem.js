import React from "react";
import Head from "next/head";
import Link from "next/link";
const Bedsystem = ({ language, setLanguage }) => {
  return (
    <div>
      <Head>
        <title> {language ? "车内床系统" : " In-Car-Bed System"} </title>
        <meta property="og:title" content="Vehicle Bed System" key="title" />
      </Head>
      <div className="bg-white ">
        <div className="   flex flex-col-reverse  my-10  top-1/3 ">
          <div className="vid  w-5/6  mx-auto">
            {/* <video className='rounded-3xl w-full ' controls  autoPlay={false} loop src="/in-car-bed.mov"></video> */}
            <div className="vid w-full md:flex gap-2 mx-auto">
              <div className="md:w-1/2">
                <div className="text-3xl my-4 text-red-600  ">
                  {language ? " 标准" : " Standard"}
                </div>
                <video
                  className="rounded-3xl w-full"
                  controls
                  autoPlay={false}
                  loop
                  src="/in-car-03.mov"
                ></video>
              </div>

              <div className="vid md:w-1/2  ">
                <div className="text-3xl my-4 text-red-600 ">
                  {language ? (
                    " 快速部署"
                  ) : (
                    <>
                      <div>
                        <p>Fast Deployment</p>
                      </div>
                    </>
                  )}
                </div>
                <video
                  className="rounded-3xl w-full"
                  controls
                  autoPlay={false}
                  loop
                  src="/in-car-06.mov"
                ></video>
              </div>
            </div>
            <div className="vid w-full md:flex gap-2 mx-auto my-4">
              <div className="vid md:w-full  ">
                <img
                  className="rounded-3xl w-full "
                  src="/incarbed-pic.jpg"
                ></img>
              </div>
            </div>
            <div className="sm:flex-row flex justify-between my-4 flex-col">
              <a
                href={language ? "/5.pdf" : "/1.pdf"}
                target="_blank"
                download="In-Car-Bed.pdf"
              >
                {" "}
                <button className="bg-red-600 w-fit text-white px-6 py-2 rounded-xl mr-4 ">
                  View PDF
                </button>
              </a>{" "}
              <Link
                href="/icbembodiments"
                className="bg-red-600 w-fit hidden text-white px-6 py-2 mt-4 sm:mt-0 rounded-xl"
              >
                Other Embodiments
              </Link>
            </div>
          </div>
          <div className="txt w-5/6  mx-auto xl:mt-4 my-8 md:my-0">
            <div className="head   justify-between">
              <div className="lg:text-3xl text-black mt-1 font-medium text-xl  lg:font-extrabold">
                {language ? "车内床系统" : " In-Car-Bed System"}
              </div>
            </div>

            <div className="2xl:mt-4 xl:mt-1 mt-2 md:leading-none  lg:leading-normal text-gray-700  xl:font-medium my-4">
              <p>
                {language
                  ? "旅行者在旅途中经常因为有限的选择，特别是在旺季时期，很难找到合适的住宿。这款正在申请专利中的产品可以解决此问题，因为它可以将汽车的座椅完全向后倾斜，变成一张舒适的床。该汽车内床系统的独特设计使其与众不同，包括可拆卸的前座顶部和床结构，可以轻松将座椅转变为完全平整的床,从仪表板无缝延伸到车厢的末端和后备箱另一个与众不同的特点它是两张床，它提供了一个更宽的睡眠区域，使它们特别适合紧凑型车辆。"
                  : " Travelers often struggle to find suitable accommodation due to limited options, particularly during peak seasons. This patent-pending product addresses this challenge by allowing vehicle seats to fully recline, transforming them into comfortable beds. What sets the in-car bed system apart is its unique design, featuring removable seat parts and bed structures that effortlessly transform the seats into completely flat beds, extending seamlessly from the dashboard to the end of the trunk and from door to door crosswise. Another significant patented feature is the two-level beds with varying widths , which provide a wider sleeping area, making it particularly suitable for compact and medium-size vehicles.The system offers two distinct configurations: one designed for a quick, efficient nap, and the other optimized for a long, comfortable sleep."}
              </p>
              <br />
              {/* <p>
                Another significant feature is the two-level beds, which provide
                a wider sleeping area, enhancing both comfort and utility.
              </p> */}
            </div>

            <div className="2xl:mt-4 xl:mt-1  md:leading-none  lg:leading-normal text-gray-700  xl:font-medium my-5">
              <div className="text-red-600 font-semibold text-xl">
                {language ? "有什么好处?" : " What are the benefits ?"}
              </div>
              <div className="my-4">
                {language ? (
                  "该系统为旅行者提供了便利、经济和灵活性，使旅行者在长途驾驶中能够得到充分、舒适的休息。此外，在工作时间延长时进行短暂小睡可以提高工作效率、专注力以及精力。车主还可以通过租赁该系统并提供额外服务，如膳食、卫生间和淋浴设施，实现被动收入。这不仅有助于弥补车辆每月分期付款的一部分，还促使购车决策。最后，将这一创新理念整合到车辆设计过程中相对简单且具有成本效益。。"
                ) : (
                  <>
                    The system offers convenience, cost-effectiveness, and
                    flexibility for travelers, providing them with comfortable
                    rest during long drives. Additionally, taking short naps
                    during extended work hours can boost productivity, focus,
                    and energy.
                    <br /> Owners can also generate passive income by renting
                    the system and offering supplementary services such as
                    meals, restrooms, and shower facilities for additional
                    revenue. This not only helps offset a portion of the
                    vehicle's monthly installments but also facilitates the
                    decision to purchase the vehicle.Lastly, integrating this
                    innovative concept into the vehicle's design process is
                    relatively simple and cost-effective.
                  </>
                )}
                <br />
              </div>
              {/* <div className="mb-4">
                {language
                  ? "车主还可以通过租赁该系统并提供额外服务，如膳食、卫生间和淋浴设施，实现被动收入。这不仅有助于弥补车辆每月分期付款的一部分，还促使购车决策。"
                  : " Owners can also generate passive income by renting the system and offering supplementary services such as meals, restrooms, and shower facilities for additional revenue. This not only helps offset a portion of the vehicle's monthly installments but also facilitates the decision to purchase the vehicle. "}
                <br />
              </div> */}
              {/* <div className="mb-4">
                {language
                  ? "最后，将这一创新理念整合到车辆设计过程中相对简单且具有成本效益"
                  : " Lastly, integrating this innovative concept into the vehicle's design process is relatively simple and cost-effective."}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bedsystem;
