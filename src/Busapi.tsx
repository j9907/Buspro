import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Busapi() {
  
 
  const SERVICE_KEY = '5tWSCDMFUyIaWSo2TW6yMvkgjMPBaFWxCtT%2BLqJpZSrGa3Y2NtN%2FLyAQmZ%2BJl%2BpjjEO1SL5pp0YIQ6CzNH%2Bgxg%3D%3D'
  

// function clickdata():any{
//     axios.get('http://openapi.changwon.go.kr/rest/bis/Station/',{params})
//     .then(response => {
//         console.log(response.data)
//     })
// }

const axios = require('axios');
const xml2js = require('xml2js'); // XML 응답을 다루기 위해 xml2js 패키지도 사용

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: 'http://openapi.changwon.go.kr/rest/bis/Station/',
});

const getXMLData : any = async () => {
  try {
    // Axios 인스턴스를 사용해 XML 데이터 요청
    const response = await instance.get(`http://openapi.changwon.go.kr/rest/bis/Station/?serviceKey=${encodeURIComponent(SERVICE_KEY)}`, {
      headers: {
        // 서버가 요구하는 경우 Accept 헤더 설정
        'Accept': 'application/xml'
      }
    });

    // xml2js를 사용하여 XML 응답을 JSON으로 변환
    xml2js.parseString(response.data, (err:any, result:any) => {
      if (err) {
        throw err;
      }

      // 변환된 JSON 데이터 출력
      console.log(result);
    });
  } catch (error) {
    // 에러 처리
    console.error(error);
  }
};

// 함수 실행



  return (
    <div className="App">
      <header className="App-header">
          <div>
            <button onClick={getXMLData()}>API</button>
          </div>
      </header>
    </div>
  );
}

export default Busapi;
