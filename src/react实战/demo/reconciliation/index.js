var Li = React.createClass({
    render: function() {
        return (
            <div>{this.props.content}</div>
        );
    },
    componentWillReceiveProps:function(nextProps){
        console.log(this.props.id,nextProps);
    },
    componentWillUnmount:function(){
        console.log(this.props.id+'will unmount');
    }
});



var Ul = React.createClass({
    getInitialState: function() {
        return {list: [{
            id:1,
            content:'list 1'
        },{
            id:2,
            content:'list 2'
        },{
            id:3,
            content:'list 3'
        },{
            id:4,
            content:'list 4'
        }]};
    },
    insert:function(){
      var list=this.state.list;
        list.shift();
        this.setState({
            list:list
        });
    },
    render: function() {
        return (
            <div>
                <button onClick={this.insert.bind(this)}>shift one item</button>
                {this.state.list.map(function(item){
                    return <Li key={item.id} content={item.content} id={item.id}></Li>
                })}
            </div>
        );
    }
});


ReactDOM.render(<Ul></Ul>, document.getElementById('example')
);