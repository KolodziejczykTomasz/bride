import React, { Component } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem 3rem;
`;

const FormWarpper = styled.div`
  padding: 30px 50px;
`;

const Input = styled.input`
  display: block;
  margin: 2rem auto;
  width: 70%;
  height: 4rem;
  margin-bottom: 20px;
  padding: 7px 7px;
  @media (min-width: 600px) {
    width: 95%;
    padding: 7px 2px;
  }
  @media (max-width: 600px) {
    width: 95%;
    padding: 7px 7px;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1224px) {
    width: 70%;
  }
`;

const Textarea = styled.textarea`
  display: block;
  margin: 0 auto;
  width: 70%;
  height: auto;
  min-height: 80px;
  margin-bottom: 10px;
  padding: 7px 7px;
  font-family: Arial, Helvetica, sans-serif;
  @media (min-width: 600px) {
    width: 95%;
    padding: 7px 2px;
  }
  @media (max-width: 600px) {
    width: 95%;
    padding: 7px 7px;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1224px) {
    width: 70%;
  }
`;

const Button = styled.button`
  display: block;
  width: 170px;
  padding: 10px 10px;
  margin: 50px auto;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  background-color: white;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    border-bottom: 4px solid black;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  padding-left: 10rem;
  margin-bottom: 2rem;
`;

class Form extends Component {
  state = {
    name: '',
    phone: '',
    subject: '',
    email: '',
    message: '',
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    return (
      <Wrapper>
        <FormWarpper>
          <Formik
            initialValues={{ name: '', phone: '', subject: '', email: '', message: '' }}
            validate={(values) => {
              const errors = {};

              if (!values.email) {
                errors.email = '';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = <ErrorMessage>Podaj poprawny adres email</ErrorMessage>;
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  type="name"
                  name="name"
                  placeholder="Imię"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                {errors.name && touched.name && errors.name}
                {values.name === '' ? <ErrorMessage>*Pole obowiązkowe</ErrorMessage> : null}

                <Input
                  type="subject"
                  name="subject"
                  placeholder="Temat"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                />

                {errors.subject && touched.subject && errors.subject}

                <Input
                  type="phone"
                  name="phone"
                  placeholder="Telefon"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />

                {errors.phone && touched.phone && errors.phone}

                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                {errors.email && touched.email && errors.email}
                {values.email === '' ? <ErrorMessage>*Pole obowiązkowe</ErrorMessage> : null}
                <Textarea
                  type="message"
                  name="message"
                  placeholder="Treść Wiadomości"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />

                {errors.message && touched.message && errors.message}
                {values.message === '' ? <ErrorMessage>*Pole obowiązkowe</ErrorMessage> : null}
                <Button type="submit" disabled={isSubmitting} onClick={this.handleChange}>
                  Wyślij
                </Button>
              </form>
            )}
          </Formik>
        </FormWarpper>
      </Wrapper>
    );
  }
}

export default Form;
