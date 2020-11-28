import React, { Fragment } from "react";

function Card({ row }) {
  return (
    <Fragment>
      <li key={row.id} style={{ background: "orange" }}>
        {row.name}
      </li>
    </Fragment>
  );
}

export default React.memo(Card, (prevProps, nextProps)=> {
    return prevProps.id === nextProps.id
});

//RETURN FALSE

//export default Card