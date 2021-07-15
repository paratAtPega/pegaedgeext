export default (values) => {
  const errors = {};
  if (!values.eventName) {
    errors.eventName = 'Please specify an event name';
  }

  if (!values.eventTime) {
    errors.eventTime = 'Please specify then event Timestamp';
  }

  return errors;
};
