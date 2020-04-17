import { Module } from '@nestjs/common';
import { ListingsResolver } from './listings.resolver';
import { ListingsService } from './listings.service';

@Module({
  providers: [ListingsResolver, ListingsService]
})
export class ListingsModule {}
