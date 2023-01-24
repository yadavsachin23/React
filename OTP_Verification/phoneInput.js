import React from 'react';
import styles from './styles/style.module.css';
import axios from 'axios';

function PhoneInput(props) {

	const { value, handleChange, handleSubmit ,hashHandleChange } = props;

	const params = new URLSearchParams();

	const getData = (e) => {

		params.append("mobile", value.phone);

		axios
			.post('http://192.168.1.18/ULLU/Web/FEB22/api/sendOtp', params,
			 {
			 	headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
			 }
			)
			  .then((response) => {
					// console.log(response);
				const hash = response['data']['data'].otp_hash;
				hashHandleChange(hash);
				if(response['data']['success']===true)
				  {
					alert(response['data']['message']);
				  }
				  else
				  {
					alert(response['data']['message']);
				  }
			  }, (error) => {
				console.log(error);
			  });

		e.preventDefault();
		props.nextStep();
	};

	return (
		<div className={styles}>
			<div className={styles.background}>
			<form onSubmit={handleSubmit} className="form" noValidate>
				<div className={styles.container}>
					<div className={styles.heading}>Mobile Number Verification</div>
					<div className={styles.input_text}>Phone number:</div>
					<div className={styles.input_container}>
						<input
							type="tel"
							name='phone'
							value={value.phone}
							onChange={handleChange('phone')}
							placeholder="Enter Your Mobile No."
							className={styles.input}
							// className="inputTag"
							required
						/>
					</div>
					<button onClick={getData} className={styles.submit}>
						SEND OTP
					</button>
				</div>
				</form>
			</div>
		</div>
	);
}

export default PhoneInput;
