import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ItemsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nooksales')
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
