import React from "react";

const CardProduct = ({ discount = false, imageProduct }) => {
  return (
    <div style={{ marginTop: 33 }}>
      <div
        style={{
          // backgroundColor: "#fff",
          // height: 225,
          width: 259,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          className="HammersmithOne"
          style={{
            width: '45px',
            height: '45px',
            position: "absolute",
            zIndex: 2,
            fontSize: 10,
            background: "#FF8C00",
            borderRadius: "50%",
            right: 20,
            top: 25,
            display: 'flex',
            fontWeight: "bold",
            // textAlign: 'center',
            // alignSelf: 'center',
            // padding: "15px  20px",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>35%</span>
        </p>
        <img src={imageProduct} width="250px" />
      </div>
      <div style={{ marginTop: 16 }}>
        <div
          style={{
            // backgroundColor: "#fff",
            // height: 225,
            width: 259,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            className="HammersmithOne"
            style={{ fontSize: 16, width: 200, textAlign: "center" }}
          >
            Duckdumber - T-shirt Basic But Fun Black
          </p>
        </div>

        <div
          style={{
            marginTop: 4,
            // backgroundColor: "#fff",
            // height: 225,
            width: 259,
            display: "flex",
            justifyContent: discount === false ? "center" : "space-around",
          }}
        >
          <p
            className="HammersmithOne"
            style={{ fontSize: 14, textAlign: "center" }}
          >
            Rp 150.000
          </p>
          {discount === true ? (
            <s>
              <p
                className="HammersmithOne"
                style={{ fontSize: 14, textAlign: "center", color: "red" }}
              >
                Rp 150.000
              </p>
            </s>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
