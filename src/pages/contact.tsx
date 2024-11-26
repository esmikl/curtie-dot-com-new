import React, { useRef } from "react"
import { Link } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import "../styles/contact.scss"
import Alert from "@mui/material/Alert"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import emailjs from "@emailjs/browser"
import { CircularProgress } from "@mui/material"

const Contact = () => {
    const [errors, setErrors] = React.useState({
        name: false,
        message: false,
        phone: false,
        email: false,
    })

    // Tracks value of the fields
    const [values, setValues] = React.useState({
        name: "",
        message: "",
        phone: "",
        email: "",
        sent: false,
        emailError: false,
        error: "",
        loading: false,
    })

    const form = useRef()

    const handleValidation = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
        name: string,
    ) => {
        const { value } = e.target

        // Set error state for field if no value
        if (!value) {
            setErrors({ ...errors, [name]: true })
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        name: string,
    ) => {
        const { value } = e.target

        setValues({ ...values, [name]: value })

        // Clear error state for field if has value
        if (value) {
            setErrors({ ...errors, [name]: false })
        } else {
            // Field has been touched, so re-trigger error
            setErrors({ ...errors, [name]: true })
        }
    }

    const formSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        setValues({
            ...values,
            loading: true,
        })
        emailjs
            .send(
                process.env.GATSBY_EMAILJS_SERVICE_ID,
                process.env.GATSBY_EMAILJS_TEMPLATE_ID,
                {
                    from_name: values.name,
                    message: values.message,
                    phone: values.phone,
                    email: values.email,
                },
                {
                    publicKey: process.env.GATSBY_EMAILJS_PUBLIC_KEY,
                },
            )
            .then(
                () => {
                    console.log("SUCCESS!")
                    setValues({
                        ...values,
                        sent: true,
                        loading: false,
                    })
                },
                error => {
                    console.log("FAILED...", error)
                    setValues({
                        ...values,
                        error: "Something went wrong. Please try again.",
                        emailError: true,
                        loading: false,
                    })
                },
            )
    }

    return (
        <PrimaryLayout>
            <div className="container contact">
                <h1>Contact</h1>
                <div className={"form-container"}>
                    {values["loading"] && (
                        <div className="loading-spinner">
                            <CircularProgress />
                        </div>
                    )}
                    {values["sent"] && (
                        <Alert severity="success" className={"alert"}>
                            Thank you for contacting us! Curtie will respond
                            soon.
                        </Alert>
                    )}
                    {values["sent"] && (
                        <p>
                            <Link to="/">Go to homepage</Link>
                        </p>
                    )}
                    {values["emailError"] && (
                        <Alert severity="error" className={"alert"}>
                            Oh no! Something went wrong. Please try again later.
                        </Alert>
                    )}
                    {values["sent"] === false && (
                        <form
                            className="contact-form"
                            onSubmit={formSubmit}
                            ref={form}
                        >
                            <Grid container spacing={2} direction={"column"}>
                                <Grid item>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        variant="outlined"
                                        fullWidth
                                        value={values["name"]}
                                        error={errors["name"]}
                                        helperText={
                                            errors["name"] &&
                                            "Please enter your name"
                                        }
                                        onBlur={event =>
                                            handleValidation(event, "name")
                                        }
                                        onChange={event =>
                                            handleChange(event, "name")
                                        }
                                        required
                                        type="text"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="message"
                                        label="Message"
                                        variant="outlined"
                                        multiline
                                        fullWidth
                                        value={values["message"]}
                                        error={errors["message"]}
                                        helperText={
                                            errors["message"] &&
                                            "Please enter a message for Curtie"
                                        }
                                        onBlur={event =>
                                            handleValidation(event, "message")
                                        }
                                        onChange={event =>
                                            handleChange(event, "message")
                                        }
                                        required
                                        type="text"
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="phone"
                                        label="Phone"
                                        variant="outlined"
                                        fullWidth
                                        value={values["phone"]}
                                        error={errors["phone"]}
                                        helperText={
                                            errors["phone"] &&
                                            "Please enter phone number where Curtie can reach you"
                                        }
                                        onBlur={event =>
                                            handleValidation(event, "phone")
                                        }
                                        onChange={event =>
                                            handleChange(event, "phone")
                                        }
                                        required
                                        type="text"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        value={values["email"]}
                                        error={errors["email"]}
                                        helperText={
                                            errors["email"] &&
                                            "Please enter a valid email"
                                        }
                                        onBlur={event =>
                                            handleValidation(event, "email")
                                        }
                                        onChange={event =>
                                            handleChange(event, "email")
                                        }
                                        required
                                        type="text"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                className={"submit-button"}
                            >
                                Submit
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </PrimaryLayout>
    )
}

export default Contact
