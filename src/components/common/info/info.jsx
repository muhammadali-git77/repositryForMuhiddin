import clsx from "clsx";
import React, { useState } from "react";
import Discription from "./discription";

export default function Info() {
  let buttons = ["Tavsif", "Aktiyorlar va ijodkorlar", "Sharhlar"];
  const [active, setActive] = useState(buttons[0]);
  return (
    <section className="py-10 my-5 ">
      <div content="container">
        {buttons.map((item) => (
          <button
            onClick={() => setActive(item)}
            className={clsx("btn rounded-md m-1", {
              "btn-primary": item === active,
              "btn-ghost": item !== active,
            })}
            key={item}
          >
            {item}
          </button>
        ))}
        {active === "Tavsif" && <Discription />}
        {active === "Aktiyorlar va ijodkorlar" && (
          <>
            <h1> Aktiyorlar va ijodkorlar</h1>
          </>
        )}
        {active === "Sharhlar" && (
          <>
            <h1>Sharhlar</h1>
          </>
        )}
      </div>
    </section>
  );
}
