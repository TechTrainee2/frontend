const express = require('express');
const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.post('/api/users/register', async (req, res) => {
	const { name, email, comp_id, password } = req.body;

	const body = JSON.stringify({
		'name':name, 
		'email':email,
		'comp_id':comp_id,
		'password':password,
		'account_type':'COMPANY',
	});

	try {
		const apiRes = await fetch(`${process.env.API_URL}/users/customUser`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body,
		});

		const data = await apiRes.json();

		return res.status(apiRes.status).json(data);
	} catch (err) {
		return res.status(500).json({
			error: 'Something went wrong when registering account',
		});
	}
});

module.exports = router;