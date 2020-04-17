import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectiblesModule } from './collectibles/collectibles.module';
import { ListingsModule } from './listings/listings.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nooksales', { useNewUrlParser: true, useUnifiedTopology: true }),
    CollectiblesModule,
    ListingsModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
