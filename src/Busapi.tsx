import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Busapi() {
  const [data, setData] = useState(null); // 데이터를 저장할 상태

  useEffect(() => {
    // 컴포넌트가 마운트될 때 비동기 요청을 실행
    const getXMLData = async () => {
      // Axios 인스턴스를 사용해 XML 데이터 요청
      const response : any = await axios('/main');
      console.log(response);
      setData(response.data); // 응답을 상태에 저장
    };

    getXMLData(); // 함수 실행
  }, []); // 빈 배열을 전달해 컴포넌트가 마운트될 때만 실행되도록 함

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* 데이터가 있을 경우에만 렌더링 */}
          {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
        </div>
      </header>
    </div>
  );
}

export default Busapi;
