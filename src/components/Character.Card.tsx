import React from 'react';
import {Character} from "@/graphql/schema/RickAndMorty/characters";
import Image from "next/image";
import Link from "next/link";

interface CharacterCardProps {
    character: Omit<Character, 'id' | 'episode' | 'origin' | 'species' | 'gender' | 'location' | 'url' | 'created'>
}

const CharacterCard: React.FunctionComponent<CharacterCardProps> = ({character}) => {
    return (
        <Link href={`/character/${character.name}`}>
            <article className='group flex flex-col space-y-2 cursor-pointer border-secondary p-2 rounded border'>
                <div className='overflow-hidden relative aspect-square rounded border-b border-secondary'>
                    <Image
                        className='group-hover:scale-105 group-hover:brightness-100 brightness-95 transition-all'
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        src={character.image}
                        alt={character.name}
                    />
                </div>
                <div>
                    <h2 className='text-xl'>{character.name}</h2>
                    <p>Status: {character.status}</p>
                </div>
            </article>
        </Link>
    );
};

export default CharacterCard;