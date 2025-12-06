import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    country: "",
    languages: [],
    phone: "",
    comments: "",
    resume: "",
    termsAccepted: false,
  });

  const [tableData, setTableData] = useState([]);

  const languageOptions = ["English", "Hindi", "French"];

  // handle text, email, password, number, radio, select
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // checkbox (terms)
    if (type === "checkbox" && name === "termsAccepted") {
      setForm({ ...form, termsAccepted: checked });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  // handle languages (checkbox group)
  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm({ ...form, languages: [...form.languages, value] });
    } else {
      setForm({
        ...form,
        languages: form.languages.filter((lang) => lang !== value),
      });
    }
  };

  // file upload
  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, resume: file ? file.name : "" });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setTableData([...tableData, form]);
    resetForm();
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      email: "",
      password: "",
      gender: "",
      age: "",
      country: "",
      languages: [],
      phone: "",
      comments: "",
      resume: "",
      termsAccepted: false,
    });
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={submitForm}>
        {/* Full Name */}
        <label>Full Name:</label>
        <br />
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        {/* Email */}
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        {/* Password */}
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        {/* Gender */}
        <label>Gender:</label>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          checked={form.gender === "male"}
          onChange={handleChange}
          required
        />
        <label>Male</label>
        <br />

        <input
          type="radio"
          name="gender"
          value="female"
          checked={form.gender === "female"}
          onChange={handleChange}
        />
        <label>Female</label>
        <br />
        <br />

        {/* Age */}
        <label>Age:</label>
        <br />
        <input
          type="number"
          name="age"
          min="18"
          max="100"
          value={form.age}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        {/* Country */}
        <label>Country:</label>
        <br />
        <select name="country" value={form.country} onChange={handleChange} required>
          <option value="">Select your country</option>
          <option value="india">India</option>
          <option value="usa">America</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
        </select>
        <br />
        <br />

        {/* Languages */}
        <label>Languages Known:</label>
        <br />

        {languageOptions.map((lang) => (
          <div key={lang}>
            <input
              type="checkbox"
              value={lang}
              checked={form.languages.includes(lang)}
              onChange={handleLanguageChange}
            />
            <label>{lang}</label>
          </div>
        ))}

        <br />

        {/* Phone */}
        <label>Phone Number:</label>
        <br />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* Comments */}
        <label>Comments:</label>
        <br />
        <textarea
          name="comments"
          rows="6"
          value={form.comments}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />

        {/* Resume */}
        <label>Upload Resume:</label>
        <br />
        <input type="file" onChange={handleFile} />
        <br />
        <br />

        {/* Terms */}
        <input
          type="checkbox"
          name="termsAccepted"
          checked={form.termsAccepted}
          onChange={handleChange}
          required
        />
        <label>I accept the terms and conditions</label>
        <br />
        <br />

        <button type="reset" onClick={resetForm}>Reset</button>
        <button type="submit">Submit</button>
      </form>

      {/* Table */}
      <div style={{ marginTop: "30px" }}></div>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Country</th>
            <th>Languages</th>
            <th>Phone</th>
            <th>Comments</th>
            <th>Resume</th>
            <th>Terms</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{item.country}</td>
              <td>{item.languages.join(", ")}</td>
              <td>{item.phone}</td>
              <td>{item.comments}</td>
              <td>{item.resume}</td>
              <td>{item.termsAccepted ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
