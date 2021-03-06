import Home from "../components/home";
import {connect} from "react-redux"
import { addToCart, removeToCart } from "../services/actions/actions";
 
const mapStateToProps = state => ({
    data: state.cartItems
}) 

const mapDispatchToProp = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProp)(Home)