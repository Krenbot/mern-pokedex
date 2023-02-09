const jwt = require('jsonwebtoken')

const secret = 'gottacatchemall'
const expiration = '2hr'

module.exports = {
    signToken: function ({ email, username, _id }) {
        return jwt.sign(
            { data: { email, username, _id } },
            secret,
            { expiresIn: expiration }
        )
    },
    authMiddleware: function ({ req, res }) {
        let token = req.body.token || req.query.token || req.headers.authorization

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim()
        }

        if (!token) {
            return req
        }

        try {
            const { data } = jwt.verify(token, secret, { expiresIn: expiration })
            req.user = data
            return req
        } catch (err) {
            console.log('Invalid token')
        }
    }
}