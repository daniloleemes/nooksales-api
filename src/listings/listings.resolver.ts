import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { ListingsService } from './listings.service';
import { CreateListingInput } from './dto/listing.input';
import { ListingType } from './models/listing-type.model';
import { CurrentUser } from 'src/users/user.decorator';
import { User } from 'src/users/interface/user.interface';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver('Listings')
export class ListingsResolver {
    constructor(private readonly listingsService: ListingsService) {}

    @Mutation(() => ListingType)
    @UseGuards(GqlAuthGuard)
    async createListing(@Args('input') input: CreateListingInput, @CurrentUser() user: User): Promise<ListingType> {
        return await this.listingsService.create(input, user);
    }

    @Query(() => [ListingType])
    async listings(): Promise<ListingType[]> {
        return await this.listingsService.findAll();
    }
}
