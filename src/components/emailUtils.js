import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      'service_sk0qkng',
      'template_byrg0uh',
      formData,
      '1mkT4G8b_r1dnlJ-2'
    );
    console.log(response.text);
    return response.text;
  } catch (error) {
    console.log(error.text);
    throw error;
  }
};
