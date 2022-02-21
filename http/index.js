module.exports = async(req, res) => {
    res.json({
        status: "OK",
        avaliable_https: fs.readdirSync('/'),
        author: "https://github.com/phaticusthiccy"
    })
}