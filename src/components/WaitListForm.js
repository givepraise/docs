import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    firstname: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.company || formData.company.trim() === "") {
      errors.company = "Company is required";
    }

    if (!formData.website || formData.website.trim() === "") {
      errors.website = "Website is required";
    }

    if (!formData.firstname || formData.firstname.trim() === "") {
      errors.firstname = "Firstname is required";
    }

    if (!formData.email || formData.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setSubmitting(true);
    try {
      const response = await axios.post(
        "/.netlify/functions/submitForm",
        formData
      );
      setSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      setErrors(error.response.data);
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md p-5 mx-auto">
      <div className="mb-4 text-lg">
        <label className="block mb-2 text-left" htmlFor="company">
          Community name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-3 py-2 text-lg border appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.company && (
          <p className="text-xs text-red-500">{errors.company}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-left" htmlFor="website">
          Link to your community
        </label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-3 py-2 text-lg border appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.website && (
          <p className="text-xs text-red-500">{errors.website}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-left" htmlFor="firstname">
          Contact name
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="w-full px-3 py-2 text-lg border appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.firstname && (
          <p className="text-xs text-red-500">{errors.firstname}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-left" htmlFor="email">
          Contact email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 text-lg border appearance-none focus:outline-none focus:shadow-outline"
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={submitting}
          className="mt-5 button button--secondary button--lg"
        >
          {submitting ? (
            <>
              Submitting <FontAwesomeIcon icon={faSpinner} spin />
            </>
          ) : (
            "Submit"
          )}
        </button>
      </div>
      {typeof errors === "string" && (
        <div className="flex justify-center mt-5">
          <div className="text-xs text-red-500">{errors}</div>
        </div>
      )}
      {submitted && (
        <div className="flex justify-center mt-5">
          <div className="">✅ Thanks for submitting your community!</div>
        </div>
      )}
    </form>
  );
};

export default WaitlistForm;
