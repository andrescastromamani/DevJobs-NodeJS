exports.index = (req, res) => {
    res.send('vacancies/index');
}
exports.create = (req, res) => {
    res.render('vacancies/create', {
        title: 'Create Vacancy',
        tagline: 'Create a new vacancy',
    });
}