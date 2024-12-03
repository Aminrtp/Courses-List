import React from 'react'

function CourseCardFooter({ course }) {
    return (
        <div>
            <div className="course-item__footer">
                <div className="tags">{

                    course.tags.map((tag) => <span key={tag} className="badge badge--secondary">{tag}</span>)
                }
                </div>
                <div className="caption">
                    <div className='date'>{new Date(course.start).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                        day: "numeric",
                    })}</div>
                    <span className={`badge ${course.status === 'Active' ? "badge--primary" : 
                        course.status === 'Upcoming' ? "badge--danger":"badge--secondary"
                    }`}>{course.status}</span>

                </div>
            </div>
        </div>
    )
}

export default CourseCardFooter