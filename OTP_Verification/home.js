import React from 'react';
import axios from 'axios';
import styles from './styles/home.module.css';
import {useNavigate} from "react-router-dom";
import logo from '../img/home.png'

axios.defaults.withCredentials = true;
function Home() {

const token2 = localStorage.getItem("token");

const postData = {
};

const axiosConfig = {
	headers: {
	'Content-Type':'application/x-www-form-urlencoded',
	'Access-Control-Allow-Origin':'api',
	'APPKEY': 'V0XpSCOFVXiEd2nAuMPdbQcrDdRDPdkbPSV5EU4eEHnM9eMttFh1F7EzaCRMQhmopme3CF5g4WHXVdt3og9kS	',
	'token': token2,
	// "Access-Control-Allow-Origin": "*",
}
};

const Navigate = useNavigate();

	const logout = () => {
		console.log(token2);
		console.log(axiosConfig);
		axios.post('http://192.168.1.18/ULLU/Web/FEB22/api/logout',postData,axiosConfig)
			.then((response) => {
				console.log(response);
				if(response['data']['success']===true)
					{
					alert(response['data']['message']);
					Navigate('/');
					}
					else
					{
					alert(response['data']['message']);
					}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<div className="container">
			<div className={styles}>
			<div className={styles.top}>
				<p>Welcome to Home page</p>
			</div>
			<div className={styles.bottom}>
				<img src={logo} alt="" />
			</div>
			<div className={styles.logoutButton}>
				<button onClick={logout} className={styles.logout}>
					Logout
				</button>
			</div>
		</div>
			</div>
		</div>
	);
}

export default Home;
