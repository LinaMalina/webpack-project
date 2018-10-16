import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPopularTacos } from '../../action/getPopularTacos';
import { Home } from '../../Components/Home/Home.component'

class HomeLayout extends Component {
    componentDidMount(){
        this.props.getPopularTacos()
    }
    render(){
        return(
            <Home
                resipe={this.props.resipe}
            />
        )
    }
}
const mapStateToProps = ({ PopularTacos }) => ({
    resipe: PopularTacos.resipe,
});
export default connect(mapStateToProps, { getPopularTacos })(HomeLayout)