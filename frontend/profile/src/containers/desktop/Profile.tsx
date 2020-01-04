import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import { fetchProfile, change, submit } from '../../actions'
import Profile from '../../components/desktop/Profile'

const enhance = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  },
})

export default connect(
  state => ({
    profile: state.profile.profile,
    errors: state.profile.errors,
  }),
  dispatch => ({
    onLoad: () => dispatch(fetchProfile()),
    onChange: (field, value) => dispatch(change(field, value)),
    onSubmit: () => dispatch(submit()),
  }),
)(enhance(Profile))
