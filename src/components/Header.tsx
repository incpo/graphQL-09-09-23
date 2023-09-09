import React from 'react';
import Link from "next/link";
import {Icons} from "@/components/icons";

const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center py-3'>
                <Link className='text-2xl font-medium p-2 ' href='/'>Poký Cards</Link>
                <div>
                    <Link
                        className='space-x-2 items-center flex h-9 px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded'
                        href='https://github.com/incpo/graphQL-pokemon-cards'>
                        <span>GitHub</span>
                        <Icons.code className='w-5 h-5'/>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;