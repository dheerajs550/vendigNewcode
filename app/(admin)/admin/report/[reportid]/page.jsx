import React from 'react'

const ReportId = async (props) =>{
    const ReportIdData = props.params.reportid;
    console.log("Report ID:", ReportIdData);
  return (
    <>
    <h1>{ReportIdData}</h1>
    </>
  )
}

export default ReportId