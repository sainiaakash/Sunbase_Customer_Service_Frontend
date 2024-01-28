import React, { useState } from 'react';
import '../styles/saveCustomer.css';

const AddNewCustomer = () => {
    const initFormState = {
        firstName: '',
        lastName: '',
        street: '',
        address: '',
        city: '',
        state: '',
        email: '',
        phone: '',
    };
    const [formData, setFormData] = useState({...initFormState});
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const saveCustomer = async (event) => {
        event.preventDefault();
        const { firstName, lastName, street, address, city, state, email, phone } = formData;
    
        // Add logic to save customer data or perform other actions
        try{
            const response = await fetch(`http://localhost:8080/saveCustomer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });
            if(!response.ok){
                throw new Error(`Error while saving data ${response.statusText}`);
            }
            setFormData(initFormState);
        }catch(error){
            console.error('Error while saving data: ',error.st);
        }

        setShowSuccessModal(true);

        // After a delay, hide the success modal and reset the form data
        setTimeout(() => {
        setShowSuccessModal(false);
        }, 3000); // Adjust the delay as needed
        
    };
    const inputFields = [
        'firstName', 'lastName', 'street', 'address', 'city', 'state', 'email', 'phone'
      ];

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value,
        }));
    }
    
    return (
        <div className='main-container'>
            <section className="form-section">
                <div className='auth-content'>
                    <h1>Add New Customer</h1>
                    <form onSubmit={saveCustomer} id='dataForm'>
                        {inputFields.map((field,index)=> (
                            <div className='form-field'>
                                <input
                                    key={index}
                                    type="text"
                                    id={field}
                                    name={field}
                                    value={formData[`${field}`]}
                                    placeholder={field}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        ))}
                        <button type='submit' className='submit-btn'>Submit</button>
                    </form>
                    {showSuccessModal && (
                        <div className="success-modal">
                        <p>Record saved successfully!</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default AddNewCustomer;
