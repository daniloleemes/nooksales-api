import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectiblesModule } from './collectibles/collectibles.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nooksales', { useNewUrlParser: true, useUnifiedTopology: true }),
    CollectiblesModule,
    ItemsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
