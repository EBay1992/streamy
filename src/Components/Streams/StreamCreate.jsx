import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../actions";

class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    const className = `field ${meta.error && meta.touched ? "error" : null}`;
    return (
      <div className={className}>
        <label>{label}:</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="ui form error">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formVlues) => {
  const errors = {};
  if (!formVlues.title) {
    errors.title = "You must enter a title";
  }
  if (!formVlues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

// export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
const formWrapped = reduxForm({ form: "streamCreate", validate })(StreamCreate);
export default connect(null, { createStream })(formWrapped);
