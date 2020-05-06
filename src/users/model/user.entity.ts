import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, ManyToMany, RelationId, ManyToOne, JoinColumn } from "typeorm";
import { ObjectType, Field, ID } from "@nestjs/graphql";
import * as bcrypt from 'bcryptjs';
import { hashids } from "src/shared/utils";
import { Queue } from "src/queues/model/queue.entity";

@ObjectType()
@Entity()
export class User {

    private _hashId: string;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    discordId: string;

    @Column()
    nintendoFriendCode: string;

    @Column()
    twitter: string;

    @Column()
    password: string;

    @OneToMany(type => Queue, queue => queue.owner)
    queues: Queue[];

    @JoinColumn({ name: 'visiting_queue_id' })
    @ManyToOne(type => Queue, queue => queue.visitors)
    visitingQueue: Queue;

    @ManyToMany(type => Queue, queue => queue.awaitingUsers)
    awaitingFor: Queue[];

    @RelationId((user: User) => user.visitingQueue)
    visitingQueueId: number;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 12);
    }

    @Field(() => ID, { name: 'id' })
    get hashId(): string {
        if (!this._hashId) {
            this._hashId = hashids.encode(this.id);
        }
        return this._hashId;
    }
}