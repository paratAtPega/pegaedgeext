export default (values) => {
  const errors = {};

  if (!values.url) {
    errors.url = 'Please provide Clickstream Service Endpoint URL';
  } else if (
    !values.url.match(
      /https?:\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]+\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
    )
  ) {
    errors.url = 'Please provide a valid URL';
  }

  if (!values.businessType) {
    errors.businessType = 'Please specify your business type';
  }
  return errors;
};
