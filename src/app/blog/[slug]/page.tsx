import Link from 'next/link'
import React from 'react'
const array = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
]
export default function Blog({ params }: { params: { slug: string } }) {
    const result=array.filter((obj)=>{obj.id==params.slug})
    return (
        <>
            {result[0]?.id}
            <br />
            <Link href={'/'}>GO Back TO HomePage</Link>
        </>

    )
}
