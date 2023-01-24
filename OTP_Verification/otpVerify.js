import React, { useState } from 'react';
import styles from './styles/style.module.css';
import axios from 'axios';
// import ReactSession from 'react-client-session';
import {useNavigate} from "react-router-dom"

function OtpVerify(props) {
	axios.defaults.withCredentials = true;
// const { tokenHandleChange } = props;
	const [ error ] = useState({
		error: '',
		success: ''
	});
	const { value, handleChange } = props;
	const back = (e) => {
		e.preventDefault();
		props.prevStep();
	};

	const Navigate = useNavigate();

	const params = new URLSearchParams();
	const confirmOtp = (e) => {

		params.append("otp_hash", value.hash);
		params.append("otp", value.otp);

		axios
			.post('http://192.168.1.18/ULLU/Web/FEB22/api/verfyOtp', params,
			{
			 headers: {
			 'Content-Type': 'application/x-www-form-urlencoded'
		 }
	 },
		)
			.then(function(res) {
				const token1 = res['data']['data'].token;
				localStorage.setItem('token',token1);
				// console.log(token1);
				// console.log(res.data);
				if(res['data']['success']===true)
				  {
					alert(res['data']['message']);
					Navigate('Home');
				  }
				  else
				  {
					alert(res['data']['message']);
				  }
			  }, (error) => {
				console.log(error);
			  })
			e.preventDefault();
			props.nextStep();
	};
	return (
		<div className={styles}>
			<div className={styles.background}>
				<div className={styles.container}>
					<div className={styles.heading}>Mobile Number Verification</div>
					<div className={styles.error}>{error.error}</div>
					<div className={styles.success}>{error.success}</div>
					<div className={styles.input_text}>Enter One Time Password:</div>
					<div className={styles.input_container}>
						<input
							type="tel"
							value={value.otp}
							onChange={handleChange('otp')}
							placeholder="Enter Your OTP"
							className={styles.input}
						/>
					</div>
					<button onClick={back} className={styles.back}>
						BACK
					</button>
					<button onClick={confirmOtp} className={styles.submit}>
						CONFIRM OTP
					</button>
				</div>
			</div>
		</div>
	);
}

export default OtpVerify;
