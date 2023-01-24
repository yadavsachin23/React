import React, { useState } from 'react';
import PhoneInput from './phoneInput';
import OtpVerify from './otpVerify';
const StepForm = (validate) => {

	const [ state, setState ] = useState({
		phone: '',
		hash: '',
		otp: '',
		token1:''
	});

	const [setErrors] = useState({});
	const [step, setStep] = useState(1)
	const [setIsSubmitting] = useState(false);

	const handleChange = (input) => (e) => {
		setState({...state, [input]: e.target.value });
	};
	const hashHandleChange = (hash) => {
		setState({...state, hash : hash})
	}
	const tokenHandleChange = (token1) => {
		setState({...state, token1 : token1})
	}
	const nextStep = () => {

		setStep(prevStep => prevStep + 1)
	};


	const handleSubmit = e => {
		e.preventDefault();

		setErrors(validate(value));
		setIsSubmitting(true);
	  };

	const prevStep = () => {

		setStep(prevStep => prevStep - 1)
	};

	const { phone, hash, otp ,token1 } = state;
	const value = { phone, hash, otp ,token1 };

	switch (step) {
		case 1:
			return <PhoneInput nextStep={nextStep} handleSubmit={handleSubmit} hashHandleChange={hashHandleChange} tokenHandleChange={tokenHandleChange} handleChange={handleChange} value={value} />;
		case 2:
            return <OtpVerify nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} value={value} />;
        default:
            return <PhoneInput nextStep={nextStep} handleChange={handleChange} value={value} />

    }
};

export default StepForm;
