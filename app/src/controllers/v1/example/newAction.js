module.exports = (req, res) => { 
    const { body: {message} } = req

    res.apiResponse(
        {
            example: message
        }
    )
};