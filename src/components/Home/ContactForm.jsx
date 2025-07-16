import React, { useState, useReducer, useRef, memo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import sanitizeHtml from "sanitize-html";
import ThreeDSphereWithSatellite from "./ThreeDSphereWithSatellite";
import "./ContactForm.css";

// Constants
const COLORS = {
  GOLDEN: "#facc15",
  ERROR_RED: "#ef4444",
  WHITE: "#ffffff",
  GRAY_200: "#e5e7eb",
  GREEN_500: "#22c55e",
};

const FORM_FIELDS = {
  FULL_NAME: "fullName",
  EMAIL: "email",
  PHONE_NUMBER: "phoneNumber",
  INTEREST: "interest",
  COMPANY_NAME: "companyName",
  PROJECT_DETAILS: "projectDetails",
};

// Reusable FormField component
const FormField = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  error,
  placeholder,
  required,
  inputRef,
  autoComplete,
}) => (
  <div className="form-field">
    <label htmlFor={id} className={`form-label ${required ? "required" : ""}`}>
      {label}
    </label>
    <input
      ref={inputRef}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`w-full p-3.5 rounded-lg text-base text-white input-pattern focus:outline-none ${
        error ? "invalid" : ""
      }`}
    />
    {error && (
      <p id={`${id}-error`} className="error-text">
        {error}
      </p>
    )}
  </div>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  autoComplete: PropTypes.string,
};

// Memoized ThreeDSphereWithSatellite
const MemoizedThreeDSphereWithSatellite = memo(ThreeDSphereWithSatellite);

