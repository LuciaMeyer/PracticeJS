import { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Pricing SEO Title',
    description: 'Esta es la página de precios',
    keywords: ['P', 'R', 'I', 'C', 'I', 'N', 'G']
}

export default function PricingPage() {
    return(
        <>
            <span className='text-7xl'>Pricing Page</span>
        </>
    )
};