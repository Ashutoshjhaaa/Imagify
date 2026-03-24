import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    
    console.log('=== Auth Middleware Debug ===')
    console.log('Token from headers:', token)

    if (!token) {
        console.log('No token found in headers')
        return res.json({ success: false, message: 'Not Authorized.Login Again' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', tokenDecode)

        if (tokenDecode.id) {
            req.userId = tokenDecode.id;
            console.log('User ID set to:', req.userId)
        } else {
            console.log('No ID found in decoded token')
            return res.json({ success: false, message: 'Not Authorized.Login Again' });
        }
        next();
    } catch (error) {
        console.log('Token verification error:', error.message)
        res.json({ success: false, message: error.message });
    }
};

export default userAuth;