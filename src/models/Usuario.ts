import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AuditEntity } from "./AuditEntity";

@Entity('usuarios')
export class Usuario extends AuditEntity {
    @PrimaryGeneratedColumn({
        name: "usr_codigo",
        type: "int"
    })
    usrCodigo: number

    @Column({
        name: "usr_nombre",
        type: "varchar",
        length: 50
    })
    usrNombre: string;

    @Column({
        name: "usr_type",
        type: "numeric",
        precision: 2
    })
    usrType: number;

    @Column({
        name: "usr_correo",
        type: "varchar",
        length: 60
    })
    usrCorreo: string;

    @Column({
        name: "usr_nacimiento",
        type: "datetime"
    })
    usrNacimiento: Date;

    @Column({
        name: "usr_codcolegiatura",
        type: "numeric",
        precision: 5
    })
    usrCodColegiatura: number;

    @Column({
        name: "usr_psswd",
        type: "varchar",
        length: 20
    })
    usrPsswd: string;
}