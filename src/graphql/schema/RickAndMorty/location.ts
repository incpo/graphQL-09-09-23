import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class Location {
    @Field(()=> String)
    name: string

    @Field(()=> String)
    url: string
}