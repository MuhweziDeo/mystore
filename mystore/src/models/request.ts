import { BaseEntity, User } from "@medusajs/medusa";
import { Column, Entity, JoinTable, OneToOne } from "typeorm";

@Entity()
export class Request extends BaseEntity {
  @Column({ nullable: true })
  link: string;

  @Column()
  state: string;

  @OneToOne(() => User)
  @JoinTable()
  user: User;
}
