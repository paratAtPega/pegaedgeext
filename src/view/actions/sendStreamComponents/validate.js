export default (values) => {
  const errors = {};
  if (!values.eventName) {
    errors.eventName = {
      message: 'Please specify an event name',
      type: 'required'
    };
  }

  if (!values.eventTime) {
    errors.eventTime = {
      message: 'Please specify then event Timestamp',
      type: 'required'
    };
  }

  return errors;
};
