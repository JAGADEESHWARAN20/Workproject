const Validation = (values) => {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,15}$/;
  const Username_pattern = /^[a-z0-9_]+$/;


  if (values.Username.trim() === '') {
    errors.Username = 'Username should not be empty';
  } else if (!Username_pattern.test(values.Username)) {
    errors.Username = 'Invalid username format';
  } else {
    errors.Username = '';
  }
  

  if (values.email.trim() === '') {
    errors.email = 'Email should not be empty';
  } else if (!email_pattern.test(values.email)) {
    errors.email = 'Invalid email format';
  } else {
    errors.email = '';
  }

  if (values.password.trim() === '') {
    errors.password = 'Password should not be empty';
  } else if (!password_pattern.test(values.password)) {
    errors.password = 'Invalid password format';
  } else {
    errors.password = '';
  }

  return errors;
};

export default Validation;
