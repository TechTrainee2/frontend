const express = require('express');
const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();


router.post('/api/users/registerCompSuper', async (req, res) => {
	const { first_name, last_name, email, password, role } = req.body;
  
	const body = JSON.stringify({
	  first_name,
	  last_name,
	  email,
	  password,
	  role,
	  account_type: 'COMPANY_SUPERVISOR', // Assuming this is required
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