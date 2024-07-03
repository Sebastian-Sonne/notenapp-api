import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchuelerDto } from './dto/create-schueler-dto';
import { UpdateSchuelerDto } from './dto/update-schueler-dto';

@Injectable()
export class SchuelerService {

    private students = [
        {
          "name": "Ryan Mcleod",
          "id": 836777,
          "email": "ryanmcleod@magnina.com",
          "writtenGrades": [
            1,
            2,
            3,
            3,
            5,
            2,
            3
          ],
          "oralGrades": [
            6,
            4,
            5,
            5,
            4,
            5,
            3
          ]
        },
        {
          "name": "Maude Morrow",
          "id": 7753650,
          "email": "maudemorrow@magnina.com",
          "writtenGrades": [
            2,
            1,
            3,
            1,
            1,
            3,
            4
          ],
          "oralGrades": [
            2,
            5,
            6,
            2,
            3,
            3,
            6
          ]
        },
        {
          "name": "Lorna Forbes",
          "id": 54652,
          "email": "lornaforbes@magnina.com",
          "writtenGrades": [
            5,
            2,
            5,
            6,
            4,
            5,
            4
          ],
          "oralGrades": [
            4,
            5,
            6,
            2,
            4,
            2,
            5
          ]
        },
        {
          "name": "Santiago Miranda",
          "id": 6755044,
          "email": "santiagomiranda@magnina.com",
          "writtenGrades": [
            6,
            2,
            2,
            1,
            4,
            1,
            4
          ],
          "oralGrades": [
            4,
            1,
            1,
            6,
            3,
            1,
            1
          ]
        },
        {
          "name": "Lawanda Moses",
          "id": 9911751,
          "email": "lawandamoses@magnina.com",
          "writtenGrades": [
            2,
            4,
            2,
            3,
            5,
            4,
            3
          ],
          "oralGrades": [
            2,
            2,
            5,
            4,
            2,
            6,
            4
          ]
        },
        {
          "name": "Tillman Joyner",
          "id": 7003661,
          "email": "tillmanjoyner@magnina.com",
          "writtenGrades": [
            6,
            2,
            2,
            5,
            3,
            5,
            5
          ],
          "oralGrades": [
            1,
            6,
            6,
            1,
            2,
            2,
            3
          ]
        },
        {
          "name": "Lucia Juarez",
          "id": 6441317,
          "email": "luciajuarez@magnina.com",
          "writtenGrades": [
            1,
            2,
            5,
            3,
            6,
            4,
            4
          ],
          "oralGrades": [
            1,
            5,
            5,
            4,
            1,
            5,
            3
          ]
        },
        {
          "name": "Gilmore Guy",
          "id": 3506762,
          "email": "gilmoreguy@magnina.com",
          "writtenGrades": [
            1,
            6,
            6,
            5,
            1,
            4,
            5
          ],
          "oralGrades": [
            6,
            1,
            6,
            1,
            6,
            4,
            3
          ]
        },
        {
          "name": "Carey Brooks",
          "id": 1092831,
          "email": "careybrooks@magnina.com",
          "writtenGrades": [
            2,
            4,
            2,
            5,
            2,
            2,
            2
          ],
          "oralGrades": [
            3,
            1,
            4,
            1,
            5,
            5,
            2
          ]
        },
        {
          "name": "Marilyn Reed",
          "id": 1785286,
          "email": "marilynreed@magnina.com",
          "writtenGrades": [
            2,
            4,
            5,
            6,
            4,
            1,
            4
          ],
          "oralGrades": [
            5,
            2,
            3,
            5,
            6,
            2,
            4
          ]
        },
        {
          "name": "Erickson Haynes",
          "id": 9002934,
          "email": "ericksonhaynes@magnina.com",
          "writtenGrades": [
            6,
            4,
            5,
            4,
            4,
            1,
            3
          ],
          "oralGrades": [
            3,
            3,
            3,
            5,
            1,
            5,
            6
          ]
        },
        {
          "name": "Lauren Stewart",
          "id": 333935,
          "email": "laurenstewart@magnina.com",
          "writtenGrades": [
            1,
            1,
            6,
            2,
            5,
            2,
            6
          ],
          "oralGrades": [
            4,
            4,
            5,
            6,
            6,
            6,
            4
          ]
        },
        {
          "name": "Marcie Sears",
          "id": 5121581,
          "email": "marciesears@magnina.com",
          "writtenGrades": [
            5,
            6,
            6,
            5,
            1,
            2,
            5
          ],
          "oralGrades": [
            1,
            6,
            2,
            3,
            4,
            2,
            6
          ]
        },
        {
          "name": "Mccullough Ward",
          "id": 8604781,
          "email": "mcculloughward@magnina.com",
          "writtenGrades": [
            6,
            2,
            5,
            1,
            1,
            5,
            5
          ],
          "oralGrades": [
            5,
            5,
            5,
            5,
            5,
            1,
            5
          ]
        },
        {
          "name": "Felecia Conway",
          "id": 2853396,
          "email": "feleciaconway@magnina.com",
          "writtenGrades": [
            3,
            2,
            2,
            3,
            2,
            6,
            2
          ],
          "oralGrades": [
            4,
            5,
            1,
            2,
            3,
            6,
            4
          ]
        },
        {
          "name": "Nina Gill",
          "id": 2892198,
          "email": "ninagill@magnina.com",
          "writtenGrades": [
            1,
            6,
            6,
            5,
            5,
            6,
            2
          ],
          "oralGrades": [
            2,
            1,
            2,
            3,
            4,
            4,
            1
          ]
        },
        {
          "name": "Burch Dotson",
          "id": 6309724,
          "email": "burchdotson@magnina.com",
          "writtenGrades": [
            2,
            1,
            2,
            6,
            5,
            5,
            6
          ],
          "oralGrades": [
            5,
            3,
            3,
            2,
            5,
            5,
            6
          ]
        },
        {
          "name": "Scott Bowers",
          "id": 1608794,
          "email": "scottbowers@magnina.com",
          "writtenGrades": [
            3,
            5,
            5,
            3,
            4,
            4,
            3
          ],
          "oralGrades": [
            5,
            6,
            5,
            5,
            4,
            3,
            3
          ]
        },
        {
          "name": "Moon Mcbride",
          "id": 7794415,
          "email": "moonmcbride@magnina.com",
          "writtenGrades": [
            3,
            4,
            4,
            4,
            3,
            1,
            2
          ],
          "oralGrades": [
            5,
            5,
            6,
            6,
            6,
            6,
            1
          ]
        },
        {
          "name": "Diaz Sosa",
          "id": 6661678,
          "email": "diazsosa@magnina.com",
          "writtenGrades": [
            2,
            5,
            4,
            6,
            3,
            1,
            3
          ],
          "oralGrades": [
            5,
            6,
            5,
            5,
            2,
            2,
            6
          ]
        },
        {
          "name": "Thelma Nunez",
          "id": 6945097,
          "email": "thelmanunez@magnina.com",
          "writtenGrades": [
            3,
            6,
            5,
            5,
            5,
            6,
            1
          ],
          "oralGrades": [
            5,
            3,
            5,
            1,
            6,
            4,
            6
          ]
        },
        {
          "name": "Gallagher Lynch",
          "id": 2526219,
          "email": "gallagherlynch@magnina.com",
          "writtenGrades": [
            3,
            1,
            5,
            6,
            2,
            2,
            4
          ],
          "oralGrades": [
            6,
            6,
            6,
            5,
            2,
            2,
            2
          ]
        },
        {
          "name": "Cathryn Mckay",
          "id": 9632481,
          "email": "cathrynmckay@magnina.com",
          "writtenGrades": [
            5,
            2,
            1,
            1,
            3,
            1,
            3
          ],
          "oralGrades": [
            1,
            6,
            1,
            6,
            3,
            6,
            5
          ]
        },
        {
          "name": "Parks Norris",
          "id": 6431345,
          "email": "parksnorris@magnina.com",
          "writtenGrades": [
            2,
            1,
            3,
            4,
            3,
            1,
            6
          ],
          "oralGrades": [
            2,
            1,
            3,
            2,
            5,
            3,
            3
          ]
        },
        {
          "name": "Oneal Berry",
          "id": 4456585,
          "email": "onealberry@magnina.com",
          "writtenGrades": [
            4,
            1,
            1,
            2,
            3,
            4,
            6
          ],
          "oralGrades": [
            2,
            6,
            6,
            3,
            4,
            1,
            6
          ]
        },
        {
          "name": "Cooke Hoffman",
          "id": 8165237,
          "email": "cookehoffman@magnina.com",
          "writtenGrades": [
            5,
            3,
            5,
            5,
            2,
            5,
            3
          ],
          "oralGrades": [
            6,
            1,
            5,
            1,
            4,
            3,
            3
          ]
        },
        {
          "name": "Gross Buckley",
          "id": 3489000,
          "email": "grossbuckley@magnina.com",
          "writtenGrades": [
            6,
            2,
            1,
            3,
            3,
            2,
            6
          ],
          "oralGrades": [
            2,
            3,
            2,
            2,
            4,
            3,
            4
          ]
        },
        {
          "name": "Rhoda Chandler",
          "id": 4114759,
          "email": "rhodachandler@magnina.com",
          "writtenGrades": [
            3,
            6,
            1,
            5,
            6,
            6,
            2
          ],
          "oralGrades": [
            3,
            4,
            1,
            6,
            1,
            2,
            6
          ]
        },
        {
          "name": "Mendoza Gross",
          "id": 1077270,
          "email": "mendozagross@magnina.com",
          "writtenGrades": [
            6,
            3,
            1,
            4,
            2,
            1,
            1
          ],
          "oralGrades": [
            5,
            5,
            1,
            2,
            1,
            2,
            4
          ]
        },
        {
          "name": "Kelsey Cain",
          "id": 4917879,
          "email": "kelseycain@magnina.com",
          "writtenGrades": [
            1,
            1,
            4,
            2,
            6,
            2,
            3
          ],
          "oralGrades": [
            1,
            5,
            6,
            1,
            6,
            5,
            2
          ]
        }
      ]
    
    getAllSchueler(sort?: 'asc' | 'desc') {
        if (sort) {
            this.students.sort((a, b) => (sort === 'asc') ? a.id - b.id : b.id - a.id);
        }

        return this.students;
    }

    getSchueler(id: number) {
        const student = this.students.find((student) => student.id === id);

        if (! student) throw new Error("Student not Found || DB Error");

        return student;
    }

    createSchueler(schueler: CreateSchuelerDto) {
        this.students.push({
            ...schueler,
            id: Date.now(),
        });

        return schueler;
    }

    updateSchueler(id: number, updateSchuelerDto: UpdateSchuelerDto) {
        this.students = this.students.map((student) => {
            if(student.id === id) {
                return {...student, ...updateSchuelerDto};
            }
            return student;
        });

        return this.getSchueler(id);
    }

    deleteSchueler(id: number) {
        const toBeRemovedStudent = this.getSchueler(id);
        this.students = this.students.filter((student) => student.id !== id);

        return toBeRemovedStudent;
    }
}
