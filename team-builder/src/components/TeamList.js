import React from "react";

const TeamList = props =>{

    return (
        <div>
            {props.teamData.map((member, index)=>{
                return (
                    <div className="teamCard" key={index}>
                        <h2>{member.name}</h2>
                        <h4>Email: {member.email}</h4>
                        <h4>Role: {member.role}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamList;