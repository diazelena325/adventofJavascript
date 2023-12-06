import {
  CheckboxField,
  DateField,
  Form,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import Checkbox from 'src/components/Checkbox/Checkbox'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const NewEventPage = () => {
  const handleSubmit = (data) => {
    console.log({ data })
  }
  return (
    <>
      <MetaTags title="Set up your event" />
      <HeaderWithRulers
        className="mb-8 text-white"
        heading="SET UP YOUR EVENT"
      />

      <Form onSubmit={handleSubmit} className="auth-form">
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
      </Form>
    </>
  )
}

export default NewEventPage