const initialState = {
  formData: {
    [FORM_FIELDS.FULL_NAME]: "",
    [FORM_FIELDS.EMAIL]: "",
    [FORM_FIELDS.PHONE_NUMBER]: "",
    [FORM_FIELDS.INTEREST]: "",
    [FORM_FIELDS.COMPANY_NAME]: "",
    [FORM_FIELDS.PROJECT_DETAILS]: "",
  },
  errors: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: { ...state.formData, [action.name]: action.value },
        errors: { ...state.errors, [action.name]: "" },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const dropdownItems = [
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "Graphic Design",
    "Branding",
    "Academic Projects",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", name, value });
  };

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData[FORM_FIELDS.FULL_NAME].trim())
      newErrors[FORM_FIELDS.FULL_NAME] = "Full name is required";
    if (!formData[FORM_FIELDS.EMAIL].trim()) {
      newErrors[FORM_FIELDS.EMAIL] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData[FORM_FIELDS.EMAIL])) {
      newErrors[FORM_FIELDS.EMAIL] = "Invalid email format";
    }
    if (!formData[FORM_FIELDS.PHONE_NUMBER].trim()) {
      newErrors[FORM_FIELDS.PHONE_NUMBER] = "Phone number is required";
    } else if (
      !/^\+?[1-9]\d{1,14}$/.test(
        formData[FORM_FIELDS.PHONE_NUMBER].replace(/\s/g, "")
      )
    ) {
      newErrors[FORM_FIELDS.PHONE_NUMBER] = "Invalid phone number format";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(state.formData);
    if (Object.keys(validationErrors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors: validationErrors });
      if (validationErrors[FORM_FIELDS.FULL_NAME]) fullNameRef.current.focus();
      else if (validationErrors[FORM_FIELDS.EMAIL]) emailRef.current.focus();
      else if (validationErrors[FORM_FIELDS.PHONE_NUMBER])
        phoneNumberRef.current.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const sanitizedData = {
        [FORM_FIELDS.FULL_NAME]: sanitizeHtml(
          state.formData[FORM_FIELDS.FULL_NAME]
        ),
        [FORM_FIELDS.EMAIL]: sanitizeHtml(state.formData[FORM_FIELDS.EMAIL]),
        [FORM_FIELDS.PHONE_NUMBER]: sanitizeHtml(
          state.formData[FORM_FIELDS.PHONE_NUMBER]
        ),
        [FORM_FIELDS.INTEREST]: sanitizeHtml(
          state.formData[FORM_FIELDS.INTEREST]
        ),
        [FORM_FIELDS.COMPANY_NAME]: sanitizeHtml(
          state.formData[FORM_FIELDS.COMPANY_NAME]
        ),
        [FORM_FIELDS.PROJECT_DETAILS]: sanitizeHtml(
          state.formData[FORM_FIELDS.PROJECT_DETAILS]
        ),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token":
            document.querySelector('meta[name="csrf-token"]')?.content || "",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        dispatch({ type: "RESET_FORM" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex items-center justify-center p-4 md:p-6 font-poppins relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 right-4 bg-green-500 text-white p-4 rounded-full"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
      )}

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 glass-container p-8 md:p-10 rounded-2xl">
        <div className="md:w-1/3 flex flex-col items-center text-center justify-center relative">
          <MemoizedThreeDSphereWithSatellite />
          <div className="mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
              className="text-5xl sm:text-4xl font-bold text-center mb-8 select-none"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: COLORS.GOLDEN,
                textShadow:
                  "0 0 1px rgba(0, 170, 255, 0.4), 0 0 1px rgba(0, 255, 255, 0.2)",
              }}
            >
              Let’s Get to Work!
            </motion.h1>
            <p
              className="text-md leading-relaxed max-w-sm transition duration-500 ease-in-out transform hover:scale-105 animate-fadeIn cursor-default"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: COLORS.GOLDEN,
                textShadow: "0 0 4px rgba(0, 119, 255, 0.4)",
              }}
            >
              Contact us to discuss your project. We'll respond within three
              business days.
            </p>
          </div>
        </div>

        <div className="md:w-2/3 flex justify-center">
          <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Full Name"
                  id="fullName"
                  name={FORM_FIELDS.FULL_NAME}
                  type="text"
                  value={state.formData[FORM_FIELDS.FULL_NAME]}
                  onChange={handleChange}
                  error={state.errors[FORM_FIELDS.FULL_NAME]}
                  placeholder="Your full name"
                  required
                  inputRef={fullNameRef}
                />
                <FormField
                  label="Email"
                  id="email"
                  name={FORM_FIELDS.EMAIL}
                  type="email"
                  value={state.formData[FORM_FIELDS.EMAIL]}
                  onChange={handleChange}
                  error={state.errors[FORM_FIELDS.EMAIL]}
                  placeholder="Your email"
                  required
                  inputRef={emailRef}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  label="Phone Number"
                  id="phoneNumber"
                  name={FORM_FIELDS.PHONE_NUMBER}
                  type="tel"
                  value={state.formData[FORM_FIELDS.PHONE_NUMBER]}
                  onChange={handleChange}
                  error={state.errors[FORM_FIELDS.PHONE_NUMBER]}
                  placeholder="Your phone number"
                  required
                  inputRef={phoneNumberRef}
                />
                <div className="form-field custom-select relative">
                  <label htmlFor="interest" className="form-label">
                    I'm interested in
                  </label>
                  <div className="relative">
                    <select
                      id="interest"
                      name={FORM_FIELDS.INTEREST}
                      value={state.formData[FORM_FIELDS.INTEREST]}
                      onChange={handleChange}
                      className="w-full p-3.5 pr-10 rounded-lg text-base text-white dropdown-pattern focus:outline-none appearance-none"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {dropdownItems.map((item) => (
                        <option
                          key={item}
                          value={item.toLowerCase().replace(/\s+/g, "-")}
                        >
                          {item}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name={FORM_FIELDS.COMPANY_NAME}
                  value={state.formData[FORM_FIELDS.COMPANY_NAME]}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full p-3.5 rounded-lg text-base text-white input-pattern focus:outline-none"
                />
              </div>

              <div className="form-field">
                <label htmlFor="projectDetails" className="form-label">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name={FORM_FIELDS.PROJECT_DETAILS}
                  value={state.formData[FORM_FIELDS.PROJECT_DETAILS]}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="w-full p-3.5 rounded-lg text-base text-white input-pattern focus:outline-none"
                ></textarea>
              </div>

              <div className="form-field flex justify-center mt-8">
                <button
                  type="submit"
                  className="px-6 py-2.5 button-glow border-1 rounded-full font-bold text-white text-base"
                  disabled={isSubmitting}
                  aria-label="Submit contact form"
                >
                  <span className="button-content">
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        Contact
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2 inline transition-transform duration-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;