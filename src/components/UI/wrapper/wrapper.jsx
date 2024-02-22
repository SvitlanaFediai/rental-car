import React from "react";

const Wrapper = ({ className, children } ) => {
  return (
    <section className={className}>
      <div className="content">
        {children}
      </div>
    </section>
  )
}

export default Wrapper;