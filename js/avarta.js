	var Avatar = React.createClass({
		getDefaultProps:function(){
			return{
				path:'http://1.gravatar.com/avatar/c71cab0c1acf91403bf0b3bd8b18757d' 
			};
		},
		render: function() {
			return (
				<div className="Avatar">
					<a href={this.props.path}>
						<img src={this.props.path}/>
					</a>
				</div>
			);
		}
	});

	React.render(<Avatar />,document.body)