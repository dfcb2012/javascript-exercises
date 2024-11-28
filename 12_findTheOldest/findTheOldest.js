const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldestPerson, person) => {
    const personYear = person.yearOfDeath || currentYear;
    const personAge = personYear - person.yearOfBirth;

    const oldestPersonYear = oldestPerson.yearOfDeath || currentYear;
    const oldestPersonAge = oldestPersonYear - oldestPerson.yearOfBirth;

    return personAge > oldestPersonAge ? person : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
