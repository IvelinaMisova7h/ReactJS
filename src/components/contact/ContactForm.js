import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';


const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)


const ContactForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
      <div className="col"
        style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      >
         
        <form style={{ background: 'sky', color: 'white'}} onSubmit={handleSubmit}>
            <Field name="firstname" type="text"
                component={renderField} label="First name"
                validate={[ required, maxLength15 ]}
            />
            <Field name="lastname" type="text"
                component={renderField} label="Last name"
                validate={[ required, maxLength15 ]}
            />
            <Field name="email" type="email"
                component={renderField} label="Email"
                validate={email}
                warn={aol}
            />
            <Field name="age" type="number"
                component={renderField} label="Age"
                validate={[ required, number, minValue18 ]}
                warn={tooOld}
            />
            <Field name="message" type="textarea"
                component={renderField} label="Message"
                validate={[ required ]}
                warn={tooOld}
            />

                <Button color="success" type="submit" disabled={submitting}>Submit</Button>
                <Button color="warning" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
        </form>
    </div>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(ContactForm)

