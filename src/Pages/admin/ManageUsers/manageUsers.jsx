import React, { useEffect, useState } from 'react';
import './manageUsers.css';
import ReactPaginate from 'react-paginate';
import { getUsers } from '../../../services/manageUsers';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const limit = 7;

  const fetchUsers = async (page) => {
    try {
      const response = await getUsers(page, limit);
      if (response.EC === 0) {
        setItems(response.DT.users);
        setPageCount(response.DT.totalPage);
      } else {
        alert(response.EM);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handlePageClick = (event) => {
    console.log(event);
    setCurrentPage(event.selected + 1);
  };

  const Items = ({ items }) => (
    <div >
      {items && (
        <div class="container">
          <h1>User Management</h1>
          <div class="top-bar">
            <input type="text" placeholder="Search Users" id="search" />
            <button id="searchButton" disabled>Search</button>
            <button id="addButton" disabled>Add User</button>
          </div>
          <div class="main-content">
            <div class="filter-section">
              <h2>Filter Users</h2>
              <div class="filter-group">
                <label for="role">Role:</label>
                <select id="role">
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div class="filter-group">
                <label for="status">Status:</label>
                <select id="status">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <button id="filterButton" disabled>Apply Filters</button>

            </div>
            <div class="user-table">
              <table>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((u) => (
                    <tr key={u.username}>
                      <td>{u.username}</td>
                      <td>{u.email}</td>
                      <td>{u.address}</td>
                      <td>{u.phone}</td>
                      <td>{u.role}</td>
                      <td>
                        <Link to={`/admin/updateuser`}><button onClick={() => { }}><i class='bx bx-edit'></i></button></Link>
                        <button><i class='bx bx-trash'></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {/* <div className="items">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((u) => (
                <tr key={u.username}>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.address}</td>
                  <td>{u.phone}</td>
                  <td>{u.role}</td>
                  <td>
                    <Link to={`/admin/updateuser`}><button onClick={() => { }}><i class='bx bx-edit'></i></button></Link>
                    <button><i class='bx bx-trash'></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>  */}
    </div>
  );

  return (
    <div class="manage-user">
      <Items items={items} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ManageUsers;
