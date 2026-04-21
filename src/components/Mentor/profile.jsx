const Profile = ({img, name, job, children}) => {
    return ( 
        <div className="profile">
            <div className="profile-info">
                <img src={img} allt={name} />
                <div>
                    <h4 className="name">{name}</h4>
                    <p className="job">{job}</p>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Profile;