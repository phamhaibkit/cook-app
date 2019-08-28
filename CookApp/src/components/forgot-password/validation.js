import { requireField } from '../../utils/general';

export const validateForm = (stateValue) => {
  const { email } = stateValue;
  // const valiPhone = validatePhone(email);
  const phoneText = requireField(email, 'số điện thoại');
  if (phoneText) {
    return phoneText;
  }

  return false;
};