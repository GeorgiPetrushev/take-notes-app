import NoteList from "./components/NoteList";

const notes = [
  {
  id:"1",
  text: "note one",
  data: "10/10/2022"
},
{
  id:"1",
  text: "note 2",
  data: "10/10/2022"
},
{
  id:"1",
  text: "note 3",
  data: "10/10/2022"
}
]

const App = (prop) => {
  return (
    <div>
      <NoteList prop={notes}/>
    </div>
  );
};

export default App;
