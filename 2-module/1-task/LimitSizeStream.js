const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);

    this.streamLength = 0;
    this.streamLimit = options.limit;
  }

  _transform(chunk, encoding, callback) {
    this.streamLength += chunk.length;

    if (this.streamLength > this.streamLimit) {
      callback(new LimitExceededError());
    }

    this.push(chunk);
    callback();
  }
}

module.exports = LimitSizeStream;
