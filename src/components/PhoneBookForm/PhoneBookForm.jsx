import { Formik, ErrorMessage } from 'formik';
import { Button, WholeForm, Label, Input } from './PhoneBookForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectItems } from 'redux/selectors';

const phoneCheck =
  /^(([\\+]*[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{2,4}?[ \\-]*[0-9]{2,4}?$/;

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),

  phone: Yup.string()
    .matches(
      phoneCheck,
      'Phone number must be min 4 digits. Can contain spaces, dashes and start with +'
    )
    .required('Phone number is required'),
});

const PhoneBookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const haveName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (haveName) {
      alert(`${name} is already in the contact list`);
      return;
    }

    dispatch(addContact({ name, phone }));
    console.log(name, phone);

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        <WholeForm>
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label htmlFor="phone">
            Phone
            <Input type="tel" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </Label>
          <Button type="submit">Add contact</Button>
        </WholeForm>
      </Formik>
    </>
  );
};

export default PhoneBookForm;
