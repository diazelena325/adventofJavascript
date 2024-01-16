import {
  CheckboxField,
  DateField,
  Form,
  Label,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Checkbox from 'src/components/Checkbox/Checkbox'
import EventForm from 'src/components/EventForm/EventForm'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const CREATE_EVENT_MUTATION = gql`
  mutation createEventMutation(
    $name: String!
    $date: DateTime!
    $sendReminder: Boolean!
  ) {
    createEvent(
      input: { name: $name, date: $date, sendReminder: $sendReminder }
    ) {
      id
      name
      date
      createdAt
    }
  }
`
const NewEventPage = () => {
  const [createEvent, { loading }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: (data) => {
      toast.success('Event was sucessfully created')
      navigate(routes.groupInvite({ id: data.createEvent.id }))
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
  })

  const handleSubmit = (data) => {
    console.log({ data })
    createEvent({
      variables: {
        name: data.eventName,
        date: data.eventDate,
        sendReminder: data.eventReminder,
      },
    })
  }
  return (
    <div className="auth-form">
      <MetaTags title="Set up your event" />
      <HeaderWithRulers
        className="mb-8 text-white"
        heading="SET UP YOUR EVENT"
      />
      <EventForm handleSubmit={handleSubmit} loading={loading} />
    </div>
  )
}

export default NewEventPage
