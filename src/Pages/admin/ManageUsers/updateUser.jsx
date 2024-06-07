import React, { useState } from 'react'
import './updateUser.css'
import { useParams } from 'react-router-dom'
import { getDetailUser } from '../../../services/manageUsers';



const UpdateUser = () => {
  const userID = useParams().userId;
  console.log(userID);
  const [user, setUser] = useState({});

  const getUser = async () => {
    const result = await getDetailUser(userID);
    setUser(result.DT);
  }
  getUser();
  return (
    <>
      <div className='update-user'>
        <div className="container">
          <h1>Edit Your Information</h1>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label for="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" placeholder="example@example.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label for="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="123-456-7890" />
              </div>
              <div className="form-group">
                <label for="dob">Date of Birth</label>
                <input type="text" id="dob" placeholder="dd/mm/yy" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" placeholder="123 Street, City, Country" />
              </div>
              <div className="form-group">
                <label for="profilePicture">Profile Picture</label>
                <input type="text" id="profilePicture" placeholder="" />
              </div>
            </div>
            <button type="submit" className="btn" disabled>Save Changes</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateUser