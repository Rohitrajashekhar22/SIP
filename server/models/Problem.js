import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },

  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  constraints: [{
    type: String,
    required: true
  }],
  examples: [{
    input: String,
    output: String,
    explanation: String
  }],
  starterCode: {
    java: {
        type: String,
        required: true
    },

    python: {
        type: String,
        required: true
    },

    javascript: {
        type: String,
        required: true
    },

    cpp: {
        type: String,
        required: true
    },

    c: {
        type: String,
        required: true
    }
},
  visibleTestCases: [{
    input: String,
    output: String
  }],
    hiddenTestCases: [{
    input: String,
    output: String
  }],
  sheet: {
    type: String,
    required: true
  },
  leetCodeLink: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }]
});

export default mongoose.model('Problem', problemSchema);