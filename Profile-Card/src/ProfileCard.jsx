// import PropTypes from 'prop-types';


// export default function ProfileCard({name,age,message}){
//   return <>
//     <h1>{name}</h1>
//     <h1>{age} years</h1>
//     <h1>{message}</h1>
//   </>
// }

// MyCard.defaultProps = {
//   name: "Default",
//   age: 0,
//   message: "This is default props"
// }

// ProfileCard.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   message: PropTypes.string,
// }

import PropTypes from 'prop-types';

export default function ProfileCard({ name, age, message }) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{age} years</h1>
      <h1>{message}</h1>
    </>
  );
}

// Set default values if props are missing
ProfileCard.defaultProps = {
  name: "Unknown",
  age: 0,
  message: "No message provided",
};

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  message: PropTypes.string,
};
