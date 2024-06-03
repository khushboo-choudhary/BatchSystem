import React from 'react'

export default function Download() {
  return (
    <div>
      <div className="  flex items-center justify-center py-16 relative px-6">
        <img
          width={1100}
          height={1100}
          src={"/Frame.png"}
          alt="imge"
        />
        <img
          className=" max-sm:hidden absolute top-36 left-10"
          width={50}
          height={50}
          src={"/Star 8.png"}
          alt="iage"
        />
        <img
          className=" max-md:hidden -z-10 absolute top-[-100px] left-32"
          width={500}
          height={500}
          src={"/red.png"}
          alt="imge"
        />
      </div>
    </div>
  );
}
