exports.index = (req, res) => {
    res.render('home', {
        title: 'DevJobs',
        searchBar: false,
        tagline: 'Remote Freelance Jobs With Top Global Clients',
    });
}