import React, {useState, useEffect} from 'react'

const Scroll = () => {

    const [ScrollY, setScrollY] = useState(0); // 스크롤값 저장
    const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  
    const handleScroll = () => {
      setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
      if (ScrollY > 100) {
        setBtnStatus(true);
      } else {
        setBtnStatus(false);
      }
    };
  
    const handleTop = () => {
      // 클릭하면 스크롤이 위로 올라가는 함수
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setScrollY(0); // ScrollY 의 값을 초기화
      setBtnStatus(false); // 버튼 숨김
    };
  
    useEffect(() => {
      console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
    }, [ScrollY]);
  
    useEffect(() => {
      const watch = () => {
        window.addEventListener("scroll", handleScroll);
      };
      watch(); // addEventListener 함수를 실행
      return () => {
        window.removeEventListener("scroll", handleScroll); // addEventListener 함수를 삭제
      };
    });

  return (
    <div>
      <button
        className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
        onClick={handleTop} // 버튼 클릭시 함수 호출
      >
      TOP
      </button>
    </div>
  )
}

export default Scroll