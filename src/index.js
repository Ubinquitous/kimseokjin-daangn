import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

const instance = axios.create({
  headers: {
    Authorization: "KakaoAK d079fb133baf05fdd9977e2acd6f9213",
  },
  withCredentials: false,
});

const App = () => {
  const [daangn, setDaangn] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get(
          "https://dapi.kakao.com/v2/search/image?query=당근&size=50"
        );
        setDaangn(res.data.documents);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handle당근바꾸기ㅋㅋ = () => {
    if (count > 45) setCount(0);
    setCount(count + 4);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center gap-32">
      <div className="flex flex-col gap-20">
        <img
          alt="사진이안보이면API연결이안된거란다"
          src={daangn[count]?.image_url}
          className="w-52"
        />
        <img
          alt="사진이안보이면API연결이안된거란다"
          src={daangn[count + 1]?.image_url}
          className="w-52"
        />
      </div>
      <div className="flex flex-col gap-32 jsutify-center items-center">
        <h1 className="text-5xl text-white font-extrabold text-animation">
          김석진 당근마켓 합격 축하ㄹ한다
        </h1>
        <img
          src="./hapgyuk.jpeg"
          alt="김서깆ㄴ!!!"
          className=" w-32 rotating-image"
        />
        <button
          onClick={handle당근바꾸기ㅋㅋ}
          className="w-fit py-4 px-20 bg-white font-semibold rounded-lg"
        >
          당근 바꾸기 버튼
        </button>
        <img
          src="./seokjin.jpeg"
          alt="aslkdsankldnasld"
          className=" w-32 rotating-image"
        />
      </div>
      <div className="flex flex-col gap-20">
        <img
          alt="사진이안보이면API연결이안된거란다"
          src={daangn[count + 2]?.image_url}
          className="w-52"
        />
        <img
          alt="사진이안보이면API연결이안된거란다"
          src={daangn[count + 3]?.image_url}
          className="w-52"
        />
      </div>
    </div>
  );
};

root.render(<App />);
