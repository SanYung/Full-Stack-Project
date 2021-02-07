
import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { openModal} from '../../actions/modal_actions';

const msp = state => {
    return {
    }
}

const mdp = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
    }

}

export default connect(msp, mdp)(Searchbar);