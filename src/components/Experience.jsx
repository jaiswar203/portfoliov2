import React from 'react'
import { experience } from '../../db/data'
import { useState } from 'react'
import { GiBroadheadArrow } from 'react-icons/gi'


const Experience = () => {
    const [selected, setSelected] = useState(experience[0])
    return (
        <div className="jais-port__experience">
            <div className="jais-port__experience-title">
                <div className="stroke__title">
                    <h1>Experience</h1>
                </div>
                <div className="detail">
                    <h1>Where I&apos;ve Worked</h1>
                </div>
            </div>
            <div className="jais-port__experience-content">
                <div className="left__outer">

                    <div className="left">
                        {
                            experience.map(obj => (
                                <div className={`left__btn ${obj.id === selected.id ? "active" : ""}`} key={obj.id} onClick={() => setSelected(obj)}>
                                    <h2>{obj.company}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="right__title">
                        <h1>{selected.role}</h1>
                        <h1 className='highlight'>@{selected.company}</h1>
                    </div>
                    <h3 className="right__date">{selected.date}</h3>
                    <div className="right__point">
                        {selected.detail.map(text => (
                            <div className="point" key={text}>
                                <GiBroadheadArrow style={{ rotate: "-45deg" }} size={18} color='#ef233c' />
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience