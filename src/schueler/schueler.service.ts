import { Injectable } from '@nestjs/common';
import { CreateSchuelerDto } from './dto/create-schueler-dto';

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

        if (! student) throw new Error('Schueler not found');

        return student;
    }

    createSchueler(schueler: CreateSchuelerDto) {
        this.students.push(schueler)

        return schueler;
    }
}
