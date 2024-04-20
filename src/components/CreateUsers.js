import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUsers() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const handleChage = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs);
    // console.log(inputs);
    axios
      .post("http://localhost/api/user/save", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };
  return (
    <div>
      <h1>List Users</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label>Name: </label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChage} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Email: </label>
              </th>
              <td>
                <input type="text" name="email" onChange={handleChage} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Mobile: </label>
              </th>
              <td>
                <input type="text" name="mobile" onChange={handleChage} />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
