import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectiblesModule } from './collectibles/collectibles.module';
import { ListingsModule } from './listings/listings.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { QueuesModule } from './queues/queues.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      context: ({ req, res }) => ({ req, res })
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nooksales', { useNewUrlParser: true, useUnifiedTopology: true }),
    CollectiblesModule,
    ListingsModule,
    UsersModule,
    AuthModule,
    QueuesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
