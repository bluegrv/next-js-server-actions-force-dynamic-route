import { serverAction } from "../_actions";

export const revalidate = 1;

export default function Home() {
  return <div>
    <h1>Here is a heading</h1>
    <form action={serverAction}>
      <label htmlFor="name">Wow it's a text field</label>
      <input id="name" type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  </div>
}
