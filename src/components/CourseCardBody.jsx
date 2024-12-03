import React from 'react'

function CourseCardBody({title , description , rate}) {
    return (
        <div>
            <div className="course-item__body">
                <div>
                    <p className="title">{title}</p>
                    <p className="desc">{description}</p>
                </div>
                <span className="rate"> ⭐️ {rate} </span>
            </div>
        </div>
    )
}

export default CourseCardBody