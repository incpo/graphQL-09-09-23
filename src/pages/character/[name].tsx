import React from 'react';
import {getCharacterByName, queryClient} from "@/api";
import {dehydrate, useQuery} from "react-query";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/Button";
import {Icons} from "@/components/icons";
import {useRouter} from "next/router";

export async function getServerSideProps({params}) {
    await queryClient.prefetchQuery('character', () => getCharacterByName({name: params.name}))

    return {
        props: {
            name: params.name,
            dehydratedState: dehydrate(queryClient)
        }
    }
}

const Character = ({name}: { name: string }) => {
    const {data} = useQuery('character', () => getCharacterByName({name}))
    const router = useRouter();
    const character = data?.character

    if (character) {
        return (
            <main className='grid gap-3 sm:gap-16 sm:grid-cols-2'>
                <div className='relative aspect-square'>
                    <Image fill src={character.image} alt={character.name}/>
                </div>
                <div className='relative text-lg flex flex-col space-y-2'>
                    <p>Name: <span>{character.name}</span></p>
                    <p>Status: {character.status}</p>
                    <p>Gender: {character.gender}</p>
                    {character.type && (
                        <p>Type: {character.type}</p>
                    )}
                    <p>Origin: <Link href={character.origin.url}>{character.origin.name}</Link></p>
                    <p>Location: <Link href={character.location.url}>{character.location.name}</Link></p>
                    <p>Created at: {new Date(character.created).toDateString()}</p>
                    <div className='flex'>
                        <Button onClick={() => void router.back()} variant='secondary' className='space-x-3'>
                            <Icons.goBack className='w-4 h-4'/>
                            <span>Go back</span>
                        </Button>
                    </div>
                    <div className='absolute select-none bg-white/10 px-3 py-0.5 right-0 rounded '>
                        <p>{character.species}</p>
                    </div>
                </div>
            </main>
        );
    }
};
export default Character;