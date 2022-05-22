import * as yup from 'yup';

const schemaFormContact = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[a-zA-Zá-üÁ-Ü ]+$/, 'You must enter a valid name')
    .typeError('You must enter a valid name'),
  email: yup.string().required('Email is required').email(),
  message: yup
    .string()
    .required('Message is required')
    .matches(/^[a-zA-Zá-üÁ-Ü0-9 ]+$/, 'You must enter a valid message')
    .typeError('You must enter a valid message'),
});

export default schemaFormContact;
