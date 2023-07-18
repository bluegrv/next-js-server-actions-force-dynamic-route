"use client";

import { serverAction } from "../_actions";

const ButtonWithAction = () => {
  return <button onClick={() => serverAction()}>Click me</button>;
}
export default ButtonWithAction;