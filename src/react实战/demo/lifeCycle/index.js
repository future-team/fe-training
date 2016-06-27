var LikeButton = React.createClass({
    componentWillMount:function(){
        /*this.setState({
            liked:false
        });*/
    },
    componentDidMount:function(){
      console.log(this.refs.paragraph);
    },
    componentWillReceiveProps: function(nextProps) {
       console.log('old props:'+this.props.content+', new props:'+nextProps.content)
    },
    getInitialState: function() {
        return {liked: true};
    },
    componentWillUpdate:function( nextProps,  nextState){
        console.log('nextProps',nextProps);
        console.log('nextState',nextState);
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        console.log('during render');
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p ref='paragraph' onClick={this.handleClick}>
                You {text} {this.props.content}. Click to toggle.
            </p>
        );
    }
});
var DemoApp=React.createClass({
    componentDidMount:function(){
        var self=this;
        setTimeout(function(){
            self.setState({
                content:'X-Man'
            })
        },1000);
    },
    getInitialState: function() {
        return {content: 'WarCraft'};
    },
    render:function(){
        return(
            <LikeButton content={this.state.content} />
        )
    }
})





function Country ({name, iso}){
    return (
        <span className="country">
        <span className={"flag-icon flag-icon-"+iso}/>
        <span className="country-name">{name}</span>
    </span>
    )
}
ReactDOM.render(
    <DemoApp name='haha' ios='asdfa' />,
    document.getElementById('example')
);