import axios from "axios";
import React from "react";
import "./../../index.scss";
import { useEffect } from "react";
// 64e2d57030787cd88c94ddecae3af1a3
// https://api.themoviedb.org/3/search/movie?api_key=64e2d57030787cd88c94ddecae3af1a3&query=Jack+Reacher
const MovieSearchApp = () => {
  useEffect(() => {
    async function fetchData() {
      const resualt = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=64e2d57030787cd88c94ddecae3af1a3&query=Jack+Reache`
      );
    }
    fetchData();
  }, []);
  return (
    <div style={{ backgroundColor: "#FFD1DC" }}>

    <div className="p-10">
      <div style={{
          width: "500px",
          margin: "0 auto",
        }} className='"w-full max-w-[500px]mx-auto'>
        <input
          type="text"
          className="w-full p-3 border border-gray-200 rounded-lg"
          placeholder="Search for a movie"
        />
      </div>
      <div className="grid grid-cols-3 gap-10">
      <MovieItem></MovieItem>
      <MovieItem></MovieItem>
      <MovieItem></MovieItem>
      </div>
    </div>
    </div>
  );
};

const MovieItem = () => {
  return (
    <div className="bg-white p-3 rounded-2xl shadow-sm flex flex-col mt-5">

      <div className="h-[297px]">
        <img
          src="https://www.ldg.com.vn/media/ar/ldgphim-when-the-phone-ring.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-7">
        <h3 className="text-xl text-black font-semibold mb-4">
          When The Phone Rings (Khi Điện Thoại Đổ Chuông)
        </h3>
        <p className="text-[#999] text-sm mb-6">
          Baek Sa Eon xuất thân từ một gia đình chính trị danh giá và anh trở
          thành phát ngôn viên tổng thống trẻ nhất ở Hàn Quốc. Lý lịch của anh
          ta cũng bao gồm thời gian làm phóng viên chiến trường, nhà đàm phán
          con tin và người phụ trách chính. Anh kết hôn với Hong Hui Ju cách đây
          3 năm. Cô là con gái của một chủ tờ báo. Cô ấy mắc chứng câm do một
          tai nạn xảy ra khi còn nhỏ. Cô làm thông dịch viên ngôn ngữ ký hiệu
          tại tòa án và trên truyền hình. Sa Eon và Hui Ju kết hôn phần lớn là
          do sự thuận tiện. 3 năm qua, họ không liên lạc với nhau hay ăn cơm
          cùng nhau. Họ giả vờ như họ là một cặp vợ chồng hạnh phúc. Một ngày
          nọ, Hui Ju bị bắt cóc bởi một kẻ không rõ danh tính. Điều này làm thay
          đổi cuộc sống hôn nhân của họ.
        </p>
        
      </div>
      <div className="flex items-center gap-x-3 mt-auto">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66713 1.02447C7.7719 0.702008 8.2281 0.702009 8.33287 1.02447L9.71753 5.28602C9.76439 5.43023 9.89877 5.52786 10.0504 5.52786H14.5313C14.8703 5.52786 15.0113 5.96173 14.737 6.16102L11.1119 8.7948C10.9892 8.88393 10.9379 9.04191 10.9847 9.18612L12.3694 13.4477C12.4742 13.7701 12.1051 14.0383 11.8308 13.839L8.20572 11.2052C8.08305 11.1161 7.91695 11.1161 7.79428 11.2052L4.16918 13.839C3.89488 14.0383 3.52581 13.7701 3.63059 13.4477L5.01525 9.18612C5.06211 9.04191 5.01078 8.88393 4.88811 8.7948L1.26301 6.16102C0.988711 5.96173 1.12968 5.52786 1.46874 5.52786H5.9496C6.10123 5.52786 6.23561 5.43023 6.28247 5.28602L7.66713 1.02447Z"
              stroke="#FFB86C"
              strokeWidth="1.5"
            />
          </svg>
          </div>
    </div>
  );
};
export default MovieSearchApp;
