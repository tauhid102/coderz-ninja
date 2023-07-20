export const nameValidate = (name, setName, setNameError) => {
  setName(name);
  if (name.length == 0) {
    setNameError(false);
  } else if (name.length > 0 && name.length < 5) {
    setNameError(true);
  } else {
    setNameError(false);
  }
};

export const emailValidate = (email, setEmail, setEmailError) => {
  setEmail(email);
  if (email.length == 0) {
    setEmailError(false);
  } else {
    const isValid =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
        email
      );
    setEmailError(!isValid);
  }
};
export const subjectlValidate = (subject, setSubject, setSubjectError) => {
  setSubject(subject);
  if (subject.length == 0) {
    setSubjectError(false);
  } else if (subject.length > 0 && subject.length < 10) {
    setSubjectError(true);
  } else {
    setSubjectError(false);
  }
};
export const messagelValidate = (message, setMessage, setMessageError) => {
  setMessage(message);
  if (message.length == 0) {
    setMessageError(false);
  } else if (message.length > 0 && message.length < 10) {
    setMessageError(true);
  } else {
    setMessageError(false);
  }
};
