import { Entity, Column, ManyToOne, JoinColumn, RelationId, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/model/user.entity";
import { QueueStatus } from "./queueStatus.enum";
import { ObjectType, Field, ID } from "@nestjs/graphql";
import { hashids } from "src/shared/utils";

@ObjectType()
@Entity()
export class Queue {

    private _hashId: string;

    @PrimaryGeneratedColumn()
    id: number;

    @JoinColumn({ name: 'owner_id' })
    @ManyToOne(type => User, user => user.queues)
    owner: User;

    @OneToMany(type => User, user => user.visitingQueue)
    visitors: User[];

    @ManyToMany(type => User, user => user.awaitingFor)
    awaitingUsers: User[];

    @Column('enum', { enum: QueueStatus, array: false })
    status: QueueStatus;

    @Column()
    description: string;

    @Column()
    maxQueueSize: number;

    @Column()
    maxVisitors: number;

    @Column()
    price: number;

    @Column({ default: false })
    selfManageable: boolean;

    @RelationId((queue: Queue) => queue.owner)
    ownerId: number;

    @Field(() => ID, { name: 'id' })
    get hashId(): string {
        if (!this._hashId) {
            this._hashId = hashids.encode(this.id);
        }
        return this._hashId;
    }
}