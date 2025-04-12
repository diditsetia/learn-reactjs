import React from "react";
import logo from "../../assets/images/logodd.png";
import cart from "../../assets/images/icon_cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faHeart,
  faComment,
  faClose,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ click = () => {} }) {
  return (
    <div style={{ padding: "34px 0px" }}>
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <div class="block sm:ml-6 sm:hidden" style={{ alignSelf: "center" }}>
          <div onClick={click}>
            <FontAwesomeIcon color="#000" size="2x" icon={faBars} />
          </div>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block lg:hidden"
              src={logo}
              width="50px"
              height="50px"
            />
            <img
              class="hidden lg:block"
              src={logo}
              width="50px"
              height="50px"
            />
          </div>
        </div>

        <li>
          {/* <div>
            <a href="">
              <img src={logo} width="50" height="50" />
            </a>
          </div> */}
          {/* <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
            width="50"
            height="50"
          /> */}
          {/* <img src={logo} width="50" height="50" /> */}
        </li>
        {/* <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <li>
            <a href="">
              <span className="HammersmithOne">HOME</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="HammersmithOne">PRODUCT</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="HammersmithOne">JOURNAL</span>
            </a>
          </li>
          <li>
            <a href="">
              <div
                style={{
                  borderRadius: 25,
                  background: "#000",
                  // height: 40,
                  // width: 100,
                  padding: "8px  29px",
                }}
              >
                <span style={{ color: "white" }} className="HammersmithOne">
                  LOGIN
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div style={{ position: "relative" }}>
                <p
                  className="HammersmithOne"
                  style={{
                    // width: '20px',
                    // height: '20px',
                    position: "absolute",
                    zIndex: 2,
                    fontSize: 10,
                    background: "#FF8C00",
                    borderRadius: "50%",
                    right: -10,
                    top: -10,
                    fontWeight: "bold",
                    // textAlign: 'center',
                    // alignSelf: 'center',
                    padding: "3px  7px",
                    color: "#fff",
                  }}
                >
                  2
                </p>
                <img src={cart} width="20px" height="20px" />
              </div>
            </a>
          </li>
        </div> */}

        <div style={{ display: "flex", gap: 20 }}>
          <div class="hidden sm:ml-6 sm:block">
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <li>
                <a href="">
                  <span className="HammersmithOne">HOME</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="HammersmithOne">PRODUCT</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="HammersmithOne">JOURNAL</span>
                </a>
              </li>
              <li>
                <a href="">
                  <div
                    style={{
                      borderRadius: 25,
                      background: "#000",
                      // height: 40,
                      // width: 100,
                      padding: "8px  29px",
                    }}
                  >
                    <span style={{ color: "white" }} className="HammersmithOne">
                      LOGIN
                    </span>
                  </div>
                </a>
              </li>
            </div>
          </div>
          <div style={{ alignSelf: "center" }}>
            <li>
              <a href="">
                <div style={{ position: "relative" }}>
                  <p
                    className="HammersmithOne"
                    style={{
                      // width: '20px',
                      // height: '20px',
                      position: "absolute",
                      zIndex: 2,
                      fontSize: 10,
                      background: "#FF8C00",
                      borderRadius: "50%",
                      right: -10,
                      top: -10,
                      fontWeight: "bold",
                      // textAlign: 'center',
                      // alignSelf: 'center',
                      padding: "3px  7px",
                      color: "#fff",
                    }}
                  >
                    2
                  </p>
                  <img src={cart} width="20px" height="20px" />
                </div>
              </a>
            </li>
          </div>
        </div>

        {/* </div>
        </div> */}
      </ul>
    </div>
  );
}
