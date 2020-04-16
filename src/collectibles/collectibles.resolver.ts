import { Resolver, Query, Args } from '@nestjs/graphql';
import { CollectiblesService } from './collectibles.service';
import { CollectibleType } from './models/collectible-type.model';

@Resolver('Collectibles')
export class CollectiblesResolver {
    constructor(private readonly collectiblesService: CollectiblesService) {}

    @Query(() => [CollectibleType])
    async collectibles(): Promise<CollectibleType[]> {
        return this.collectiblesService.findAll();
    }

    @Query(() => CollectibleType)
    async oneCollectible(@Args('id') id: string): Promise<CollectibleType> {
        return this.collectiblesService.findOne(id);
    }
}
