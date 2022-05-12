import PropTypes from 'prop-types';
function Profile (props){

return( 
<>
<h2>{props.name}</h2>
<h2>{props.bio}</h2>
<h2>{props.profession}</h2>
<button onClick={() =>props.handelName(props.name)}>alert</button>




</>

)


}

Profile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handelName: PropTypes.func,

}

export default Profile