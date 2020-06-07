module.exports = (req, res) => { 
    const { params } = req

    res.apiResponse({
        id: params.id,
    })
};