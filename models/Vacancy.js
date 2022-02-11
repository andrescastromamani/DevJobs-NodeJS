const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('slug');
const shortid = require('shortid');

const VacancySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: String,
        trim: true,
        default: 'Negotiable'
    },
    contract: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        lowercase: true,
    },
    skills: [String],
    candidates: [{
        name: String,
        email: String,
        cv: String,
    }],
});

VacancySchema.pre('save', function (next) {
    const url = slug(this.title);
    this.url = `${url}-${shortid.generate()}`;
    next();
})

module.exports = mongoose.model('Vacancy', VacancySchema);
