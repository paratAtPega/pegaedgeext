export default (values) => {
  const errors = {};
  if (!values.customerId) {
    errors.customerId = 'Please specify Customer ID';
  }

  return errors;
};
