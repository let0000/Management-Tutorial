import React from "react";

export default function Customer(props) {
  return (
    <div>
      <CustomerProfile image={props.image} name={props.name} id={props.id} />
      <CustomerInfo
        birthday={props.birthday}
        gender={props.gender}
        job={props.job}
      />
    </div>
  );
}

function CustomerProfile({ image, name, id }) {
  return (
    <div>
      <img src={image} alt="profile" width="100" />
      <h2>
        {name}({id})
      </h2>
    </div>
  );
}

function CustomerInfo({ birthday, gender, job }) {
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
}
