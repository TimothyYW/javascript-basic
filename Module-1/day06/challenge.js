/*exercise 1*/

class StudentData{
    name;
    email;
    birthdate;
    score;

    constructor(_name,_email,_birthdate,_score){
        this.name = _name;
        this.email = _email;
        this.birthdate = _birthdate;
        this.score = _score;
    }

    convertBirthDateToAge(){
        // '2000-01-10'
        return new Date().getFullYear()-new Date(this.birthdate).getFullYear();
    }
};

const students = [
    new StudentData('Immanuel Janis', 'immanuel@gmail.com', '2000-05-20', 80),
    new StudentData('Aviawan', 'avi@gmail.com', '1995-12-10',75),
    new StudentData('Mawar Bunga', 'mawar@gmail.com', '1997-10-01',100),
];

function CalculateStudentData(arrStudents){
    const arrStudentsScore = [];
    const arrStudentsAge = [];

    for ( let item of arrStudents){
        arrStudentsScore?.push(item?.score);
        arrStudentsAge?.push(item?.convertBirthDateToAge());
    }

    return {
        score : {
            highest: Math.max(...arrStudentsScore),
            lowest: Math.min(...arrStudentsScore),
            average:
            arrStudentsScore.reduce(
                (accumulator, currentValue) => accumulator+ currentValue,0
            ) / arrStudentsScore.length,
        },
        age: {
            highest: Math.max(...arrStudentsAge),
            lowest: Math.min(...arrStudentsAge),
            average:
                arrStudentsAge.reduce(
                    (accumulator,currentValue) => accumulator + currentValue,
                    0
                ) / arrStudentsAge.length,
        }
    }
    
}

console.log(CalculateStudentData(students));