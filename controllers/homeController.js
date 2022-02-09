exports.index = (req, res) => {
    res.render('home', {
        title: 'DevJobs',
        searchBar: true,
        tagline: 'Remote Freelance Jobs With Top Global Clients',
    });
}