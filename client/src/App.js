import "./App.css";
import NotesList from "./components/NotesList";
import { Routes, Route } from "react-router-dom";
import Note from "./components/Note";
import StartPage from "./components/StartPage";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: "http://localhost:3005/graphql",
    cache: new InMemoryCache(),
  });
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/notes/:id" element={<Note />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
