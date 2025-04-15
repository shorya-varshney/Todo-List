import { useState } from "react";
import "./App.css";

function App() {
  const [activity, setactivity] = useState("");
  const [listData, setlistData] = useState([]);

  const handlechange = (e) => {
    setactivity(e.target.value);
  };

  function addactivity() {
    const trimmedActivity = activity.trim();
  
    if (trimmedActivity === "") {
      alert("Please enter an activity!");
      return;
    }
  
    if (listData.includes(trimmedActivity)) {
      alert("This activity already exists in the list!");
      return;
    }
  
    setlistData((prevList) => [...prevList, trimmedActivity]);
    setactivity("");
  }
  

  function removeactivity(i) {
    const updateList = listData.filter((_,id) => {
      return i != id;
    });
    setlistData(updateList);
  }

  function removeall() {
    setlistData([]);
  }

  return (
    <>
      <div
        id="main-container"
        class="container-fluid h-100 d-flex justify-content-center align-items-center"
      >
        <div id="first-container" class="container h-50 ">
          <div id="heading" class="container-fluid fs-1 fw-bold ">
            TODO LIST
          </div>

          <div id="input-group" class="input-group mt-4">
            <input
              type="text"
              class="form-control"
              placeholder="Add Activity"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={activity}
              onChange={handlechange}
            />
            <button
              onClick={addactivity}
              class="btn btn-outline-success bg-success"
              type="button"
              id="button-addon2"
            >
              Add
            </button>
          </div>

          {listData != [] &&
            listData.map((data, i) => {
              return (
                <div key={i}>
                  <div className="listData">{data}</div>
                  <button
                    onClick={() => removeactivity(i)}
                    class="btn btn-outline-danger"
                    type="button"
                    id="remove-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash3 text-danger "
                      viewBox="0 0 16 16"
                      
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </button>
                </div>
              );
            })}

          {listData.length >= 2 && (
            <button
              onClick={removeall}
              class="btn btn-outline-danger bg-danger m-2"
              type="button"
              id="removeall-btn"
            >
              
              Remove All
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
