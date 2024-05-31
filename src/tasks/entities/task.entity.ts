import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    summary: string;

    @Column({ default: false })
    isChecked: boolean;

    @DeleteDateColumn()
    deletedAt: Date;
}
