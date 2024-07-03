import { Injectable } from '@nestjs/common';

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
}
