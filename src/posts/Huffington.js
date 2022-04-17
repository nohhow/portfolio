import React from "react";

function Huffington() {
  const navItem = {
    padding: "0.5rem",
    display:"flex",
    justifyContent:"space-between",
    fontSize :"0.8rem"
  };
  const p1 = {
    padding:"0 0.3rem"
  }

  const today = new Date();
  const year = today.getFullYear(); // 년도
  const month = today.getMonth() + 1;  // 월
  const date = today.getDate();  // 날짜

  return (
    <div className="cloneContainer">
      <a href="http://web.archive.org/web/20131021171112/https://www.huffingtonpost.com/">원본 링크</a>
      <nav
        style={{
          backgroundColor: "#D8D8D8",
          display: "flex",
          justifyContent: "space-between",
          fontWeight:"bold",
          border:"1px solid black",
          borderWidth:"0 0 1px 0"
        }}
      >
        <div style={navItem}>
          <div style={p1}>Relactionships</div>
          <div style={p1}>True Colors</div>
          <div style={p1}>undefined iOS app</div>
          <div style={p1}>Android app</div>
          <div style={p1}>More</div>
        </div>
        <div style={navItem}>
          <div style={p1}>Log in</div>
          <div style={p1}>Create Account</div>
        </div>
      </nav>
      <header style={{fontFamily:"Georgia", color:"#406e61", textAlign:"center"}}>
        <br/>
        <div>{year + '/' + month + '/' + date}</div>
        <h1>THE HUFFINGTON POST</h1>
      </header>
      <div style={{border:"solid 15px #406e61"}}/>
      <div className="move_bar">
        <span class="move_bar_content"><strong>FROM AP</strong>: Thieves pose as truckers to steal huge cargo loads  <strong>FROM AP</strong>: ATP World Tour Money Leaders  <strong>FROM AP</strong>: Book celebrates StoryCorps' 10-year anniversary  <strong>FROM AP</strong>: Bradley sigue como técnico de Egipto</span>
      </div>
      <h1 style={{fontSize:"3rem"}}><strong>'WE DID NOT WAGE THIS BATTLE JUST AROUND A WEBSITE'</strong></h1>
      <img src="http://web.archive.org/web/20131021171112im_/http://i.huffpost.com/gen/1418063/thumbs/r-OBAMA-huge.jpg" alt="mainImage"/>
    </div>

  );
}

export default Huffington;
