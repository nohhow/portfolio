import React from "react";

function Google() {
  return (
    <div>
      <section>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "1rem" }}>Google 정보</div>
            <div>스토어</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "1rem" }}>Gmail</div>
            <div style={{ marginRight: "1rem" }}>이미지</div>
            <div style={{ marginRight: "1rem" }}>메뉴</div>
            <img
              style={{
                borderRadius: "100%",
                width: "1.5rem",
                height: "1.5rem",
              }}
              src="https://i.stack.imgur.com/34AD2.jpg"
              alt="profileImg"
            />
          </div>
        </nav>
        <div style={{ marginTop: "10rem" }}>
          <img
            width="20%"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="googleLogo"
          />
          <div
            style={{
              margin: "2rem auto",
              width: "35%",
              padding: "10px",
              border: "1px solid lightgrey",
              borderRadius: "30px",
            }}
          >
            <input
              style={{width:"80%", borderStyle: "none", outline: "none" }}
              type="text"
            />
          </div>
          <div>
            <button
              style={{
                borderWidth: "0",
                fontSize: "0.8rem",
                padding: "0.5rem",
                margin: "0 1rem 1rem 0",
              }}
            >
              Google 검색
            </button>
            <button
              style={{
                borderWidth: "0",
                fontSize: "0.8rem",
                padding: "0.5rem",
              }}
            >
              I'm Feeling Lucky
            </button>
            <br />
            <span style={{ fontSize: "0.8rem", color: "blue" }}>
              온라인 정보 팩트체크를 위한 유용한 팁
            </span>
          </div>
        </div>
        <div style={{ marginTop: "10rem" }}>
          <div
            style={{
              border: "0px solid #808080",
              borderBottomWidth: "1px",
              textAlign: "left",
              backgroundColor: "#D8D8D8",
              padding: "1rem",
            }}
          >
            <div>
              <div>대한민국</div>
            </div>
          </div>
          <div
            style={{
              textAlign: "left",
              backgroundColor: "#D8D8D8",
              padding: "1rem",
            }}
          >
            <div style={{ display: "flex", justifyContent:"space-between" }}>
              <div style={{display:"flex"}}>
                <div style={{ marginRight: "1rem" }}>광고</div>
                <div style={{ marginRight: "1rem" }}>비즈니스</div>
                <div>검색의 원리</div>
              </div>
              <div style={{display:"flex"}}>
                <div style={{ marginRight: "1rem" }}>개인정보처리방침</div>
                <div style={{ marginRight: "1rem" }}>약관</div>
                <div>설정</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Google;
