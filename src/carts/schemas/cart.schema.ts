import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Cart extends Document {
    @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }] })
    products: string[];

    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: string;

    @Prop({ required: true })
    totalPrice: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
