import {Arg, Query, Resolver} from "type-graphql";
import {Character} from "@/graphql/schema/RickAndMorty/characters";
import characters from '@/graphql/schema/RickAndMorty/characters.json'
@Resolver(Character)
export class CharactersResolver {
    @Query(()=> [Character])
    characters(): Character[] {
        return characters
    }

    @Query(()=> Character, {nullable: true})
    character(@Arg("name", ()=> String) name: string): Character | undefined {
        const character = characters.find((person)=> person.name === name)
        if(!character) throw new Error('Character not found');
        return character
    }
}