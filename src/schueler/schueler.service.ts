import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchuelerDto } from './dto/create-schueler-dto';
import { UpdateSchuelerDto } from './dto/update-schueler-dto';

@Injectable()
export class SchuelerService {

    private students = [
        {
            name: 'Marcel',
            id: 123456,
            email: 'marcel@biegel.com',
            writtenGrades: [
                1, 2, 3, 4
            ],
            oralGrades: [
                3, 4, 5, 6
            ],
        },
        {
            name: 'Marcel2',
            id: 123457,
            email: 'marcel@biegel.com',
            writtenGrades: [
                1, 2, 3, 4
            ],
            oralGrades: [
                3, 4, 5, 6
            ],
        },
        {
            name: 'Marcel3',
            id: 123458,
            email: 'marcel@biegel.com',
            writtenGrades: [
                1, 2, 3, 4
            ],
            oralGrades: [
                3, 4, 5, 6
            ],
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
        });

        return this.getSchueler(id);
    }

    deleteSchueler(id: number) {
        const toBeRemovedStudent = this.getSchueler(id);
        this.students = this.students.filter((student) => student.id !== id);

        return toBeRemovedStudent;
    }
}
