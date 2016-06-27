var Comment = React.createClass({
    propTypes: {
        author: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            <div>
                <span className='author'>{this.props.author}</span>
                <span className='content'>{this.props.children}</span>
            </div>
        );
    }
});

ReactDOM.render(
    <Comment author={1}>
        <p style={{
            color:'red'
        }}>
            this is just a demo
        </p>
    </Comment>,
    document.getElementById('example')
);