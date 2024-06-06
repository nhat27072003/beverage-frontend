import React from 'react'
import './updateUser.css'


const UpdateUser = () => {
  return (
    <div className='update-user'>
      <div class="container">
        <h1>Edit Your Information</h1>
        <form>
          <div class="form-row">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="John Doe" />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" placeholder="example@example.com" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="123-456-7890" />
            </div>
            <div class="form-group">
              <label for="dob">Date of Birth</label>
              <input type="text" id="dob" placeholder="dd/mm/yy" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="address">Address</label>
              <input type="text" id="address" placeholder="123 Street, City, Country" />
            </div>
            <div class="form-group">
              <label for="profilePicture">Profile Picture</label>
              <input type="text" id="profilePicture" placeholder="" />
            </div>
          </div>
          <button type="submit" class="btn" disabled>Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser