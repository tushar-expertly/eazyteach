import React from "react";
import Layout from "../layout";
// import Slider from "../slider/slider";
import startupPng from "../../Assets/startup.png";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'

function Home() {
  return (
    <Layout>
      <div class="py-16 bg-lime-100">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src={startupPng}
                alt="imagae"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                Explore Our Webinar Solutions
              </h2>
              <p class="mt-6 text-gray-600">
                At Eazyteach, we are committed to the transformative impact of
                education. Our mission is to empower individuals and
                organizations globally with top-tier online training programs
                that unlock potential and foster success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Our Accomplishments
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We provide a vibrant online learning platform featuring an
                    extensive selection of courses designed to equip you with
                    essential skills and knowledge for success. Our learners
                    have reached their goals through our thorough and impactful
                    training programs.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Meet Our Expert Team
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Our team is made up of passionate instructors and seasoned
                    professionals with deep industry expertise. Learn more about
                    our experts on our dedicated team page!
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Challenges We Tackle
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    In today’s fast-paced world, traditional learning methods
                    often fall short. We understand the challenges of busy
                    schedules, geographic limitations, and the demand for
                    flexible learning options.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Personalized Learning Experiences
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We are dedicated to delivering engaging and interactive
                    online training. Whether you learn best through visual,
                    auditory, or hands-on methods, our training approaches are
                    tailored to fit your unique learning style.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      {/* <Slider /> */}
    </Layout>
  );
}

export default Home;
