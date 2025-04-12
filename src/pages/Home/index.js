import React, { useState } from "react";
import { AddKontak, ListKontak, Navbar } from "../../components";
import ButtonPrimary from "../../components/buttonPrimary";
import instagram from "../../assets/images/instagram.png";
import imageSkate from "../../assets/images/imageskate1.png";
import imageTshirt from "../../assets/images/bbftshirtfront1.png";
import CardProduct from "../../components/cardProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logodd.png";

import {
  faEnvelope,
  faHeart,
  faComment,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const kontenProduct = [1, 2, 3, 4];
const kontenBlog = [1, 2, 3];

const Home = () => {
  const [navbarMobile, setNavbarMobile] = useState(false);

  return (
    <div>
      {navbarMobile === true ? (
        <div
          class="block sm:ml-6 sm:hidden"
          style={{
            width: "100%",
            minHeight: "100%",
            backgroundColor: "#262626",
            zIndex: 3,
            position: "absolute",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "34px 51px",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img
                // class="hidden lg:block"
                src={logo}
                width="50px"
                height="50px"
              />
            </div>
            <div>
              <FontAwesomeIcon color="white" size="2x" icon={faClose} />
            </div>
          </div>
          <div style={{ padding: "0px 51px" }}>
            <ul style={{}} class="">
              <li
                className="HammersmithOne"
                style={{ color: "white", fontSize: 20 }}
              >
                HOME
              </li>
              <li
                className="HammersmithOne"
                style={{ color: "white", fontSize: 20, marginTop: 16 }}
              >
                PRODUCT
              </li>
              <li
                className="HammersmithOne"
                style={{ color: "white", fontSize: 20, marginTop: 16 }}
              >
                JOURNAL
              </li>
              <li style={{ marginTop: 16 }}>
                <a href="">
                  <ButtonPrimary
                    backgroundColor="#fff"
                    textLabel="LOGIN"
                    textColor="#000"
                    size={16}
                    radius={13}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div />
      )}
      <div style={{ padding: "0px 51px" }}>
        <Navbar click={() => console.log("sab")} />
        {/* test navbar tl */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 119px",
          }}
        >
          <div style={{ width: "35%" }}>
            <p className="HammersmithOne" style={{ fontSize: 24 }}>
              Tittle Bold
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <div style={{ marginTop: 25 }} />
            <ButtonPrimary
              textLabel="SHOP NOW"
              click={() => console.log("ke klik")}
            />
            <div style={{ marginTop: 60, display: "flex", gap: 18 }}>
              <a href="">
                <img src={instagram} width="31" height="31" />
              </a>
              <a href="">
                <img src={instagram} width="31" height="31" />
              </a>
              <a href="">
                <img src={instagram} width="31" height="31" />
              </a>
            </div>
            <div style={{ marginTop: 13 }}>
              <span className="HammersmithOne">JOIN IN THE CLUB!</span>
            </div>
          </div>
          <div style={{}}>
            <img src={imageSkate} width="505px" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#F9F9F9",
          width: "100%",
          minHeight: "100px",
          padding: "46px 169px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className="HammersmithOne" style={{ fontSize: 24 }}>
            PRODUCT
          </span>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          <span style={{ width: "70%" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </span>
        </div>
        <div class="" style={{ marginTop: 50 }}>
          <div class="">
            {/* <h2 class="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2> */}

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {kontenProduct.map((kontenProduct) => {
                return (
                  <div
                    class="group relative"
                    onClick={() => console.log("kamu")}
                  >
                    <CardProduct imageProduct={imageTshirt} discount={true} />
                  </div>
                  // <div class="group relative">
                  //   <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  //     {/* <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full"> */}
                  //     <img src={imageTshirt} width="250px" />
                  //   </div>
                  //   <div class="mt-4 flex justify-between">
                  //     <div>
                  //       <h3 class="text-sm text-gray-700">
                  //         <a href="#">
                  //           <span
                  //             aria-hidden="true"
                  //             class="absolute inset-0"
                  //           ></span>
                  //           Basic Tee
                  //         </a>
                  //       </h3>
                  //       <p class="mt-1 text-sm text-gray-500">Black</p>
                  //     </div>
                  //     <p class="text-sm font-medium text-gray-900">$35</p>
                  //   </div>
                  // </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 36,
          }}
        >
          <ButtonPrimary width={150} textLabel="MORE PRODUCT" />
        </div>
      </div>
      <div
        style={{
          // backgroundColor: "#F9F9F9",
          width: "100%",
          minHeight: "100px",
          padding: "46px 169px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className="HammersmithOne" style={{ fontSize: 24 }}>
            JOURNAL
          </span>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          <span style={{ width: "70%" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </span>
        </div>
        <div class="" style={{ marginTop: 50 }}>
          <div class="">
            {/* <h2 class="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2> */}

            {/* <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> */}
            {/* {kontenProduct.map((kontenProduct) => {
                return (
                  // <div class="group relative">
                  //   <CardProduct imageProduct={imageTshirt} discount={true} />
                  // </div>
                  <div></div>
                );
              })} */}
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {kontenBlog.map((kontenProduct) => {
                return (
                  <div>
                    <div
                      style={{
                        width: 332,
                        backgroundColor: "gray",
                        height: 234,
                      }}
                    ></div>
                    <div style={{ width: "100%", marginTop: 30 }}>
                      <div>
                        <span
                          className="HammersmithOne"
                          style={{ fontSize: 24 }}
                        >
                          Title Journal
                        </span>
                      </div>
                      <span style={{}}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </span>
                      <div
                        style={{
                          display: "flex",
                          marginTop: 16,
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div style={{}}>
                            <p class="font-semibold text-gray-900">
                              <a href="#">
                                <span class="absolute inset-0"></span>
                                by Duckdumber
                              </a>
                            </p>
                          </div>
                          <time datetime="2020-03-16" class="text-gray-500">
                            Mar 16, 2020
                          </time>
                        </div>
                        <div
                          style={{
                            width: 125,
                            height: 30,
                            backgroundColor: "#C4C4C4",
                            borderRadius: 25,
                            marginTop: 6,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              width: 125,
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <div style={{}}>
                              <FontAwesomeIcon icon={faHeart} />
                              <span
                                style={{ marginLeft: 6 }}
                                className="HammersmithOne"
                              >
                                13
                              </span>
                            </div>
                            <div style={{ padding: "0px 6px" }} />
                            <div>
                              <FontAwesomeIcon icon={faComment} />
                              <span
                                style={{ marginLeft: 6 }}
                                className="HammersmithOne"
                              >
                                13
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* </div> */}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 42,
          }}
        >
          <ButtonPrimary width={150} textLabel="READ MORE" />
        </div>
      </div>
      <div style={{ minHeight: 100, backgroundColor: "#262626" }}>
        <div style={{ display: "flex", padding: "40px 170px" }}>
          <div style={{ display: "flex", gap: 62 }}>
            <div>
              <img src={logo} width="50" height="50" />
            </div>
            <div>
              <span
                style={{ color: "#fff", fontSize: 18 }}
                className="HammersmithOne"
              >
                DUCK DUMBER
              </span>
              <p style={{ color: "#ADADAD", width: 330 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                Lorem Ipsum is simp
              </p>
            </div>
          </div>
          <div style={{ display: "flex", marginLeft: "63px", gap: 56 }}>
            <div>
              <span
                style={{ color: "#fff", fontSize: 18 }}
                className="HammersmithOne"
              >
                OUR COMPANY
              </span>
              <p style={{ color: "#ADADAD" }} className="HammersmithOne">
                About Us
              </p>
              <p style={{ color: "#ADADAD" }} className="HammersmithOne">
                All Product
              </p>
              <p style={{ color: "#ADADAD" }} className="HammersmithOne">
                Journal
              </p>
            </div>
            <div>
              <span
                style={{ color: "#fff", fontSize: 18 }}
                className="HammersmithOne"
              >
                OUR COMPANY
              </span>
              <p style={{ color: "#ADADAD" }} className="HammersmithOne">
                About Us
              </p>
              <p style={{ color: "#ADADAD" }} className="HammersmithOne">
                All Product
              </p>
              <p style={{ color: "#ADADAD" }} className="HammersmithOne">
                Journal
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            height: 50,
            backgroundColor: "#4A4A4A",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            className="HammersmithOne"
            style={{ fontSize: 14, color: "#FFFFFF" }}
          >
            2023 DUCK DUMBER. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
