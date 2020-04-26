import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CollectiblesModule } from './collectibles/collectibles.module';
import { ListingsModule } from './listings/listings.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { QueuesModule } from './queues/queues.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from './logger/logger.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      context: ({ req, res }) => ({ req, res })
    }),
    TypeOrmModule.forRoot(),
    CollectiblesModule,
    ListingsModule,
    UsersModule,
    AuthModule,
    QueuesModule,
    LoggerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
