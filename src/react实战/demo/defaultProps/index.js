var Comment = React.createClass({
    propTypes: {
        author: React.PropTypes.string.isRequired,
    },
    getDefaultProps: function() {
        return {
            author: 'default author'
        };
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
    <Comment>
        <p style={{
            color:'red'
        }}>
            this is just a demo
        </p>
    </Comment>,
    document.getElementById('example')
);