import React from "react";
import Section from "./Section";
import "../assets/css/contact.css";
function Contact() {
  return (
    <Section headline="Contact" secondary={true}>
      <div className="contact">
        <form action="#" method="get">
          <table>
            <tr>
              <th>Menu</th>
              <td>
                <select name="" id="" className="select">
                  <option value="Menu1">Menu1</option>
                  <option value="Menu2">Menu2</option>
                  <option value="Menu3">Menu3</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                <label htmlFor="">
                  <input type="text" name="" className="input" />
                </label>
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <label htmlFor="">
                  <input type="email" name="" className="input" />
                </label>
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
                <label className="gender-label">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id=""
                    className="gender"
                  />
                  Female
                </label>
                <label className="gender-label">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id=""
                    className="gender"
                  />
                  Male
                </label>
                <label className="gender-label">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    id=""
                    className="gender"
                  />
                  Other
                </label>
              </td>
            </tr>
            <tr>
              <th>Detail</th>
              <td>
                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="10"
                  className="textarea"
                ></textarea>
              </td>
            </tr>
          </table>
        </form>
        <div className="selection-button">
          <button className="button">submit</button>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
