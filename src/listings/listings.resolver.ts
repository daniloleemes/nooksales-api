import { Resolver, Args, Mutation, Query, Subscription, Parent, ResolveField } from '@nestjs/graphql';
import { ListingsService } from './listings.service';
import { CreateListingInput } from './dto/listing.input';
import { ListingType } from './models/listing-type.model';
import { CurrentUser } from 'src/users/user.decorator';
import { User } from 'src/users/interface/user.interface';
import { UseGuards, Inject } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionTypes } from 'src/subscription/subscription.enum';

@Resolver('Listings')
export class ListingsResolver {
    constructor(
        private readonly listingsService: ListingsService,
        @Inject('PUB_SUB') private readonly pubSub: PubSub
    ) { }

    @Mutation(() => ListingType)
    @UseGuards(GqlAuthGuard)
    async createListing(@Args('input') input: CreateListingInput, @CurrentUser() user: User): Promise<ListingType> {
        const newListing = await this.listingsService.create(input, user);
        this.listingsService.aggregateListingType(newListing.id, (listing) => this.pubSub.publish(SubscriptionTypes.LISTINGS_UPDATED, listing));
        return newListing;
    }

    @Query(() => [ListingType])
    async listings(): Promise<ListingType[]> {
        return await this.listingsService.findAll();
    }

    @Subscription(() => ListingType, {
        resolve: value => {
            value.id = value.id || value._id
            return value
        },
    })
    listingsUpdated() {
        return this.pubSub.asyncIterator(SubscriptionTypes.LISTINGS_UPDATED);
    }
}
