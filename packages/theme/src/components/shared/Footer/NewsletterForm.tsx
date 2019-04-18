import { Component } from 'react'

export type NewsletterFormChildArgugment = {
  // [TODO]: the onSubmit should be handled by a <form> element
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onSubmit: (e: React.SyntheticEvent) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  submitText: string
}

type NewsletterFormProps = {
  children: (arg: NewsletterFormChildArgugment) => React.ReactChild
}

type NewsletterFormState = {
  sending: boolean
  success: boolean
  email: string
}

export default class NewsletterForm extends Component<NewsletterFormProps, NewsletterFormState> {
  state = {
    sending: false,
    success: false,
    email: '',
  }
  render() {
    const text = this.state.sending ? 'Sending...' : this.state.success ? 'Joined!' : 'Join'
    return this.props.children({
      onSubmit: this.submit,
      onChange: this.handleChange,
      onKeyDown: this.keyDown,
      submitText: text,
    })
  }
  keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      this.submit(e)
    }
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value })
  }
  submit = (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault()
    const { email } = this.state
    if (validateEmail(email)) {
      this.setState({ sending: true })
      const formdata = new FormData()
      formdata.append('EMAIL', email)
      return alert('pressed')

      fetch('https://coo.us14.list-manage.com/subscribe/post?u=dbacf466dc6e90901d8936391&amp;id=a3c923dab7', {
        method: 'POST',
        body: formdata,
      })
        .then(res => res.text())
        .then(() => {
          this.setState({
            sending: false,
            success: true,
          })
        })
        .catch(() => {
          this.setState({
            sending: false,
            success: true,
          })
        })
    }
  }
}

function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.toLowerCase())
}
