import { useState } from "react";

const Form = () => {
  const [emailValue, setEmailValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const [emailValueErrors, setEmailValueErrors] = useState(false);
  const [textValueErrors, setTextValueErrors] = useState(false);

  const messages = {
    emailValue_incorrect: "E-mail must have @.",
    textValue_incorrect: "This text box cannot be empty.",
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "emailValue") {
      setEmailValue(value);
    } else if (name === "textValue") {
      setTextValue(value);
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const validation = formValidation();

    if (validation.correct) {
      setEmailValue("");
      setTextValue("");
      setEmailValueErrors(false);
      setTextValueErrors(false);
    } else {
      setEmailValueErrors(!validation.email);
      setTextValueErrors(!validation.text);
    }
  };

  const formValidation = () => {
    let email = false;
    let text = false;
    let correct = false;

    if (emailValue.indexOf("@") !== -1) {
      email = true;
    }
    if (textValue !== "") {
      text = true;
    }
    if (email && text) {
      correct = true;
    }
    return {
      email,
      text,
      correct,
    };
  };
  return (
    <form onSubmit={handleSubmitForm} action="" className="contact__form">
      <input
        name="emailValue"
        value={emailValue}
        className="contact__email"
        type="text"
        placeholder="e-mail"
        onChange={handleChange}
      />
      <textarea
        name="textValue"
        value={textValue}
        className="contact__text"
        placeholder="Your message"
        onChange={handleChange}
      ></textarea>
      {emailValueErrors && (
        <span className="contact__valid">{messages.emailValue_incorrect}</span>
      )}
      {textValueErrors && (
        <span className="contact__valid">{messages.textValue_incorrect}</span>
      )}
      <button type="submit" className="contact__button">
        Send
      </button>
    </form>
  );
};

export default Form;
