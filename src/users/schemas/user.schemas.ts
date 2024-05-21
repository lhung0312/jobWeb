import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { hashSync } from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true, set: (value: string) => hashSync(value, 10) })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
