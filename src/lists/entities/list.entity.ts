import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ListItem } from '../../list-item/entities/list-item.entity';
import { Column, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../../users/entities/user.entity';

@Entity({ name: 'list' })
@ObjectType()
export class List {

  @PrimaryGeneratedColumn('uuid')
  @Field( () => ID )
  id: string;

  @Column({ nullable: false})
  @Field( () => String, { nullable: false })
  name: string;

  // Relation index(userId-list-index)
  @ManyToOne( () => User, (user) => user.lists, { nullable: false, lazy: true })
  @Index('userId-list-index')
  @Field( () => User )
  user: User;

  @OneToMany( () => ListItem, (listItem) => listItem.list, { lazy: true } )
  @Field( () => [ListItem])
  listItem: ListItem[];
}
