import React, { useState, useEffect } from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

function BookingForm(props) {
  // Destructure props
  const { carwash } = props;

  // Use state to store form data
  const [formData, setFormData] = useState({
    customerEmail: '',
    carwashName: carwash.name,
    serviceDescription: '',
    startTime: '',
    endTime: ''
  });

  // Use effect to populate serviceDescription options
  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      serviceDescription: carwash.services[0]
    }));
  }, []);

  // Function to handle form input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Send form data to the backend
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label="Email">
        <Input
          type="email"
          name="customerEmail"
          value={formData.customerEmail}
          onChange={handleChange}
          required
        />
      </Form.Item>
      <Form.Item label="Carwash Name">
        <Input
          type="text"
          name="carwashName"
          value={formData.carwashName}
          onChange={handleChange}
          required
          disabled
        />
      </Form.Item>
      <Form.Item label="Service Description">
        <Select
          name="serviceDescription"
          value={formData.serviceDescription}
          onChange={handleChange}
          required
        >
          {carwash.services.map(service => (
            <Option key={service} value={service}>
              {service}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Start Time">
        <Input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
        />
      </Form.Item>
      <Form.Item label="End Time">
        <Input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          required
        />
      </Form.Item>
      <Form.Item>
        <button type="submit">Book Now</button>
      </Form.Item>
    </Form>
  );
}

export default BookingForm;
