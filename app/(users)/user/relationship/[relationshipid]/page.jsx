import React from 'react'

const Relationship = async (props) => {
    const RelationshipData = await props.params.relationshipid;
return (
    <>
    <h1>{RelationshipData}</h1>
    </>
  )
}
export default Relationship