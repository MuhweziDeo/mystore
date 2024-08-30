import { BaseEntity, User } from "@medusajs/medusa";
import { Column, Entity, JoinTable, OneToOne } from "typeorm";
import { Request } from "./request";

@Entity()
export class Quote extends BaseEntity {
  @OneToOne(() => Request)
  @JoinTable()
  request: Request;

  @Column()
  amount: string;

  @Column({ nullable: true })
  state: string;
}
