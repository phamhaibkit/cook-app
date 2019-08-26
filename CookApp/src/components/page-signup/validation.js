// eslint-disable-next-line consistent-return
export const validateEmail = (email) => {
  if (email.length > 0) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      return 'Sai định dạng email';
    }
  } else {
    return 'Vui lòng nhập email';
  }
};

// eslint-disable-next-line consistent-return
export const requireField = (text, name) => {
  if (text.length === 0) {
    return `Vui lòng nhập ${name}`;
  }
};

// eslint-disable-next-line consistent-return
export const validatePhone = (phone) => {
  if (phone.length > 0) {
    // eslint-disable-next-line no-useless-escape
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!re.test(phone)) {
      return 'Sai định dạng số điện thoại';
    }
  } else {
    return 'Vui lòng nhập số điện thoại';
  }
};

export const validateForm = (stateValue) => {
  const { name, phone, email } = stateValue;
  const validateName = requireField(name, 'họ và tên');
  const validateMail = validateEmail(email);
  const valiPhone = validatePhone(phone);
  if (validateName) {
    return validateName;
  }
  if (validateMail) {
    return validateMail;
  }
  if (valiPhone) {
    return valiPhone;
  }
  return false;
};