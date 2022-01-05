import React, { useMemo, DatePickerComponent, useState, useEffect } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import axios from 'axios';


// const DatePickerComponent = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const ExampleCustomInput = ({ value, onClick }) => (
//     <button className="example-custom-input" onClick={onClick}>
//       {value}
//     </button>
//   );
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={date => setStartDate(date)}
//       customInput={<ExampleCustomInput />}
//     />
//   );
// };

const MovieList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://localhost:8080/movie',
      method: 'GET'
    }).then((res) => {
      setList(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div class="row">
      <div className="category">영화 선택</div>
        <Select MovieList={MovieList} defaultMenuIsOpen />     
          {list.map((v) => {
            return (
              <tr>
                <td>{v.id}</td>
                <td>{v.title}</td>
              </tr>
            )
          })}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


// function App() {
//   const options = useMemo(
//     () => [
//       { value: "apple", label: "Apple" , isDisabled: true },
//       { value: "banana", label: "Banana" },
//       { value: "orange", label: "Orange" },
//       { value: "berry", label: "Berry" },
//     ],
//     []
//   );
//   return (

//     <div className="App">
{/* <div className="category">Default Select</div>
      <Select options={options} />
      <div className="category">Loading Select</div>
      <Select options={options} isLoading /> */}
{/* <div className="category">날짜</div>
      <Select options={options} defaultMenuIsOpen /> */}

{/* <div className="category">이미선택된것</div>
      <Select options={options} defaultValue={options[0]} isDisabled /> */}
// <div className="category">영화</div>
// <Select options={options} defaultMenuIsOpen />
{/* <div className="category">상영시간</div>
      <Select options={options} defaultMenuIsOpen /> */}
{/* <div className="category">Select that is initially open</div>
      <Select options={options} defaultValue={options[0]} defaultMenuIsOpen /> */}

//     </div>


//   );
// }

export default App;
