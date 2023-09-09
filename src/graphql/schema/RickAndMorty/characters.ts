import {Field, ID, ObjectType} from "type-graphql";
import {Location} from "@/graphql/schema/RickAndMorty/location";

@ObjectType()
export class Character {
    @Field(() => ID)
    id: number

    @Field(() => String)
    name: string

    @Field(() => String)
    status: string

    @Field(() => String)
    species: string

    @Field(() => String)
    type?: string

    @Field(() => String)
    gender: string

    @Field(() => Location)
    origin: Location

    @Field(() => Location)
    location: Location

    @Field(() => String)
    image: string

    @Field(() => [String])
    episode: string[]

    @Field(() => String)
    url: string

    @Field(() => String)
    created: string
}