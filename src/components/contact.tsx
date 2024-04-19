import React from "react";
import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Twitter, Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex justify-center items-center mb-10 mx-10 lg:mx-20 min-h-screen">
      <div className="  text-center md:grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="mb-6 md:mb-0 col-span-2 lg:col-span-2 ">
          <div className="flex justify-center items-center flex-wrap md:flex-nowrap">
            <Image
              src={"/logoimage.png"}
              width={150}
              height={150}
              alt={"Logo"}
            ></Image>

            <Image
              src={"/logotext.png"}
              width={300}
              height={200}
              alt={"Logo"}
            ></Image>
          </div>

          <br />
          <div className="">
            Simplifying the complexities of withholding tax management for a
            seamless and efficient experience.
          </div>
          <br />
          <div className="flex flex-row gap-x-4 justify-center items-center md:justify-start">
            <Link
              href="https://accounting-fellow.blogspot.com/"
              target="_blank"
            >
              <div className="bg-slate-200 p-4 rounded-lg shadow-xl">
                <Image
                  src={"/blogger.png"}
                  width={25}
                  height={25}
                  alt={"Blogger Icons"}
                ></Image>
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/AccountingFellow/"
              target="_blank"
            >
              <div className="bg-slate-200 p-4 rounded-lg shadow-xl">
                <Facebook />
              </div>
            </Link>
            {/* <Link href="#" target="_blank">
              <div className="bg-slate-200 p-4 rounded-lg shadow-xl">
                <Linkedin />
              </div>
            </Link> */}
            <Link
              href="https://www.youtube.com/channel/UCOfyfot_vn_SRza9WHEQ4kA"
              target="_blank"
            >
              <div className="bg-slate-200 p-4 rounded-lg shadow-xl">
                <Youtube />
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h1 className="font-serif text-2xl">Company</h1>
          <br />
          <p>
            {" "}
            <Link href={"/about"}> About </Link>
          </p>
          <p>
            <Link href={"/termsofuse"}> Terms of Use</Link>
          </p>
          <p>
            {" "}
            <Link href={"/privacypolicy"}> Privacy Policy </Link>
          </p>
        </div>
        <div className="mb-6 md:mb-0">
          <h1 className="font-serif text-2xl">Support</h1>
          <br />
          <p>
            {" "}
            <Link href={"/aboutwht"}> About calcuator</Link>
          </p>
          <p>
            <Link href={"/howitworks"}>How it Works</Link>
          </p>
          <p>
            <Link href={"/supportcenter"}>Support Center</Link>
          </p>

          <p>{/* <Link href={"/24hourservice"}>24h Service</Link> */}</p>
        </div>
        <div>
          <h1 className="font-serif text-2xl">Contact</h1>
          <br />
          <p>
            <Link href={"/contactus"}>Contact Us</Link>
          </p>
          <p>Quick Chat</p>
          <p>WhatsApp</p>

          {/* <p>Support</p> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
