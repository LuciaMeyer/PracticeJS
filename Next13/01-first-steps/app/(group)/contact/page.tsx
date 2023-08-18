import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Contact SEO Title',
    description: 'Esta es la página de contacto',
    keywords: ['C', 'O', 'N', 'T', 'A', 'C', 'T']
}

export default function ContactPage() {
    return(
        <>
            <span className='text-7xl'>Contact Page</span>
        </>
    )
};