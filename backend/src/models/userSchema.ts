import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {

  @Prop({
    type: String,
    required: true
  })
  name: string;

  @Prop({
    type: String,
    required: true
  })
  email: string;

  @Prop({
    type: String,
    required: true
  })
  password: string;

  @Prop({
    type: String,
    required: false
  })
  image: string;

  @Prop({
    type: Boolean,
    default: false
  })
  isBlocked: boolean;

  @Prop({
    type: Boolean,
    default: false
  })
  isTrep: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);