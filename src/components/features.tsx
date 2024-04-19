import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Wrapper from "@/wrapper/wrapper";

const Features = () => {
  return (
    <div className="bg-slate-100">
      <Wrapper>
        <div className="grid grid-cols-2 gap-5 mt-20 min-h-screen">
          <div className="col-span-2 col-start-1 h-full w-full  xl:col-start-2">
            <h3 className="text-[2.5rem] sm:text-[2.75rem] tracking-[0.03em] leading-[3rem] font-bold pt-10">
              Updated and Authentic Withholding Tax Calculations
            </h3>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-5">
            <div className="relative col-span-2 h-full w-full  xl:col-span-1">
              <div className="grid grid-cols-2 gap-10 mr-20">
                <div className=" ">
                  <h4 className="text-2xl font-bold">Accurate Calculations</h4>
                  <p className="mt-5">
                    Our calculator ensures accurate deductions.
                  </p>
                </div>
                <div className=" ">
                  <h4 className="text-2xl font-bold">Comprehensive Guidance</h4>
                  <p className="mt-5">
                    we go beyond basic calculations to offer comprehensive
                    guidance.
                  </p>
                </div>
                <div className=" ">
                  <h4 className="text-2xl font-bold">
                    User-Friendly Interface
                  </h4>
                  <p className="mt-5">
                    Designed with simplicity in mind, our platform features a
                    user-friendly interface.
                  </p>
                </div>
                <div className=" ">
                  <h4 className="text-2xl font-bold">Up-to-Date Information</h4>
                  <p className="mt-5">
                    We stay abreast of changes to tax laws and regulations.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 overflow-hidden text-[5rem] sm:text-8xl  font-bold tracking-widest text-gray-200/70 -z-[10]">
                Different From Others
              </div>
            </div>
            <div className="col-span-2   xl:col-span-1">
              <div className="flex flex-col h-full w-full items-center justify-center gap-5 sm:flex-row">
                <div className="basis-1/2  w-full flex justify-center ">
                  <Image
                    src="/3dtax.jpg"
                    alt=""
                    width={250}
                    height={250}
                    className="shadow-xl"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-5  basis-1/2 ">
                  <p className="tracking-wider leading-6">
                    WHT Calculator is more than just a calculator, it is a tool
                    for empowerment, enabling withholding agents to fulfill
                    their tax obligations with confidence and ease. Whether you
                    are a business owner, accountant, or tax professional, we
                    are here to support you every step of the way.
                  </p>
                  <Button>See All Products</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Features;
