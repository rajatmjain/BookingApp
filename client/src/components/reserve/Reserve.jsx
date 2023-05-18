import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";

const Reserve = ({ setOpen, hotelID }) => {
  const { data, loading, error } = useFetch(`/hotels/room/${hotelID}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...checked, value]
        : selectedRooms.filter((item) => item != value)
    );
  };

  const getDatesInRange = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const date = new Date(startDate);
    let list = [];

    while (date < endDate) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return list;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleClick = async() => {
    try{
        await Promise.all(selectedRooms.map(roomID)=>{
            const res = axios.put("/")
        })
    }catch(err){
        
    }
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          data.map((item) => (
            <div className="rItem" key={item._id}>
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDescription">{item.description}</div>
                <div className="rMax">
                  Max people: <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">${item.price}</div>
              </div>
              <div className="room">
                {item.roomNumbers.map((roomNumber) => (
                  <div key={roomNumber.number}>
                    <label>{roomNumber.number}</label>
                    <input
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
        <button onClick={handleClick} className="rButton">
          Reserve now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
