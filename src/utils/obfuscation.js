export const decodeBase64 = (value) => {
  try {
    return atob(value);
  } catch (e) {
    return '';
  }
};

// Encoded values to avoid plain text in source/DOM
const EMAIL_B64 = 'Z292aW5ka3VtYXdhdC5na0BnbWFpbC5jb20='; // govindkumawat.gk@gmail.com
const PHONE_B64 = 'KzYxIDQ1MTcxMzI2Mw=='; // +61 451713263

export const getEmail = () => decodeBase64(EMAIL_B64);
export const getPhone = () => decodeBase64(PHONE_B64);
export const openMailClient = () => {
  const email = getEmail();
  if (email) {
    window.location.href = `mailto:${email}`;
  }
};

