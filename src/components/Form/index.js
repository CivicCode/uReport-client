import React from 'react';

const Form = ({name, code}) => (
  <div className="Form">
    <h1 className="headline">Report {name} {code}</h1>
    <form action="#">
      <label>
        First Name:
        <input type="text" name="firstName" placeholder="First Name" />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" placeholder="Last Name" />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" placeholder="jane@example.com" />
      </label>
      <br />
      <label>
        Pick the reason for your report:
        <select>
          <option value="happy">happy</option>
          <option value="sad">sad</option>
          <option value="99problems">99problems</option>
          <option value="justBecause">just because</option>
        </select>
      </label>
    </form>
  </div>
);

export default Form;
