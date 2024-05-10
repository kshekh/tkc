import Link from "next/link";
import React from "react";
import Icon from "@/components/ui/Icon";
const filterTab = [
    {
        label:'All',
        action:'#',        
        active:true,      
    },
    {
        label:'1 month',
        action:'#',        
        active:false,      
    },
    {
        label:'3 month',
        action:'#',        
        active:false,      
    },
    {
        label:'1 year',
        action:'#',        
        active:false,      
    },
    {
        label:'Custom',
        action:'#',        
        active:false,      
    },
]
const cartSteps = [
     'Jan',
     'Feb',
     'Mar',
     'Apr',
     'May',
]

function AgentEngagement() {
  return (
    <>
      <section className="relative bg-white rounded-md p-5">
        <h2 className="sr-only">Agent Engagment</h2>
        <div className="flex gap-5 flex-wrap lg:flex-nowrap justify-between">
          <div className="space-y-5 flex flex-col max-w-60 xl:max-w-full">
            <div className="space-y-2 flex-1">
              <p className="xl:text-lg text-black/30 font-semibold text-left uppercase">
                free condo Advisor website & content
              </p>
              <h3 className="text-2xl xl:text-4xl text-primary font-light">
                Agent
                <br />
                Engagment
              </h3>
            </div>
            <div className="flex justify-between gap-2">
              <div className="space-y-3">
                <p className="xl:text-xl font-semibold text-black/80 leading-none">
                  Active Agents
                </p>
                <p className="text-3xl xl:text-5xl font-bold text-primary leading-none">
                  832
                </p>
              </div>
              <div className="space-y-3">
                <p className="xl:text-xl font-semibold text-black/80 leading-none">
                  Content Provided
                </p>
                <p className="text-3xl xl:text-5xl font-bold text-primary leading-none">
                  12,426
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full lg:max-w-xs xl:max-w-md">
            <div className="flex gap-2 flex-wrap items-center justify-between">
                {filterTab.map((item, index)=>(
                <button key={index} className={`font-bold whitespace-nowrap font-montserrat text-sm p-2 2xl:px-4 rounded hover:text-black/70 hover:bg-gray-500/5 ease-in-out duration-200 ${item.active ? 'text-black/70 bg-gray-500/5' : 'text-black/50'}`}>{item.label}</button>
                ))}
            </div>
            {/* chart goes here */}
            <div className="overflow-hidden">
                <Icon name="chart-line"  color="var(--primary)" className="w-ful" stroke="transparent" />
            </div>
            <div className="flex gap-3 flex-wrap">
                {cartSteps.map((item, index)=>(
                <p key={index} className="font-bold font-montserrat text-sm py-2 px-4 rounded text-black/70 bg-gray-500/5 flex-1 text-center">{item}</p>
                ))}
            </div>
          </div>
          <div className="flex flex-col w-full lg:max-w-60 xl:max-w-lg">
            <div className="bg-primary rounded-t-md text-white/70 py-2 px-4 uppercase font-montserrat font-bold ">
              broker & Agent websites
            </div>
            <div className="border border-black/20 border-t-0 rounded-b-md bg-white p-4 flex flex-col gap-5 divide-y divide-black/20">
              <div className="space-y-1 font-montserrat">
                <p className="text-black/60 font-semibold text-sm xl:text-base text-left uppercase leading-none">
                  branded condo advisor Website
                </p>
                <p className="text-xl 2xl:text-3xl font-semibold text-black/70 leading-tight font-sans">
                  condos.keyes.com
                </p>
                <div className="flex flex-wrap gap-3 leading-none">
                  <Link
                    href="#"
                    className="underline text-sm xl:text-base font-montserrat font-medium text-black/60 hover:text-primary ease-in-out duration-200 "
                  >
                    Preview
                  </Link>
                  <Link
                    href="#"
                    className="underline text-sm xl:text-base font-montserrat font-medium text-black/60 hover:text-primary ease-in-out duration-200"
                  >
                    Customize
                  </Link>
                  <Link
                    href="#"
                    className="underline text-sm xl:text-base font-montserrat font-medium text-primary ease-in-out duration-200"
                  >
                    Add Custom Domain
                  </Link>
                </div>
              </div>
              <div className="space-y-1 font-montserrat pt-5">
                <p className="text-black/60 font-semibold text-sm xl:text-base text-left uppercase leading-none">
                building selection for content program
                </p>
                <p className="text-xl 2xl:text-3xl font-semibold text-black/70 leading-tight font-sans">
                condos.keyes.com/agents
                </p>
                <div className="flex flex-wrap gap-3 leading-none">
                  <Link
                    href="#"
                    className="underline text-sm xl:text-base font-montserrat font-medium text-black/60 hover:text-primary ease-in-out duration-200"
                  >
                    Preview
                  </Link>
                
                  <Link
                    href="#"
                    className="underline text-sm xl:text-base font-montserrat font-medium text-primary ease-in-out duration-200"
                  >
                    Add Custom Domain
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AgentEngagement;
