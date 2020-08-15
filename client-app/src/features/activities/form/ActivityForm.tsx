import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

export const ActivityForm = () => {
    return (
        <Segment>
            <Form>
                <Form.Input placeholder='Title'/>
                <Form.TextArea rows={2} placeholder='Description'/>
                <Form.Input placeholder='Category'/>
                <Form.Input input='date' placeholder='Date'/>
                <Form.Input placeholder='City'/>  
                <Form.Input placeholder='Venue'/>            
            </Form>
        </Segment>
    )
}
