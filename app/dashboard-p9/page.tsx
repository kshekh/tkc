import React from 'react'
import LeftSidebar from "@/components/ui/LeftSidebar";
import Header from "./Header";
import AgentEngagement from "./AgentEngagement";
import AutomatedBuildingContent from "./AutomatedBuildingContent";
import ProgramLeads from "./ProgramLeads";
import RecentAgentActivity from "./RecentAgentActivity";
import RecentContentProvided from "./RecentContentProvided";
function DashboardP9() {
  return (
    <>
     <LeftSidebar />
     <div className="flex flex-col pl-12 sm:pl-14 ">
        <Header />
        <div className='p-2 space-y-2'>
          <AgentEngagement />
          <AutomatedBuildingContent />
          <ProgramLeads />
          <RecentAgentActivity />
          <RecentContentProvided />
        </div>
     </div>
    </>
  )
}

export default DashboardP9
