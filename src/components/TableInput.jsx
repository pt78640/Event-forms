import { useState } from "react";
const TableInput = ({ getData }) => {
  const [data, setForm] = useState([]);


  //const ref = useRef(null);
  const handleChange = (e) => {
    // console.log(ref.current.files);
    let { value, name, type, checked } = e.target;

    value = type === "checkbox" ? checked : value;

    // if (e.target.files && e.target.files[0]) {
    //   setForm(URL.createObjectURL(e.target.files[0]));
    // }
    setForm({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", data);
    getData(data);
  };
  return (
    <div className="forms">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Enter your Age"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Enter your Address"
          onChange={handleChange}
        />
        <br />
        <select
          type="text"
          name="department"
          onChange={handleChange}
        >
          <option>select Department</option>
          <option> computer science</option>
          <option> Electrical</option>
          <option> mechanical</option>
          <option> Civil</option>
          <option> Electronics </option>
        </select>
        <br />
        <input
          type="number"
          name="salary"
          placeholder="Enter your Salary"
          onChange={handleChange}
        />
        <br />
        <label>
          Marital Status:
          <input
            type="checkbox"
            name="marital status"
            onChange={handleChange}
          />
        </label>
        <br />
        

        <br />
        <input type="submit" style={{backgroundColor:"blue",borderRadius:"5px",color:"white"}}/>
      </form>
    </div>
  );
};

export default TableInput;
