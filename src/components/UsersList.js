import { getUserById, deleteUserById, updateUserById } from '../services/userService';
import { User } from './User';
import { UserInfo } from './UserInfo';
import { DeleteUser } from './DeleteUser';
import { Update } from './Update';
import { useState } from 'react';

export const UsersList = ({ users }) => {

    const [showUserInfo, setShowUserInfo] = useState(false);
    const [userInfoObj, setUserInfoObj] = useState(null)

    const [showDeleteUser, setShowDeleteUser] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);

    const [showUpdateUser, setShowUpdateUser] = useState(false);
    const [updateUserObj, setUpdateUserObj] = useState(null);



    

    const onInfoClickHandler = async (userId) => {
        console.log(userId)
        const user = await getUserById(userId);
        console.log(user)
        setShowUserInfo(true);
        setUserInfoObj(user)

    }

    const onInfoCloseHandler = () => {
        setShowUserInfo(null);
    }

    const onDeleteClickHandler = async (userId) => {
        setShowDeleteUser(true);
        setDeleteUserId(userId);
    }

    const deleteUser = async () => {
        const result = await deleteUserById(deleteUserId);
        setDeleteUserId(null);
        setShowDeleteUser(false);
    }

    const onDeleteCloseHandler = () => {
        setShowDeleteUser(false);
    }

    const onUpdateClickHandler = async (userId) => {

        const user = await getUserById(userId);
        console.log(user)
        setShowUpdateUser(true)
        setUpdateUserObj(user);
       

    }

    const updateCloseHandler = () => {
        setShowUpdateUser(null);
    }

    const updateUser = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const userData = Object.fromEntries(formData);

        console.log(userData)
        updateUserById(updateUserObj._id, userData)
            .then(response => console.log(response))

        setShowUpdateUser(null);
    }



    return (
        <div className="table-wrapper">
            {showUserInfo && <UserInfo onClose={onInfoCloseHandler} user={userInfoObj} />}
            {showDeleteUser && <DeleteUser onDelete={deleteUser} onClose={onDeleteCloseHandler} />}
            {showUpdateUser && <Update onClose={updateCloseHandler} onUpdate={updateUser} user={updateUserObj} />}
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <User
                        key={user._id}
                        user={user}
                        onInfoClickHandler={onInfoClickHandler}
                        onDeleteClickHandler={onDeleteClickHandler}
                        onUpdateClickHandler={onUpdateClickHandler}
                    />)}
                </tbody>
            </table>

        </div>

    )
}