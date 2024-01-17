import { DateField, Form, Label, Submit, TextField } from '@redwoodjs/forms'

import { formatDateFromDbForInput } from 'src/helpers/dateHelpers'

import Checkbox from '../Checkbox/Checkbox'

interface EventFormProps {
  buttonLabel?: string
  defaultValues?: {
    eventName?: string
    eventDate?: string
    eventReminder?: boolean
  }
  handleSubmit: (data) => void
  loading?: boolean
}

const EventForm = ({
  buttonLabel = 'Submit',
  defaultValues = {},
  handleSubmit,
  loading,
}: EventFormProps) => {
  return (
    <Form onSubmit={handleSubmit} className="auth-form">
      <fieldset disabled={loading}>
        <div className="field">
          <Label name="eventName">Event Name</Label>
          <TextField
            name="eventName"
            placeholder=""
            defaultValue={defaultValues?.eventName}
          />
        </div>
        <div className="field">
          <Label name="eventDate">Event Date</Label>
          <DateField
            name="eventDate"
            placeholder=""
            defaultValue={formatDateFromDbForInput(defaultValues?.eventDate)}
          />
        </div>
        <div className="field">
          <Checkbox
            defaultChecked={defaultValues?.eventReminder}
            label="Send out a reminder for an event"
            name="eventReminder"
          />
        </div>
        <Submit>{buttonLabel}</Submit>
      </fieldset>
    </Form>
  )
}

export default EventForm
