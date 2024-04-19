import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8">
          About The Company
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Company Overview:
        </h2>
        <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8 text-justify">
          Accounting Fellow is a dynamic online educational platform dedicated
          to empowering graduate and postgraduate students in their academic
          pursuits. While we may not have a physical existence, our virtual
          presence on platforms such as YouTube, Facebook, Blogger, and other
          social media channels allows us to reach students far and wide with
          our comprehensive educational resources.
        </p>

        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Our Vision:
        </h2>
        <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8 text-justify">
          At Accounting Fellow, our vision is to democratize access to quality
          education by leveraging digital platforms to deliver engaging and
          informative content to students around the globe. We believe that
          education should be accessible to all, regardless of geographical
          location or socioeconomic status.
        </p>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Our Mision:
        </h2>
        <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8 text-justify">
          Our mission is to provide students with high-quality educational
          resources that support their learning journey in key subjects such as
          accounting, finance, economics, income tax, and computer science.
          Through our video lectures, written content, articles, study notes,
          and short-form videos, we aim to inspire, inform, and empower students
          to excel academically and professionally.
        </p>
        <div className="mb-8">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            Key Features:
          </h2>
          <ul className="list-disc pl-4">
            <li className="text-lg md:text-xl lg:text-xl leading-relaxed mb-2">
              <strong>Engaging Video Lectures:</strong> Our YouTube channel is
              home to a vast library of video lectures covering a wide range of
              topics in accounting, finance, economics, and more. Delivered by
              expert instructors, our video lectures are designed to be
              engaging, informative, and easy to follow, making complex concepts
              accessible to students of all levels.
            </li>
            <li className="text-lg md:text-xl lg:text-xl leading-relaxed mb-2">
              <strong>Informative Written Content:</strong> On our Blogger
              platform, students can find a wealth of written content including
              articles, study notes, and tutorials. Whether you are looking for
              in-depth explanations of accounting principles, practical tips for
              financial analysis, or insights into tax regulations, our written
              content has you covered.
            </li>

            <li className="text-lg md:text-xl lg:text-xl leading-relaxed mb-2">
              <strong>Interactive Engagement: </strong> We understand that
              learning is a dynamic process, which is why we leverage social
              media platforms like Facebook to foster interactive engagement
              with our audience. From live Q&A sessions to interactive polls and
              discussions, we create opportunities for students to connect with
              each other and with our instructors in a virtual learning
              community.
            </li>
            <li className="text-lg md:text-xl lg:text-xl leading-relaxed mb-2">
              <strong>Short-form Content: </strong> In addition to longer-form
              video lectures and written articles, we also produce short-form
              content such as reels and shorts to cater to students preferences
              for bite-sized learning. These quick and engaging videos provide
              concise explanations of key concepts, perfect for students on the
              go.
            </li>
          </ul>
        </div>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Join Us:
        </h2>
        <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8 text-justify">
          Whether you are a graduate student looking to deepen your
          understanding of accounting principles or a postgraduate student
          seeking to expand your knowledge in finance and economics, Accounting
          Fellow invites you to join our online learning community. Subscribe to
          our YouTube channel, follow us on Facebook, and explore our Blogger
          platform to access our extensive library of educational resources.
        </p>

        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Connect With Us:
        </h2>
        <p className="text-lg md:text-xl lg:text-xl leading-relaxed mb-8 text-justify">
          For updates on new content, upcoming events, and more, be sure to
          follow us on social media and subscribe to our YouTube channel. We are
          here to support you on your educational journey every step of the way.
        </p>
        <div className="flex items-center justify-center gap-5">
          <Link href="https://www.youtube.com/channel/UCOfyfot_vn_SRza9WHEQ4kA">
            <Image
              src={"/yt.png"}
              height={50}
              width={50}
              alt={"YouTube Icons"}
            ></Image>
          </Link>

          <Link href="https://www.facebook.com/AccountingFellow/">
            <Image
              src={"/fb.png"}
              height={80}
              width={80}
              alt={"Facebook Icons"}
            ></Image>
          </Link>

          <Link href="https://accounting-fellow.blogspot.com/">
            <Image
              src={"/bloger.png"}
              height={40}
              width={40}
              alt={"Blogger Icons"}
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
