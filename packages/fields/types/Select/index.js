const Field = require('../../Field');

module.exports = class Select extends Field {
  constructor(path, config) {
    super(path, config);
    this.options = config.options;
    this.graphQLType = 'String';
  }
  addToMongooseSchema(schema) {
    const { mongooseOptions } = this.config;
    schema.add({
      [this.path]: { type: String, ...mongooseOptions },
    });
  }
  extendAdminMeta(meta) {
    return { ...meta, options: this.options };
  }
};
