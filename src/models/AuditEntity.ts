import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class AuditEntity extends BaseEntity {
    @CreateDateColumn({
        name: "created_at",
        type: "timestamp"
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "modified_at",
        type: "timestamp",
    })
    modifiedAt: Date;
}