import { Entity, Column, ManyToOne, JoinColumn, RelationId } from "typeorm";
import { User } from "src/users/model/user.entity";
import { QueueStatus } from "./queueStatus.enum";


@Entity()
export class Queue {

    @JoinColumn({ name: 'owner_id' })
    @ManyToOne(type => User, user => user.queues)
    owner: User;

    visitors: User[];

    line: User[];

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
}