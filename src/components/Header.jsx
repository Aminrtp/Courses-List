import React from 'react'
const courseStatus = ["All", "Active", "Completed", "Upcoming"];

function Header({ children }) {
    return (
        <div>
            <div className='course-search'>
                <h1 >My Courses (3)</h1>
                {children}
            </div>
            <div className="course-status">
                {
                    courseStatus.map(s => <div key={s}>{s}</div>)
                }
            </div>

        </div>
    )
}

export default Header