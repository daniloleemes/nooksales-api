import { Resolver, Query, Args } from '@nestjs/graphql';
import { CollectiblesService } from './collectibles.service';
import { CollectibleType } from './models/collectible-type.model';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/users/user.decorator';
import { User } from 'src/users/interface/user.interface';

@Resolver('Collectibles')
export class CollectiblesResolver {
    constructor(private readonly collectiblesService: CollectiblesService) {}

    @Query(() => [CollectibleType])
    @UseGuards(GqlAuthGuard)
    async collectibles(@CurrentUser() user: User): Promise<CollectibleType[]> {
        return this.collectiblesService.findAll();
    }

    @Query(() => CollectibleType)
    async oneCollectible(@Args('id') id: string): Promise<CollectibleType> {
        return this.collectiblesService.findOne(id);
    }
}
