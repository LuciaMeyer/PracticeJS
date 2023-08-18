import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'About SEO Title',
    description: 'Esta es la página del about',
    keywords: ['A', 'B', 'O', 'U', 'T']
};

export default function AboutPage() {
    return(
        <>
            <span className='text-7xl'>About Page</span>
        </>
    )
};