const findTheOldest = function(people) {

    function compareAge(a, b) {
        let currentYear = new Date().getFullYear();

        function getAge(person) {
            let yearOfDeath = (person.yearOfDeath) ? person.yearOfDeath : currentYear;
            return yearOfDeath - person.yearOfBirth;
        }

        if (getAge(a) > getAge(b)) return -1;

        if (getAge(a) < getAge(b)) return 1;

        return 0;

    }

    people.sort( compareAge );

    console.log(people);

    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
