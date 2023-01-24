export default function validate(value) {
    let errors = {};
  
    if (!value.mobile) {
      errors.mobile = 'Enter Mobile Number';
    } else if (value.mobile < 10 ) {
      errors.mobile = 'Number Must be of 10 Digits';
    }
    return errors;
  }