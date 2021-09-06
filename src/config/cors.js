module.exports = function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-control-Allow-Methods', 'GET, POST, OPTOPNS, PUT, PATCH, DELETE')    
    res.header('Access-control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept')
    next()
}