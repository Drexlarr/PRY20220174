import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Embarazo } from "./Embarazo";
import { Usuario } from "./Usuario";

@Entity("embarazos_historicos")
export class EmbarazoHistorico extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: "embH_regcodigo",
        type: "int",
    })
    embHRegCodigo: number;

    @ManyToOne((type) => Embarazo, (embarazo) => embarazo.embarazosHistoricos)
    @JoinColumn({ name: "emb_codigo" })
    embarazo: Embarazo;

    @UpdateDateColumn({
        name: "embH_fechaModif",
        type: "timestamp",
    })
    embHFechaModif: Date;

    @Column({
        name: "embH_peso",
        type: "numeric",
        precision: 5,
    })
    embHPeso: number;

    @Column({
        name: "embH_presionArterial",
        type: "numeric",
        precision: 5,
    })
    embHPresionArterial: number;

    @Column({
        name: "embH_numSemana",
        type: "numeric",
        precision: 2,
    })
    embHNumSemana: number;
}
