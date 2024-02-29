import '../static/css/LoginModal.css';
import { useRef, useState } from 'react';
import Dropdown from './Dropdown';


function LoginModal({ loginFormRef, setIsLogin, setUser }) {
    const [formData, setFormData] = useState({
        email: '',
        confirm: '',
        username: '',
        brand: '',
        prefer: '',
        specifiedPrefer: ''
    });
    const [formErrors, setFormErrors] = useState({
        email: '',
        confirm: '',
        username: ''
    });

    const submitRef = useRef(null);

    const updateForm = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    const isValidEmail = (email) => /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);

    const validateField = (fieldName, value) => {
        let error = '';

        switch (fieldName) {
            case 'email':
            case 'confirm':
                if (!value) {
                    error = `${fieldName} field is required`;
                } else if (!isValidEmail(value)) {
                    error = `Please enter a valid ${fieldName}`;
                } else if (fieldName === 'confirm' && value !== formData.email) {
                    error = 'Confirm field should match the Email field';
                }
                break;
            case 'username':
                if (!value) {
                    error = 'Username field is required';
                } else if (value.length > 15) {
                    error = 'Username must be less than 16 characters';
                }
                break;
            default:
                break;
        }

        setFormErrors({ ...formErrors, [fieldName]: error });
        return !error;
    };

    const validateOnBlur = (e) => {
        validateField(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.keys(formData).every((key) => validateField(key, formData[key]));

        if (isValid) {
            submitRef.current.showModal();
            loginFormRef.current.close();
            setIsLogin(true);
            setUser(formData);
        }
    };

    return (
        <>
            <dialog className="modal" ref={loginFormRef} aria-label="register form">
                <p className="modal-title">Register Now</p>
                <form className="modal-form" onSubmit={handleSubmit}>
                    {['email', 'confirm', 'username'].map((field) => (
                        <div key={field} className={`register-${field}`} aria-label={`${field} item`}>
                            <label>
                                <span>{field.charAt(0).toUpperCase() + field.slice(1)}:</span>
                                <span className="modal-text-italic"> * required</span>
                                <input
                                    className={`register-${field}-input`}
                                    onChange={(e) => updateForm(field, e.target.value)}
                                    onBlur={validateOnBlur}
                                    value={formData[field]}
                                    name={field}
                                    placeholder={`Please enter your ${field}`}
                                />
                            </label>
                            <span className={`register-${field}-error`}>{formErrors[field]}</span>
                        </div>
                    ))}
                    <Dropdown />

                    <div className="register-button">
                        <button className="register-submit" type="submit" aria-label="submit button">
                            Register
                        </button>
                        <button
                            className="register-close"
                            type="button"
                            onClick={() => loginFormRef.current.close()}
                            aria-label="close button"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </dialog>
            <dialog className="modal-success" ref={submitRef}>
                <p>REGISTERED SUCCESSFULLY!!!</p>
                <button onClick={() => submitRef.current.close()}>Close</button>
            </dialog>
        </>
    );
}

export default LoginModal;
