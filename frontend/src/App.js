
// import React, { useMemo, DatePickerComponent, useState, useEffect } from "react";
// import Select from "react-select";
// import DatePicker from "react-datepicker";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import ReserveMain from "./components/reserve/ReserveMain";

// import axios from 'axios';
// import Seat from './components/Seat';
// import Pay from './Pay';



// const MovieList = () => {
//   const [list, setList] = useState([{
//     id: '',
//     movieTitle: ''
//   }]);

//   useEffect(() => {
//     axios({
//       url: 'http://localhost:8080/movie',
//       method: 'GET'
//     }).then((res) => {
//       setList(res.data);
//       console.log(res.data);
//     });
//   }, []);

//   return (
//     <div class="row">
//       <div className="category">영화 선택</div>
//         <Select MovieList={list.map((v) => {
//             return (
//               <tr>
//                 <td>{v.id}</td>
//                 <td>{v.title}</td>
//               </tr>
//             )
//           })} defaultMenuIsOpen />     
//           {/* {list.map((v) => {
//             return (
//               <tr>
//                 <td>{v.id}</td>
//                 <td>{v.title}</td>
//               </tr>
//             )
//           })} */}
//     </div>
//   )
// }


function App() {
  return (
    
    <div className="select">

      <ReserveMain />

    </div>
  )
    
  
}




export default App;
