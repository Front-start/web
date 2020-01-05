import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import { fetchUsers, handleSortSelect } from '../../actions/list'
import List from '../../components/desktop/List'

const enhance = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  },
})

export default connect(
  state => ({
    rows: state.users.list.rows,
    sortOrder: state.users.list.sortOrder,
  }),
  dispatch => ({
    onLoad: () => dispatch(fetchUsers()),
    onSortSelect: order => dispatch(handleSortSelect(order)),
  }),
)(enhance(List))
