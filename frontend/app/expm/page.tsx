import React from 'react'
import DataTable from '../components/datatable/DataTable'
import FilterTable from '../components/datatable/FilterTable'
const propFirms = [
  { title: "Firm A", amount: "$50,000",name: "Firm A", fundingAmount: "$50,000", profitSplit: "80/20", tradingPeriod: "30 days", fee: "$500" },
  { title: "Firm A", amount: "$50,000",name: "Firm B", fundingAmount: "$100,000", profitSplit: "70/30", tradingPeriod: "60 days", fee: "$1000" },
  { title: "Firm A", amount: "$50,000",name: "Firm C", fundingAmount: "$250,000", profitSplit: "75/25", tradingPeriod: "45 days", fee: "$1500" },
]
const page = () => {
  return (
    <div>
      <FilterTable/>
      <DataTable column={Object.keys(propFirms[0])} data={propFirms} />
    </div>
  )
}

export default page
