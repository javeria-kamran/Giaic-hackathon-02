import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineEye,
} from "react-icons/ai";
import { AntDesignOutlined } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons";


const ShopList = () => {
  return (
    <div className="conatiner">
    <div className="font-sans text-[#151875]">
      <div className="py-28 px-8">
        <h1 className="text-4xl font-bold">Shop List</h1>
        <div className="flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <p>Pages</p>
          <p className="text-[#FB2E86]">Shopping List</p>
        </div>
      </div> 

      {/* Filter and Sorting Section */}
      <div className="py-4 flex flex-col lg:flex-row justify-between px-8">
        <div>
          <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-2">
            Ecommerce Accessories & Fashion Items
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Per Page */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="perPage"
              className="text-sm font-medium text-gray-700"
            >
              Per Page:
            </label>
            <input
              type="text"
              id="perPage"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sortBy"
              className="text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="bestMatch">Best Match</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* View */}
          <div className="flex items-center gap-2">
            <label htmlFor="view" className="text-sm font-medium text-gray-700">
              View:
            </label>
            <input
              type="text"
              id="view"
              className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <div>
              <div className="Group37 w-96 h-64 left-[374px] top-[656px] absolute">
                <img
                  className="Rectangle32 w-80 h-56 left-[19.88px] top-[17.67px] absolute"
                  src="/images/Rectangle 32.png"
                />
                <div className="Group35 w-36 h-9 left-[364.43px] top-[188.84px] absolute">
                  <div className="FluentCart24Regular w-5 h-5 pl-0.5 pr-1 pt-1 pb-0.5 left-[6.63px] top-[6.63px] absolute justify-center items-center inline-flex">
                    <div className="Group w-4 h-4 relative"></div>
                  </div>
                  <div className="UilHeartAlt w-5 h-5 px-0.5 py-0.5 left-[61.84px] top-[7.73px] absolute justify-center items-center inline-flex" />
                  <div className="UilSearchPlus w-4 h-4 px-px py-px left-[118.17px] top-[8.83px] absolute justify-center items-center inline-flex" />
                </div>
                <div className="AccumsanTincidunt left-[365.54px] top-[12.80px] absolute text-blue-900 text-xl font-bold font-['Josefin Sans']">
                  Accumsan tindulant
                </div>
                <div className="Ellipse24 w-3 h-3 left-[614px] top-[18.80px] absolute bg-orange-400 rounded-full" />
                <div className="Ellipse25 w-3 h-3 left-[632px] top-[18.80px] absolute bg-pink-600 rounded-full" />
                <div className="Ellipse26 w-3 h-3 left-[650px] top-[18.80px] absolute bg-indigo-600 rounded-full" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[488.12px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[504.69px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[520.15px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[535.61px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[551.07px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitMagnaInEstAdipiscingInPhasellusNonInJusto w-96 h-12 left-[365.54px] top-[111.54px] absolute text-gray-400 text-lg font-normal font-['Lato'] leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </div>
                <div>
                  <img
                    className="left-[334.54px] top-[195.54px] absolute"
                    src="/images/Group 35.png"
                    alt=""
                  />
                </div>
                <div className="2600 w-12 h-4 left-[365.54px] top-[85.03px] absolute text-blue-900 text-base font-normal font-['Josefin Sans']">
                  $26.00
                </div>
                <div className="5200 w-12 h-4 left-[422.97px] top-[85.03px] absolute text-pink-500 text-base font-normal font-['Josefin Sans'] line-through">
                  $52.00
                </div>
                <div className="5200 w-12 h-4 left-[500.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[512.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[528.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[542.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[557.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "gray" }} />
                </div>
              </div>
              <div className="Group188 w-96 h-64 left-[374px] top-[943px] absolute">
                <img
                  className="Rectangle32 w-80 h-56 left-[19.88px] top-[17.67px] absolute"
                  src="/images/Rectangle 32 (1).png"
                />
                <div className="Group35 w-36 h-9 left-[364.43px] top-[188.84px] absolute">
                  <div className="FluentCart24Regular w-5 h-5 pl-0.5 pr-1 pt-1 pb-0.5 left-[6.63px] top-[6.63px] absolute justify-center items-center inline-flex">
                    <div className="Group w-4 h-4 relative"></div>
                  </div>
                  <div className="UilHeartAlt w-5 h-5 px-0.5 py-0.5 left-[61.84px] top-[7.73px] absolute justify-center items-center inline-flex" />
                  <div className="UilSearchPlus w-4 h-4 px-px py-px left-[118.17px] top-[8.83px] absolute justify-center items-center inline-flex" />
                </div>
                <div className="InNulla left-[365.54px] top-[12.80px] absolute text-blue-900 text-xl font-bold font-['Josefin Sans']">
                  In nulla
                </div>
                <div className="Ellipse24 w-3 h-3 left-[614px] top-[18.80px] absolute bg-orange-400 rounded-full" />
                <div className="Ellipse25 w-3 h-3 left-[632px] top-[18.80px] absolute bg-pink-600 rounded-full" />
                <div className="Ellipse26 w-3 h-3 left-[650px] top-[18.80px] absolute bg-indigo-600 rounded-full" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[488.12px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[504.69px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[520.15px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[535.61px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[551.07px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitMagnaInEstAdipiscingInPhasellusNonInJusto w-96 h-12 left-[365.54px] top-[111.54px] absolute text-gray-400 text-lg font-normal font-['Lato'] leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </div>
                <div>
                  <img
                    className="left-[334.54px] top-[195.54px] absolute"
                    src="/images/Group 35.png"
                    alt=""
                  />
                </div>
                <div className="2600 w-12 h-4 left-[365.54px] top-[85.03px] absolute text-blue-900 text-base font-normal font-['Josefin Sans']">
                  $26.00
                </div>
                <div className="5200 w-12 h-4 left-[422.97px] top-[85.03px] absolute text-pink-500 text-base font-normal font-['Josefin Sans'] line-through">
                  $52.00
                </div>
                <div className="5200 w-12 h-4 left-[500.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[512.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[528.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[542.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[557.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "gray" }} />
                </div>
              </div>
              <div className="Group189 w-96 h-64 left-[374px] top-[1231px] absolute">
                <img
                  className="Rectangle32 w-80 h-56 left-[19.88px] top-[17.67px] absolute"
                  src="/images/Rectangle 32 (2).png"
                />
                <div className="Group35 w-36 h-9 left-[364.43px] top-[188.84px] absolute">
                  <div className="FluentCart24Regular w-5 h-5 pl-0.5 pr-1 pt-1 pb-0.5 left-[6.63px] top-[6.63px] absolute justify-center items-center inline-flex">
                    <div className="Group w-4 h-4 relative"></div>
                  </div>
                  <div className="UilHeartAlt w-5 h-5 px-0.5 py-0.5 left-[61.84px] top-[7.73px] absolute justify-center items-center inline-flex" />
                  <div className="UilSearchPlus w-4 h-4 px-px py-px left-[118.17px] top-[8.83px] absolute justify-center items-center inline-flex" />
                </div>
                <div className="VelSem left-[365.54px] top-[12.80px] absolute text-blue-900 text-xl font-bold font-['Josefin Sans']">
                  Vel sem
                </div>
                <div className="Ellipse24 w-3 h-3 left-[614px] top-[18.80px] absolute bg-orange-400 rounded-full" />
                <div className="Ellipse25 w-3 h-3 left-[632px] top-[18.80px] absolute bg-pink-600 rounded-full" />
                <div className="Ellipse26 w-3 h-3 left-[650px] top-[18.80px] absolute bg-indigo-600 rounded-full" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[488.12px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[504.69px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[520.15px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[535.61px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[551.07px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitMagnaInEstAdipiscingInPhasellusNonInJusto w-96 h-12 left-[365.54px] top-[111.54px] absolute text-gray-400 text-lg font-normal font-['Lato'] leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </div>
                <div className="relative">
                  <img
                    className="left-[334.54px] top-[195.54px] absolute"
                    src="public/images/Group 35.png"
                    alt=""
                  />
                </div>
                <div className="2600 w-12 h-4 left-[365.54px] top-[85.03px] absolute text-blue-900 text-base font-normal font-['Josefin Sans']">
                  $26.00
                </div>
                <div className="5200 w-12 h-4 left-[422.97px] top-[85.03px] absolute text-pink-500 text-base font-normal font-['Josefin Sans'] line-through">
                  $52.00
                </div>
                <div className="5200 w-12 h-4 left-[500.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[512.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[528.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[542.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[557.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "gray" }} />
                </div>
              </div>
              <div className="Group190 w-96 h-64 left-[371px] top-[1519px] absolute">
                <img
                  className="Rectangle32 w-80 h-56 left-[19.88px] top-[17.67px] absolute"
                  src="/images/Rectangle 32 (3).png"
                />
                <div className="Group35 w-36 h-9 left-[364.43px] top-[188.84px] absolute">
                  <div className="FluentCart24Regular w-5 h-5 pl-0.5 pr-1 pt-1 pb-0.5 left-[6.63px] top-[6.63px] absolute justify-center items-center inline-flex">
                    <div className="Group w-4 h-4 relative"></div>
                  </div>
                  <div className="UilHeartAlt w-5 h-5 px-0.5 py-0.5 left-[61.84px] top-[7.73px] absolute justify-center items-center inline-flex" />
                  <div className="UilSearchPlus w-4 h-4 px-px py-px left-[118.17px] top-[8.83px] absolute justify-center items-center inline-flex" />
                </div>
                <div className="PorttitorCum left-[365.54px] top-[12.80px] absolute text-blue-900 text-xl font-bold font-['Josefin Sans']">
                  Porttitor cum
                </div>
                <div className="Ellipse24 w-3 h-3 left-[614px] top-[18.80px] absolute bg-orange-400 rounded-full" />
                <div className="Ellipse25 w-3 h-3 left-[632px] top-[18.80px] absolute bg-pink-600 rounded-full" />
                <div className="Ellipse26 w-3 h-3 left-[650px] top-[18.80px] absolute bg-indigo-600 rounded-full" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[488.12px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[504.69px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[520.15px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[535.61px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[551.07px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitMagnaInEstAdipiscingInPhasellusNonInJusto w-96 h-12 left-[365.54px] top-[111.54px] absolute text-gray-400 text-lg font-normal font-['Lato'] leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </div>
                <div>
                  <img
                    className="left-[334.54px] top-[195.54px] absolute"
                    src="/images/Group 35.png"
                    alt=""
                  />
                </div>
                <div className="2600 w-12 h-4 left-[365.54px] top-[85.03px] absolute text-blue-900 text-base font-normal font-['Josefin Sans']">
                  $26.00
                </div>
                <div className="5200 w-12 h-4 left-[422.97px] top-[85.03px] absolute text-pink-500 text-base font-normal font-['Josefin Sans'] line-through">
                  $52.00
                </div>
                <div className="5200 w-12 h-4 left-[500.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[512.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[528.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[542.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[557.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "gray" }} />
                </div>
              </div>
              <div className="Group192 w-96 h-64 left-[371px] top-[1806px] absolute">
                <img
                  className="Rectangle32 w-80 h-56 left-[19.88px] top-[17.67px] absolute"
                  src="/images/Rectangle 32 (4).png"
                />
                <div className="Group35 w-36 h-9 left-[364.43px] top-[188.84px] absolute">
                  <div className="FluentCart24Regular w-5 h-5 pl-0.5 pr-1 pt-1 pb-0.5 left-[6.63px] top-[6.63px] absolute justify-center items-center inline-flex">
                    <div className="Group w-4 h-4 relative"></div>
                  </div>
                  <div className="UilHeartAlt w-5 h-5 px-0.5 py-0.5 left-[61.84px] top-[7.73px] absolute justify-center items-center inline-flex" />
                  <div className="UilSearchPlus w-4 h-4 px-px py-px left-[118.17px] top-[8.83px] absolute justify-center items-center inline-flex" />
                </div>
                <div className="NuncIn left-[365.54px] top-[12.80px] absolute text-blue-900 text-xl font-bold font-['Josefin Sans']">
                  Nunc in
                </div>
                <div className="Ellipse24 w-3 h-3 left-[614px] top-[18.80px] absolute bg-orange-400 rounded-full" />
                <div className="Ellipse25 w-3 h-3 left-[632px] top-[18.80px] absolute bg-pink-600 rounded-full" />
                <div className="Ellipse26 w-3 h-3 left-[650px] top-[18.80px] absolute bg-indigo-600 rounded-full" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[488.12px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[504.69px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[520.15px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[535.61px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[551.07px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitMagnaInEstAdipiscingInPhasellusNonInJusto w-96 h-12 left-[365.54px] top-[111.54px] absolute text-gray-400 text-lg font-normal font-['Lato'] leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </div>
                <div>
                  <img
                    className="left-[334.54px] top-[195.54px] absolute"
                    src="/images/Group 35.png"
                    alt=""
                  />
                </div>
                <div className="2600 w-12 h-4 left-[365.54px] top-[85.03px] absolute text-blue-900 text-base font-normal font-['Josefin Sans']">
                  $26.00
                </div>
                <div className="5200 w-12 h-4 left-[422.97px] top-[85.03px] absolute text-pink-500 text-base font-normal font-['Josefin Sans'] line-through">
                  $52.00
                </div>
                <div className="5200 w-12 h-4 left-[500.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[512.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[528.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[542.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[557.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "gray" }} />
                </div>
              </div>
              <div className="Group193 w-96 h-64 left-[378px] top-[2093px] absolute">
                <img
                  className="Rectangle32 w-80 h-56 left-[19.88px] top-[17.67px] absolute"
                  src="/images/Rectangle 32 (5).png"
                />
                <div className="Group35 w-36 h-9 left-[364.43px] top-[188.84px] absolute">
                  <div className="FluentCart24Regular w-5 h-5 pl-0.5 pr-1 pt-1 pb-0.5 left-[6.63px] top-[6.63px] absolute justify-center items-center inline-flex">
                    <div className="Group w-4 h-4 relative"></div>
                  </div>
                  <div className="UilHeartAlt w-5 h-5 px-0.5 py-0.5 left-[61.84px] top-[7.73px] absolute justify-center items-center inline-flex" />
                  <div className="UilSearchPlus w-4 h-4 px-px py-px left-[118.17px] top-[8.83px] absolute justify-center items-center inline-flex" />
                </div>
                <div className="VitaeFacilisis left-[365.54px] top-[12.80px] absolute text-blue-900 text-xl font-bold font-['Josefin Sans']">
                  Vitae facilisis
                </div>
                <div className="Ellipse24 w-3 h-3 left-[614px] top-[18.80px] absolute bg-orange-400 rounded-full" />
                <div className="Ellipse25 w-3 h-3 left-[632px] top-[18.80px] absolute bg-pink-600 rounded-full" />
                <div className="Ellipse26 w-3 h-3 left-[650px] top-[18.80px] absolute bg-indigo-600 rounded-full" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[488.12px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[504.69px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[520.15px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[535.61px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[551.07px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitMagnaInEstAdipiscingInPhasellusNonInJusto w-96 h-12 left-[365.54px] top-[111.54px] absolute text-gray-400 text-lg font-normal font-['Lato'] leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </div>
                <div>
                  <img
                    className="left-[334.54px] top-[195.54px] absolute"
                    src="/images/Group 35.png"
                    alt=""
                  />
                </div>
                <div className="2600 w-12 h-4 left-[365.54px] top-[85.03px] absolute text-blue-900 text-base font-normal font-['Josefin Sans']">
                  $26.00
                </div>
                <div className="5200 w-12 h-4 left-[422.97px] top-[85.03px] absolute text-pink-500 text-base font-normal font-['Josefin Sans'] line-through">
                  $52.00
                </div>
                <div className="5200 w-12 h-4 left-[500.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[512.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[528.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[542.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[557.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "gray" }} />
                </div>
              </div>
              <div className="Group194 w-96 h-64 left-[378px] top-[2381px] absolute">
                <img
                  className="Rectangle32 w-80 h-56 left-[19.88px] top-[17.67px] absolute"
                  src="/images/Rectangle 32 (6).png"
                />
                <div className="Group35 w-36 h-9 left-[364.43px] top-[188.84px] absolute">
                  <div className="FluentCart24Regular w-5 h-5 pl-0.5 pr-1 pt-1 pb-0.5 left-[6.63px] top-[6.63px] absolute justify-center items-center inline-flex">
                    <div className="Group w-4 h-4 relative"></div>
                  </div>
                  <div className="UilHeartAlt w-5 h-5 px-0.5 py-0.5 left-[61.84px] top-[7.73px] absolute justify-center items-center inline-flex" />
                  <div className="UilSearchPlus w-4 h-4 px-px py-px left-[118.17px] top-[8.83px] absolute justify-center items-center inline-flex" />
                </div>
                <div className="CurabiturLectus left-[365.54px] top-[12.80px] absolute text-blue-900 text-xl font-bold font-['Josefin Sans']">
                  Curabitur lectus
                </div>
                <div className="Ellipse24 w-3 h-3 left-[614px] top-[18.80px] absolute bg-orange-400 rounded-full" />
                <div className="Ellipse25 w-3 h-3 left-[632px] top-[18.80px] absolute bg-pink-600 rounded-full" />
                <div className="Ellipse26 w-3 h-3 left-[650px] top-[18.80px] absolute bg-indigo-600 rounded-full" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[488.12px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[504.69px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[520.15px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[535.61px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="AntDesignStarFilled w-3.5 h-3.5 px-px pt-px pb-0.5 left-[551.07px] top-[85.03px] absolute justify-center items-center inline-flex" />
                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitMagnaInEstAdipiscingInPhasellusNonInJusto w-96 h-12 left-[365.54px] top-[111.54px] absolute text-gray-400 text-lg font-normal font-['Lato'] leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </div>
                <div>
                  <img
                    className="left-[334.54px] top-[195.54px] absolute"
                    src="/images/Group 35.png"
                    alt=""
                  />
                </div>
                <div className="2600 w-12 h-4 left-[365.54px] top-[85.03px] absolute text-blue-900 text-base font-normal font-['Josefin Sans']">
                  $26.00
                </div>
                <div className="5200 w-12 h-4 left-[422.97px] top-[85.03px] absolute text-pink-500 text-base font-normal font-['Josefin Sans'] line-through">
                  $52.00
                </div>
                <div className="5200 w-12 h-4 left-[500.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[512.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[528.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[542.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "yellow" }} />
                </div>
                <div className="5200 w-12 h-4 left-[557.97px] top-[85.03px] absolute ">
                  <StarFilled style={{ color: "gray" }} />
                </div>
              </div>
              <div className="Group246 w-96 h-14 left-[4px] top-[3573px] absolute">
                <div className="Group168 w-96 h-14 left-0 top-0 absolute">
                  <div className="Rectangle103 w-96 h-14 left-0 top-0 absolute bg-violet-100" />
                </div>
              </div>
              <img
                className="Image1174 w-96 h-24 left-[508px] top-[2869px] absolute"
                src="/images/image 1174.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};



export default ShopList;
