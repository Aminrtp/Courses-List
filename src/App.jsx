import './App.css'

function App() {

  return (
    <div>
      <h1>My Courses (3)</h1>
      <div className='course-item'>
        <div className="course-item__img">
          <img src="../public/images/img1.jpg" alt="" />
        </div>
        <div className="course-item__detail">
          <div className="course-item__body">
            <div>
              <p className="title">English Lecture</p>
              <p className="desc">language lessons with the most popular teachers</p>
            </div>
            <span className="rate"> ⭐️ 4 </span>
          </div>
          <div className="course-item__footer">
            <div className="tags">
              <span className="badge badge--secondary">React.js</span>
            </div>
            <div className="caption">
                <div className='date'>Aug 2, 2021</div>
                <span className='badge badge--primary'>completed</span>      
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App;
