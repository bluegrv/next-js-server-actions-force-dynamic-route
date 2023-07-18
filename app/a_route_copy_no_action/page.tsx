/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <div>
    <h1>Here is a heading</h1>
    <form>
      <label htmlFor="name">Wow it's a text field</label>
      <input id="name" type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  </div>
}
