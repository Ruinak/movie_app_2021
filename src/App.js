import React from "react";

function Food({ fav }) {
  console.log(fav);
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    // App 컴포넌트는 HTML을 반환하고 있습니다.
    <div>
      <h1>Hello!!!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
