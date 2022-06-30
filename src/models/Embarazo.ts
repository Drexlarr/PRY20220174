import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { EmbarazoHistorico } from "./EmbarazoHistorico";
import { Usuario } from "./Usuario";

@Entity("embarazos")
export class Embarazo extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: "emb_codigo",
        type: "int",
    })
    embCodigo: number;

    @ManyToOne((type) => Usuario, (usuario) => usuario.embarazos)
    @JoinColumn({ name: "usr_codigo" })
    usuario: Usuario;

    @ManyToOne((type) => Usuario, (obstetra) => obstetra.embarazos)
    @JoinColumn({ name: "emb_codigo_obstetra" })
    obstetra: Usuario;

    @OneToMany((type) => EmbarazoHistorico, (embarazoHistorico) => embarazoHistorico.embarazo)
    embarazosHistoricos: EmbarazoHistorico[];

    @UpdateDateColumn({
        name: "emb_fechaModif",
        type: "timestamp",
    })
    embFechaModif: Date;

    @Column({
        name: "emb_peso",
        type: "numeric",
        precision: 5,
    })
    embPeso: number;

    @Column({
        name: "emb_presionArterial",
        type: "numeric",
        precision: 5,
    })
    embPresionArterial: number;

    @Column({
        name: "emb_numSemana",
        type: "numeric",
        precision: 2,
    })
    embNumSemana: number;

    @Column({
        name: "emb_estado",
        type: "numeric",
        precision: 1,
    })
    embEstado: number;
}
