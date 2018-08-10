import React from 'react'
import PubSub from 'pubsub-js'

class Item extends React.Component{

    del = () => {
        if(window.confirm(`确定要删除 ${this.props.commont.username} 吗？`)){
            let {index} = this.props
            PubSub.publish('message', index)
        }
    }

    render(){
        const {commont} = this.props
        let del = this.del
        return (
            <li className="list-group-item">
                <div className="handle">
                <a style={{cursor:'pointer'}} onClick={del}>删除</a>
                </div>
                <p className="user">
                <span>{commont.username}</span>
                <span>说:</span>
                </p>
                <p className="centence">{commont.context}</p>
            </li>
        )
    }
}

export default Item