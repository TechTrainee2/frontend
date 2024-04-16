const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cookie = require('cookie');


router.post('/api/users/login', async (req, res) => {
    const { email, password } = req.body
    const body = JSON.stringify({email, password})

    try {
        const loginRes = await fetch(`http://localhost:8000/api/token/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body,
            mode:'cors',
			credentials: 'include'
        })

        const data = await loginRes.json()

        if (loginRes.status == 200){
		
			res.cookie('access', `${data.access}`, {
				maxAge: 60 * 60 * 24*1000, // 1 day in seconds
				httpOnly: true,
				secure: false, // Set to true if using HTTPS
				sameSite: 'lax', // Adjust as needed
                path: "/api"
			});
			res.cookie('refresh', data.refresh, {
				maxAge: 60 * 60 * 24*1000, // 1 day in seconds
				httpOnly: true,
				secure: false, // Set to true if using HTTPS
				sameSite: 'lax', // Adjust as needed
                path: "/api"

			});

            return res.status(200).json({
                success:'Logged in successfuly', 
            })
        } else {
            return res.status(loginRes.status).json(data);
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            
            error:'Something went wrong when logging in'
        })

    }
})



module.exports = router