function Profile({ name, age }) {
  return <h2>{name} is {age} years old.</h2>;
}

function App() {
  const user = { name: "May", age: 21 };

  return <Profile {...user} />;  // Spread Operator ကိုသုံးပြီး user Object ထဲက Data တွေကို Pass လုပ်တယ်
}

export default App;
