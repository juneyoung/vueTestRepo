import React,{ Component, Fragment } from 'react';

export default class PhoneForm extends Component {
	state = {
		name: ''
		, phone : ''
	}

	handleChange = (e) => {
		this.setState({[e.target.name] : e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();


		this.props.onCreate(this.state);

		this.setState({
			name : ''
			, phone : ''
		});
	}

	render () {

		// let data = 

		return (
			<Fragment>
				<form onSubmit={this.handleSubmit}>
					<div className='inputGroup'>
						<input type='text' placeholder='Enter name' value={this.state.name} name='name' onChange={this.handleChange}/>
						<input type='text' placeholder='Enter phone' value={this.state.phone} name='phone' onChange={this.handleChange}/>
					</div>
					<button type='submit'>Register</button>

					<div className='displayGroup'>				
						<div>{this.state.name}</div>			
						<div>{this.state.phone}</div>
					</div>
				</form>
			</Fragment>
		)
	}
}