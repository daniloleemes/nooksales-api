import { Module } from '@nestjs/common';
import { ListingsResolver } from './listings.resolver';
import { ListingsService } from './listings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ListingSchema } from './listing.schema'
import { SubscriptionModule } from 'src/subscription/subscription.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Listing', schema: ListingSchema }
    ]),
    SubscriptionModule
  ],
  providers: [ListingsResolver, ListingsService]
})
export class ListingsModule { }
