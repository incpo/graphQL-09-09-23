import {Inter} from 'next/font/google'
import {getCharacters, queryClient} from "@/api";
import {dehydrate, useQuery} from "react-query";
import CharacterCard from "@/components/Character.Card";

const inter = Inter({subsets: ['latin']})

export async function getServerSideProps() {
    await queryClient.prefetchQuery("characters", () => getCharacters())
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export default function Home() {
    const characters = useQuery(["characters"], () => getCharacters())
    return (
        <main
            className={`${inter.className}`}
        >
            <div className='grid gap-3 sm:grid-cols-3'>
                {characters.data?.characters.map((prop, idx) => (
                    <CharacterCard key={idx} character={prop}/>
                ))}
            </div>
        </main>
    )
}
