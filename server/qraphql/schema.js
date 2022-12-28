const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
} = graphql;
const db = require("../db/models/note.model");

const {deleteNote, updateNote, createNote} = require("./resolveFunctions")

const NoteType = new GraphQLObjectType({
  name: "Note",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  }),
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    notes: {
      type: new GraphQLList(NoteType),
      resolve(parent, args) {
        return db.find({});
      },
    },
    note: {
      type: NoteType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return db.findById(args.id);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createNote: {
      type: NoteType,
      args: {
        title: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      resolve(parent, args) {
        return createNote(args.title, args.content );
      },
    },
    updateNote: {
      type: NoteType,
      args: {
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return updateNote(args.id, args.title, args.content,);
      },
    },
    deleteNote: {
      type: GraphQLBoolean,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return deleteNote(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query,
  mutation,
});
