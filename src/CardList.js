import React,{ Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.robots.map((user,i) => {
                        return (
                            <Card 
                                key={i} 
                                id={user.id} 
                                name={user.name} 
                                email={user.email} 
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default CardList;