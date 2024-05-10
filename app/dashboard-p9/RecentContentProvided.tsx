import React from 'react'
import Image from 'next/image'
const datatable = [
    {
        created: 'Dec 23, 2023',
        agent: [
            { thumb: '/images/avatar-3.png', name: 'Tom Cook' }
        ],
        office: 'Aventura',
        product: 'Condo Website',
        social: [
            '/images/social-1.png', '/images/social-2.png'
        ],
        articles: [
            '/images/social-3.png', '/images/social-4.png', '/images/social-5.png'
        ],
        alerts: [
            '/images/social-holder-1.svg',  '/images/social-holder-1.svg', '/images/social-holder-2.svg'
        ],
    },
    {
        created: 'Dec 23, 2023',
        agent: [
            { thumb: '/images/avatar-2.png', name: 'Courtney Henry' }
        ],
        office: 'Aventura',
        product: 'Beach House 8',
        social: [
            '/images/social-1.png', '/images/social-2.png'
        ],
        articles: [
            '/images/social-3.png', '/images/social-4.png', '/images/social-5.png'
        ],
        alerts: [
            '/images/social-6.png', '/images/social-7.png', '/images/social-8.png'
        ],
    },
]

function RecentContentProvided() {
    return (
        <>
            <section className="relative bg-white rounded-md p-5">
                <h2 className="sr-only">Recent Content Provided</h2>
                <div className='flex gap-5 flex-col sm:flex-row flex-wrap justify-between items-center'>
                    <div className="space-y-2 flex-1 w-full sm:w-auto sm:max-w-sm">
                        <p className="xl:text-lg text-black/30 font-semibold text-left uppercase">
                            content
                        </p>
                        <h3 className="text-2xl xl:text-4xl text-primary font-light capitalize">
                            Recent Content provided
                        </h3>
                    </div>
                    <button className={`font-bold font-montserrat text-sm py-2 px-4 xl:px-10 rounded border bordr-black/10 bg-white hover:bg-black/5 text-black/80 ease-in-out duration-200`}>View Templates</button>
                </div>

                <div className='max-w-full overflow-auto on-hover-scroll'>
                    <div className='min-w-[1100px] pt-5'>
                        <table className='w-full divide-y divide-gray-200 font-inter'>
                            <thead>
                                <tr>
                                    <th className='text-left font-inter py-2'>Created</th>
                                    <th className='text-left font-inter py-2'>Agent</th>
                                    <th className='text-left font-inter py-2'>Office</th>
                                    <th className='text-left font-inter py-2'>Product</th>
                                    <th className='text-left font-inter py-2'>Social</th>
                                    <th className='text-left font-inter py-2'>Articles</th>
                                    <th className='text-left font-inter py-2'>Alerts</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-200 '>
                                {datatable.map((item, index) => (
                                    <tr key={index}>
                                        <td className='py-4 text-gray-400'>{item.created}</td>
                                        <td className='py-4'>{item.agent.map((item) => (<div key={index} className='flex gap-4'>
                                            <Image src={item.thumb} alt="" width={20} height={20} className='shrink-0 w-8 h-8' />
                                            <h3>{item.name}</h3>
                                        </div>))}</td>
                                        <td className='py-4 text-gray-400'>{item.office}</td>
                                        <td className='py-4 text-gray-400'>{item.product}</td>
                                        <td className='py-4'>
                                            <div className='flex gap-4 items-start'>
                                                {item.social.map((item, index) => (
                                                    <Image key={index} src={item} alt="" width={40} height={60} className='w-10 h-auto' />
                                                ))}
                                            </div>
                                        </td>
                                        <td className='py-4'><div className='flex gap-4 items-start'>
                                                {item.articles.map((item, index) => (
                                                    <Image key={index} src={item} alt="" width={40} height={60} className='w-10 h-auto' />
                                                ))}
                                            </div></td>
                                        <td className='py-4'><div className='flex gap-4 items-start'>
                                                {item.alerts.map((item, index) => (
                                                    <Image key={index} src={item} alt="" width={40} height={60} className='w-10 h-auto' />
                                                ))}
                                            </div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>


        </>
    )
}

export default RecentContentProvided
