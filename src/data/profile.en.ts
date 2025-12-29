export const profileCode = `const developer = {
  nickName: 'Max0709202',
  fullNameL: 'Noriaki Nishida',
  birthDate: new Date(1995, 05, 09) // May 9, 1995
  role: 'Full-Stack Developer',
  location: 'Tottori, Japan',
  experience: '7+ years',
  email: 'passionmax22@gmail.com',
  availability: 'Open to opportunities, Remote work preferred',
  hardWorker: true,
  quickLearning: true,
  problemSolver: true,
  preferredLanguages: LANGUAGES.JAPANESE, LANGUAGES.ENGLISH,
  hireable: function() {
    return this.hardWorker&&
    this.problemSolver&&
    this.skills.length>=5 &&
    this.availability === 'Open to opportunities, Remote work preferred';
},
  connect: function() {
    return "Let's build something amazing together!";
  }
};`;

export const profileTitle = 'developer.js';
