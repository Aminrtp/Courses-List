import CourseCardBody from "./CourseCardBody"
import CourseCardFooter from "./CourseCardFooter"


function CourseCard({ course }) {
    return (
        <div className="course-item">
            <div className="course-item__img">
                <img src={course.imageUrl} alt={course.title} />
            </div>
            <div className="course-item__detail">
                <CourseCardBody
                    title={course.title}
                    description={course.description}
                    rate={course.rate}
                />
                <CourseCardFooter course={course} />
            </div>
        </div>

    )
}

export default CourseCard