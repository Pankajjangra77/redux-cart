import Header from "../components/header";
import {connect} from "react-redux"
 
const mapStateToProps = state => ({
    data: state.cartItems
}) 

const mapDispatchToProp = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProp)(Header)