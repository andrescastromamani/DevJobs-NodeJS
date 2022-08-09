document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelector('#knowledges');
    if (skills) {
        skills.addEventListener('click', addSkill);
    }
})
const skills = new Set();
const addSkill = (e) => {
    if (e.target.tagName === 'LI') {
        if (e.target.classList.contains('active')) {
            skills.delete(e.target.textContent);
            e.target.classList.remove('active');
        } else {
            skills.add(e.target.textContent);
            e.target.classList.add('active');
        }
    }
}