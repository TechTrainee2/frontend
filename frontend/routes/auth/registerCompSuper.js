const express = require('express');
const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user";
let { user, loading } = useSelector((state) => state.user);
user = {
  id: "",
};

router.post('/api/users/registerCompSuper', async (req, res) => {
	const { first_name, last_name, email, password, role ,comp_id} = req.body;
  
	const body = JSON.stringify({
	  first_name,
	  last_name,
	  email,
	  password,
	  role,
	  account_type: 'COMPANY_SUPERVISOR', // Assuming this is required
	  comp_id : '', 
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