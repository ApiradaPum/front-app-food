import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from '../actions';

class PostsNews extends Component {
	renderField(field){
		const { meta: { touched , error } } = field;
		const className=`form-group ${touched && error? 'has-danger' : ''}`

		return (
	      <div className={className}>
	      <label>{field.label}</label>
	      		<input
	      		    className="form-control"
	      			type="text"
	      		    {...field.input} 
	      		 />
	      		 <div className="text-help">
	      		 {touched? error: ''}
	      		 </div>
	      </div>
	    );
	}

	onSubmit(values){
		this.props.history.push('/');
		this.props.createPost(values);
	}

  	render() {
  		const { handleSubmit } = this.props;
	    return (
	      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
	      	<Field
	      	label="Title For Post"
	      	name="title" 
	      	component={this.renderField}
	      	/>
	      	<Field
	      	label="Categories"
	      	name="categories" 
	      	component={this.renderField}
	      	/>
	      	<Field
	      	label="Post Content"
	      	name="content" 
	      	component={this.renderField}
	      	/>
	      	<button type="submit" className="btn btn-primary">Submit</button>
	      	<Link to="/" className="btn btn-danger">Cancle</Link>
	      </form>
	    );
    }
}

function validate(values){
	const errors = {};

	if(!values.title ){
		errors.title = "Enter a title"
	}
	if(!values.categories){
		errors.categories = "Enter some categories"
	}
	if(!values.content){
		errors.content = "Enter some content please"
	}
	return errors;

}


export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
connect (null, {createPost})(PostsNews)
);
