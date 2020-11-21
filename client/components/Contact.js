import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {init, sendForm} from 'emailjs-com'
init('user_GifAIRMYb8H5rmuXPFOY1')

export default function Contact() {
  const {register, handleSubmit, watch, errors} = useForm()
  const message = watch('Message') || ''
  const messageCharsLeft = 1500 - message.length
  const onSubmit = (data) => {
    console.log(data)
    sendForm('default_service', 'template_tqx66ko', '#contact-form').then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  }
  return (
    <div id="contactTitle" data-aos="fade-up" className="aos-init aos-animate">
      <h1>Contact</h1>
      <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          {errors.user_name && errors.user_name.type === 'required' && (
            <div role="alert">
              Name is required
              <br />
            </div>
          )}
          <Form.Control
            name="user_name"
            placeholder="Firstname & Surname"
            required="required"
            aria-invalid={errors.user_name ? 'true' : 'false'}
            ref={register({required: true})}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            placeholder="name@example.com"
            required="required"
            ref={register}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Message"
            name="Message"
            rows={5}
            required="required"
            ref={register}
            maxLength="1500"
          />
          <p className="message-chars-left">{messageCharsLeft}</p>
        </Form.Group>
        <div className="btn-box">
          <Button variant="primary" type="submit" className="btn btn-submit">
            Submit
            <img src="/sendit.png" />
          </Button>
        </div>
      </Form>
    </div>
  )
}
