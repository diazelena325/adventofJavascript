import { DateField, Form, Label, Submit, TextField } from '@redwoodjs/forms'

import Checkbox from '../Checkbox/Checkbox'

const EventForm = ({ handleSubmit, loading }) => {
  return (
    <Form onSubmit={handleSubmit} className="auth-form">
      <fieldset disabled={loading}>
        <div className="field">
          <Label name="eventName">Event Name</Label>
          <TextField name="eventName" placeholder="" />
        </div>
        <div className="field">
          <Label name="eventDate">Event Date</Label>
          <DateField name="eventDate" placeholder="" />
        </div>
        <div className="field">
          <Checkbox
            label="Send out a reminder for an event"
            name="eventReminder"
          />
        </div>
        <Submit>Submit</Submit>
      </fieldset>
    </Form>
  )
}

export default EventForm
