const Vacancy = require("../models/Vacancy");


exports.index = (req, res) => {
    res.send('vacancies/index');
}
exports.create = (req, res) => {
    res.render('vacancies/create', {
        title: 'Create Vacancy',
        tagline: 'Create a new vacancy',
    });
}
exports.store = (req, res) => {
    //const vacancy = new Vacancy
}