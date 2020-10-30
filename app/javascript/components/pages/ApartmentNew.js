import React from "react"
import {
    Button,
    Form, 
    FormGroup,
    Input,
    Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                street: "",
                city: "",
                state: "",
                manager: "",
                email: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets: "", 
                user_id: this.props.current_user.id
            },
            success: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createNewApartment(this.state.form)
        this.setState({ success: true })
    }

    render () {
        return (
        <React.Fragment>
            <h3>Add New Apartment</h3>
            <Form className="form">
                <FormGroup>
                    <Label for="street">Street: </Label>
                    <Input
                        type="text"
                        name="street"
                        onChange={ this.handleChange }
                        value= { this.state.form.street } />
                </FormGroup>
                <FormGroup>
                    <Label for="city">City: </Label>
                    <Input 
                        type="text"
                        name="city"
                        onChange={ this.handleChange }
                        value= { this.state.form.city } />
                </FormGroup>
                <FormGroup>
                    <Label for="state">State: </Label>
                    <Input 
                        type="text"
                        name="state"
                        onChange={ this.handleChange }
                        value= { this.state.form.state } />
                </FormGroup>
                <FormGroup>
                    <Label for="manager">Manager: </Label>
                    <Input 
                        type="text"
                        name="manager"
                        onChange={ this.handleChange }
                        value= { this.state.form.manager } />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Manager's Email: </Label>
                    <Input 
                        type="text"
                        name="email"
                        onChange={ this.handleChange }
                        value= { this.state.form.email } />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price: </Label>
                    <Input 
                        type="number"
                        name="price"
                        onChange={ this.handleChange }
                        value= { this.state.form.price } />
                </FormGroup>
                <FormGroup>
                    <Label for="bedrooms">Bedrooms: </Label>
                    <Input 
                        type="number"
                        name="bedrooms"
                        onChange={ this.handleChange }
                        value= {this.state.form.bedrooms} />
                </FormGroup>
                <FormGroup>
                    <Label for="bathrooms">Bathrooms: </Label>
                    <Input 
                        type="number"
                        name="bathrooms"
                        onChange={ this.handleChange }
                        value= { this.state.form.bathrooms } />
                </FormGroup>
                <FormGroup>
                    <Label for="pets">Pets Allowed: </Label>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="pets"
                                value="yes"
                                checked={ this.state.form.pets === "yes" }
                                onChange={ this.handleChange }
                            />
                            Yes
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="pets"
                                value="no"
                                checked={ this.state.form.pets === "no" }
                                onChange={ this.handleChange }
                            />
                            No
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button
                    className="submit-new-button"
                    name="submit"
                    onClick={ this.handleSubmit }
                >
                    Submit a New Apartment
                </Button>
            </Form>
            { this.state.success &&
                <Redirect to="/myapartmentindex" /> }
        </React.Fragment>
        )
    }
}

export default ApartmentNew